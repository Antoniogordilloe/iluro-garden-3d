import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, CircularProgress, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { Box3, Vector3 } from "three";
import type { Group, Object3D } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type PlantRendererProps = {
	modelPath: string;
	sx?: SxProps<Theme>;
	rotationSpeed?: number;
	cameraPosition?: [number, number, number];
	modelScale?: number;
};

type PlantModelProps = {
	scene: Object3D;
	rotationSpeed: number;
	modelScale: number;
};

type PlantLoadState = {
	loadedPath: string | null;
	scene: Object3D | null;
	normalizedScale: number;
	error: string;
};

const CAMERA_FOV = 45;
const MIN_CAMERA_DISTANCE = 1.6;
const TARGET_MODEL_SIZE = 2.0;

const getNormalizedScale = (scene: Object3D, targetSize: number) => {
	scene.updateMatrixWorld(true);
	const bounds = new Box3().setFromObject(scene);
	if (bounds.isEmpty()) return 1;
	const size = bounds.getSize(new Vector3());
	const maxDimension = Math.max(size.x, size.y, size.z);
	if (maxDimension === 0) return 1;
	return targetSize / maxDimension;
};

const getFittedCameraDistance = (scene: Object3D, modelScale: number, fov: number) => {
	scene.updateMatrixWorld(true);

	const bounds = new Box3().setFromObject(scene);
	if (bounds.isEmpty()) {
		return MIN_CAMERA_DISTANCE;
	}

	const size = bounds.getSize(new Vector3()).multiplyScalar(modelScale);
	const maxDimension = Math.max(size.x, size.y, size.z);
	const fitDistance =
		maxDimension / (2 * Math.tan((fov * Math.PI) / 360));

	return Math.max(fitDistance * 1.1, MIN_CAMERA_DISTANCE);
};

const getCameraPosition = (
	preferredPosition: [number, number, number],
	fitDistance: number,
): [number, number, number] => {
	const direction = new Vector3(...preferredPosition);
	if (direction.lengthSq() === 0) {
		direction.set(0, 0, 1);
	}

	const distance = Math.max(direction.length(), fitDistance);
	direction.normalize().multiplyScalar(distance);

	return [direction.x, direction.y, direction.z];
};

const centerScene = (scene: Object3D) => {
	scene.updateMatrixWorld(true);

	const bounds = new Box3().setFromObject(scene);
	if (bounds.isEmpty()) {
		return scene;
	}

	const center = new Vector3();
	bounds.getCenter(center);
	scene.position.sub(center);
	scene.updateMatrixWorld(true);

	return scene;
};

const areCameraPositionsEqual = (
	a: [number, number, number],
	b: [number, number, number],
) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2];

const arePlantRendererPropsEqual = (
	prev: PlantRendererProps,
	next: PlantRendererProps,
) =>
	prev.modelPath === next.modelPath &&
	prev.sx === next.sx &&
	prev.rotationSpeed === next.rotationSpeed &&
	prev.modelScale === next.modelScale &&
	areCameraPositionsEqual(prev.cameraPosition ?? [0, 1, 3], next.cameraPosition ?? [0, 1, 3]);

const PlantModel = ({
	scene,
	rotationSpeed,
	modelScale,
}: PlantModelProps) => {
	const modelRef = useRef<Group>(null);
	const timeRef = useRef(0);

	useFrame((_, delta) => {
		timeRef.current += delta;
		if (modelRef.current) {
			modelRef.current.rotation.y += delta * rotationSpeed;
			modelRef.current.position.y = Math.sin(timeRef.current * 0.6) * 0.06;
		}
	});

	return (
		<group ref={modelRef} scale={modelScale}>
			<primitive object={scene} />
		</group>
	);
};

const MemoizedPlantModel = memo(PlantModel);

export const PlantRenderer = memo(({
	modelPath,
	sx,
	rotationSpeed = 1.2,
	cameraPosition = [0, 1, 3],
	modelScale = 1,
}: PlantRendererProps) => {
	const [modelState, setModelState] = useState<PlantLoadState>({
		loadedPath: null,
		scene: null,
		normalizedScale: 1,
		error: "",
	});

	useEffect(() => {
		if (!modelPath) return;

		let isCancelled = false;

		const loader = new GLTFLoader();
		loader.load(
			modelPath,
			(gltf) => {
				if (!isCancelled) {
					const centered = centerScene(gltf.scene.clone(true));
					setModelState({
						loadedPath: modelPath,
						scene: centered,
						normalizedScale: getNormalizedScale(centered, TARGET_MODEL_SIZE),
						error: "",
					});
				}
			},
			undefined,
			(error) => {
				if (!isCancelled) {
					const errorMessage =
						error instanceof Error ? error.message : String(error);
					setModelState({
						loadedPath: modelPath,
						scene: null,
						normalizedScale: 1,
						error: errorMessage,
					});
				}
			},
		);

		return () => {
			isCancelled = true;
		};
	}, [modelPath]);

	const isLoading = modelState.loadedPath !== modelPath;
	const modelScene = modelState.scene;
	const effectiveScale = modelState.normalizedScale * modelScale;
	const fittedCameraDistance = useMemo(
		() =>
			modelScene
				? getFittedCameraDistance(modelScene, effectiveScale, CAMERA_FOV)
				: MIN_CAMERA_DISTANCE,
		[modelScene, effectiveScale],
	);
	const resolvedCameraPosition = useMemo(
		() => getCameraPosition(cameraPosition, fittedCameraDistance),
		[cameraPosition, fittedCameraDistance],
	);
	const baseSx: SxProps<Theme> = [
		{
			width: "100%",
			height: 320,
			minHeight: 220,
			borderRadius: 3,
			overflow: "hidden",
			backgroundColor: "rgba(255,255,255,0.04)",
		},
		...(Array.isArray(sx) ? sx : sx ? [sx] : []),
	];

	if (!modelPath) {
		return (
			<Box sx={[...baseSx, { display: "grid", placeItems: "center" }]}>
				<Typography variant="body2" color="text.secondary" sx={{ px: 2, textAlign: "center" }}>
					3D model assets are not available.
				</Typography>
			</Box>
		);
	}

	if (isLoading) {
		return (
			<Box sx={[...baseSx, { display: "grid", placeItems: "center" }]}>
				<CircularProgress size={48} thickness={4.5} aria-label="Loading 3D model" />
			</Box>
		);
	}

	if (modelState.error) {
		return (
			<Box sx={[...baseSx, { display: "grid", placeItems: "center", px: 2 }]}>
				<Box>
					<Typography variant="body2" sx={{ textAlign: "center" }}>
						Unable to load model: {modelPath}
					</Typography>
					<Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: "block", textAlign: "center" }}>
						{modelState.error}
					</Typography>
				</Box>
			</Box>
		);
	}

	if (!modelScene) {
		return null;
	}

	return (
		<Box sx={baseSx}>
			<Canvas camera={{ position: resolvedCameraPosition, fov: CAMERA_FOV }}>
				<ambientLight intensity={0.8} />
				<directionalLight position={[3, 4, 3]} intensity={1.2} />
				<MemoizedPlantModel
					scene={modelScene}
					rotationSpeed={rotationSpeed}
					modelScale={effectiveScale}
				/>
				<OrbitControls
					enablePan={false}
					target={[0, 0, 0]}
					minDistance={fittedCameraDistance * 0.85}
					maxDistance={fittedCameraDistance * 2}
				/>
			</Canvas>
		</Box>
	);
}, arePlantRendererPropsEqual);
