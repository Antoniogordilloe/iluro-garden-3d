import personIcon from "../../assets/person.png";
import basketIcon from "../../assets/basket.png";
import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar";
import { PlantRenderer } from "../PlantRenderer";

const navbarLogoPath = new URL(
	"../../assets/models/logo.glb",
	import.meta.url,
).href;

export const Navbar = () => {
	return (
		<nav className="bg-[var(--color-nav)] px-4 py-2 text-[var(--color-text-invert)]">
			<div className="flex w-full items-center justify-between gap-4 max-md:flex-col max-md:items-stretch">
				<div className="flex items-center gap-4 max-md:flex-wrap max-md:justify-center">
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-2xl font-bold text-[var(--color-accent-strong)] no-underline"
					>
							<span className="pointer-events-none h-10 w-10 overflow-hidden rounded-full ">
							<PlantRenderer
								modelPath={navbarLogoPath}
								className="h-full w-full"
								rotationSpeed={0.5}
								cameraPosition={[0.05, 3, 0.05]}
								modelScale={2}
							/>
						</span>
						<span>Iluro Garden</span>
					</Link>
					<a
						href="#"
						className="inline-flex items-center gap-1.5 font-medium text-[var(--color-text-invert)] no-underline transition-colors duration-200 hover:text-[var(--color-accent)]"
					>
						<img
							src={personIcon}
							alt="Profile"
							className="h-[18px] w-[18px] object-contain"
						/>
						Account
					</a>
					<a
						href="#"
						className="inline-flex items-center gap-1.5 font-medium text-[var(--color-text-invert)] no-underline transition-colors duration-200 hover:text-[var(--color-accent)]"
					>
						<img
							src={basketIcon}
							alt="Basket"
							className="h-[18px] w-[18px] object-contain"
						/>
						Cart
					</a>
					<a
						href="#"
						className="inline-flex items-center gap-1.5 font-medium text-[var(--color-text-invert)] no-underline transition-colors duration-200 hover:text-[var(--color-accent)]"
					>
						About
					</a>
				</div>

				<div className="flex justify-center gap-4">
					<SearchBar />
				</div>
			</div>
		</nav>
	);
};
