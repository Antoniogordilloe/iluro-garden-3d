import { RoundActionLink } from "../RoundActionLink";

type PlantPageActionsProps = {
	categoryId: string;
};

export const PlantPageActions = ({ categoryId }: PlantPageActionsProps) => {
	return (
		<div className="mb-4 flex flex-wrap justify-end gap-2">
			<RoundActionLink to={`/category/${categoryId}`}>
				Go Back to Category
			</RoundActionLink>
			<RoundActionLink to="/">See All Categories</RoundActionLink>
		</div>
	);
};
