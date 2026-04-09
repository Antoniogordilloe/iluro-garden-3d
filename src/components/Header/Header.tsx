import { useState } from "react";
import { Navbar } from "../Navbar";

export const Header = () => {
	const [isOfferVisible, setIsOfferVisible] = useState(true);
	const madeupOffer = "Spring Vault Sale: 2 rare plants + free ceramic pot for 39.90";

	return (
		<header
			className="sticky top-0 z-100 block w-full bg-cover bg-center"
		>
			{isOfferVisible ? (
				<div className="border-b border-(--color-offer-border) bg-(--color-offer-bg) px-4 py-1 text-(--color-offer-text) max-md:px-3">
					<div className="flex min-h-8 w-full items-center justify-between gap-2">
						<p className="m-0 text-xs font-semibold tracking-[0.01em] md:text-sm">
							{madeupOffer}
						</p>
						<button
							type="button"
							onClick={() => setIsOfferVisible(false)}
							className="inline-flex h-5 w-5 items-center justify-center border border-(--color-offer-dismiss-border) bg-(--color-offer-dismiss-bg) p-0 text-(--color-offer-text) text-[10px] leading-none transition-colors duration-200 hover:bg-(--color-offer-dismiss-hover) focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-(--color-offer-text)"
							aria-label="Close offer banner"
						>
							X
						</button>
					</div>
				</div>
			) : null}
			<Navbar />
		</header>
	);
};
