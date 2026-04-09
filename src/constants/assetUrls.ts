export const BLOB_BASE_URL = "https://s29mp5al263ezccl.public.blob.vercel-storage.com";
export const ASSET_BASE_URL = `${BLOB_BASE_URL}/public`;
export const MODELS_BASE_URL = `${BLOB_BASE_URL}/models`;

export const toAssetUrl = (path: string) => `${ASSET_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const toModelUrl = (modelName: string) => {
	const encodedModelName = encodeURIComponent(modelName);
	return `${MODELS_BASE_URL}/${encodedModelName}/${encodedModelName}.glb`;
};

export const FAVICON_URL = toAssetUrl("/favicon.svg");
export const NAVBAR_LOGO_MODEL_URL = "https://s29mp5al263ezccl.public.blob.vercel-storage.com/logo.glb";

export const GENERATED_GARDEN_IMAGE_URLS = [
	toAssetUrl("/generated-gardens/garden-01.svg"),
	toAssetUrl("/generated-gardens/garden-02.svg"),
	toAssetUrl("/generated-gardens/garden-03.svg"),
	toAssetUrl("/generated-gardens/garden-04.svg"),
	toAssetUrl("/generated-gardens/garden-05.svg"),
	toAssetUrl("/generated-gardens/garden-06.svg"),
] as const;

export const CATEGORY_ICON_URLS = {
	lowLight: toAssetUrl("/category-icons/low-light.jpeg"),
	petSafe: toAssetUrl("/category-icons/pet-safe.jpeg"),
	airPurifying: toAssetUrl("/category-icons/air-purifying.jpeg"),
	hanging: toAssetUrl("/category-icons/hanging.jpeg"),
	statement: toAssetUrl("/category-icons/statement.jpeg"),
	humidity: toAssetUrl("/category-icons/humidity.jpeg"),
} as const;