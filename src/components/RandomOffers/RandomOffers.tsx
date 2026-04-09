const generatedGardenImages = [
	"/generated-gardens/garden-01.svg",
	"/generated-gardens/garden-02.svg",
	"/generated-gardens/garden-03.svg",
	"/generated-gardens/garden-04.svg",
	"/generated-gardens/garden-05.svg",
	"/generated-gardens/garden-06.svg",
];

const pickRandomGardenImages = (count: number) => {
	const shuffled = [...generatedGardenImages];

	for (let i = shuffled.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}

	return shuffled.slice(0, count);
};

const withGardenImages = <T extends object>(items: T[]) => {
	const randomImages = pickRandomGardenImages(items.length);

	return items.map((item, index) => ({
		...item,
		imageUrl: randomImages[index],
	}));
};

const randomOffers = withGardenImages([
	{
		title: "2-for-1 Terracotta Pots",
		description: "Buy one medium terracotta pot and get another one free this week only.",
		badge: "Flash Offer",
	},
	{
		title: "Mystery Plant Box - 35% Off",
		description:
			"A surprise pack with 3 indoor plants and care cards. Limited stock for newsletter members.",
		badge: "Members",
	},
	{
		title: "Free Repotting Service",
		description:
			"Bring any plant purchased today and we will repot it for free with premium soil mix.",
		badge: "Today",
	},
]);

export const RandomOffers = () => {
	return (
		<section className="relative overflow-hidden rounded-3xl border border-(--color-card-border) bg-(--color-surface-2) p-5 shadow-[0_10px_32px_rgba(0,0,0,0.24)] backdrop-blur-md md:p-7">
			<div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(214,173,103,0.32)_0%,rgba(214,173,103,0)_70%)]" />
			<div className="pointer-events-none absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(104,145,128,0.28)_0%,rgba(104,145,128,0)_70%)]" />

			<div className="relative mb-5 flex flex-wrap items-center justify-between gap-3">
				<div>
					<p className="mb-2 inline-flex rounded-full bg-(--color-pill-bg) px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-(--color-pill-text)">
						Plant Shop Perks
					</p>
					<h2 className="text-2xl font-bold text-(--color-heading)">Random Offers</h2>
				</div>
				<span className="rounded-full border border-(--color-card-border) bg-(--color-button-bg) px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-(--color-accent)">
					Limited Time
				</span>
			</div>

			<div className="relative grid grid-cols-1 gap-4 xl:grid-cols-3">
				{randomOffers.map((offer) => (
					<article
						key={offer.title}
						className="group rounded-2xl border border-(--color-card-border) bg-(--color-surface) p-4 transition-transform duration-300 hover:-translate-y-1"
					>
						<img
							src={offer.imageUrl}
							alt={offer.title}
							className="mb-3 h-36 w-full rounded-xl object-cover"
							loading="lazy"
						/>
						<p className="mb-2 inline-flex rounded-full bg-(--color-button-bg) px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-(--color-accent)">
							{offer.badge}
						</p>
						<h3 className="mb-2 text-base font-semibold text-(--color-heading)">{offer.title}</h3>
						<p className="text-sm leading-6 text-(--color-text-soft)">{offer.description}</p>
					</article>
				))}
			</div>
		</section>
	);
};
