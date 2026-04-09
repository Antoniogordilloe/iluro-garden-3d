import { Link } from "react-router-dom";

export const AboutPage = () => {
	return (
		<main className="mx-auto w-full max-w-[100rem] p-8 max-md:p-5">
			<section className="mb-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)] max-md:p-6">
				<p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
					About Iluro Garden
				</p>
				<h1 className="mb-4 text-4xl font-extrabold leading-tight text-[var(--color-accent-strong)] md:text-5xl">
					Where Plant Stories Come to Life
				</h1>
				<p className="max-w-4xl text-base leading-7 text-[var(--color-text-invert)] md:text-lg">
					Iluro Garden is a curated digital greenhouse where each plant is
					presented with personality, practical care guidance, and visual
					detail. The project was designed to make plant discovery feel
					playful while still being useful for everyday plant care.
				</p>
			</section>

			<section className="grid gap-4 md:grid-cols-3">
				<article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6">
					<h2 className="mb-2 text-xl font-bold text-[var(--color-heading)]">
						Our Mission
					</h2>
					<p className="text-sm leading-6 text-[var(--color-text-soft)]">
						Help people build confidence with plants by blending
						inspiration and clear care tips in one place.
					</p>
				</article>
				<article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6">
					<h2 className="mb-2 text-xl font-bold text-[var(--color-heading)]">
						What You Can Explore
					</h2>
					<p className="text-sm leading-6 text-[var(--color-text-soft)]">
						Browse categories, open detailed plant pages, and find related
						plants to continue your journey.
					</p>
				</article>
				<article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6">
					<h2 className="mb-2 text-xl font-bold text-[var(--color-heading)]">
						Built With Care
					</h2>
					<p className="text-sm leading-6 text-[var(--color-text-soft)]">
						The experience uses React, Vite, and reusable UI components to
						stay fast, modular, and easy to grow.
					</p>
				</article>
			</section>

			<div className="mt-10 flex flex-wrap items-center gap-4">
				<Link
					to="/"
					className="rounded-full bg-[var(--color-accent-strong)] px-5 py-2.5 font-semibold text-white no-underline transition-opacity duration-200 hover:opacity-90"
				>
					Back Home
				</Link>

			</div>
		</main>
	);
};
