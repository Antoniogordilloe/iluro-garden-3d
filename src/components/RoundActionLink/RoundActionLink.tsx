import { type ReactNode } from "react";
import { Link, type To } from "react-router-dom";

interface RoundActionLinkProps {
	to: To;
	children: ReactNode;
}

export const RoundActionLink = ({ to, children }: RoundActionLinkProps) => {
	return (
		<Link
			to={to}
			className="inline-flex w-fit cursor-pointer items-center justify-center rounded-full border border-[var(--color-card-border)] bg-[var(--color-button-bg)] px-4 py-2 text-[0.9rem] font-semibold text-[var(--color-text-invert)] no-underline transition duration-200 hover:-translate-y-px hover:bg-[var(--color-button-hover)]"
		>
			{children}
		</Link>
	);
};
