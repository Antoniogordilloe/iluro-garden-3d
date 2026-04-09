export const toPlantSlug = (name: string) =>
	name
		.toLowerCase()
		.trim()
		.replace(/["']/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
