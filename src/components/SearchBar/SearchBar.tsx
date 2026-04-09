import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { plantCards } from "../../constants/plantCards";
import { toPlantSlug } from "../../utils/plantSlug";

export const SearchBar = () => {
	const [query, setQuery] = useState("");
	const [open, setOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	const trimmed = query.trim();
	const suggestions = trimmed
		? plantCards
				.filter((p) => p.name.toLowerCase().includes(trimmed.toLowerCase()))
				.slice(0, 8)
		: [];

	const handleSelect = (name: string) => {
		setQuery(name);
		setOpen(false);
		navigate(`/plant/${toPlantSlug(name)}`);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && suggestions.length > 0) {
			handleSelect(suggestions[0].name);
		} else if (e.key === "Escape") {
			setOpen(false);
		}
	};

	// Close on outside click
	useEffect(() => {
		const handler = (e: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handler);
		return () => document.removeEventListener("mousedown", handler);
	}, []);

	return (
		<Box ref={containerRef} sx={{ width: "100%", maxWidth: 360 }}>
			<Autocomplete
				freeSolo
				onKeyDown={(event) => handleKeyDown(event as React.KeyboardEvent<HTMLInputElement>)}
				open={open && trimmed.length > 0}
				onOpen={() => trimmed && setOpen(true)}
				onClose={() => setOpen(false)}
				options={suggestions}
				getOptionLabel={(option) =>
					typeof option === "string" ? option : option.name
				}
				filterOptions={(options) => options}
				inputValue={query}
				onInputChange={(_, value, reason) => {
					setQuery(value);
					if (reason !== "reset") {
						setOpen(true);
					}
				}}
				onChange={(_, value) => {
					if (!value) {
						return;
					}

					const selectedName = typeof value === "string" ? value : value.name;
					handleSelect(selectedName);
				}}
				renderOption={(props, option) => {
					const lower = option.name.toLowerCase();
					const queryLower = trimmed.toLowerCase();
					const idx = lower.indexOf(queryLower);

					return (
						<Box component="li" {...props} key={option.name}>
							<Typography variant="body2">
								{idx >= 0 ? (
									<>
										{option.name.slice(0, idx)}
										<Box component="span" sx={{ color: "primary.light", fontWeight: 700 }}>
											{option.name.slice(idx, idx + trimmed.length)}
										</Box>
										{option.name.slice(idx + trimmed.length)}
									</>
								) : (
									option.name
								)}
							</Typography>
						</Box>
					);
				}}
				noOptionsText="No results"
				sx={{ width: 1 }}
				renderInput={(params) => (
					<TextField
						{...params}
						placeholder="Search plants..."
						onFocus={() => trimmed && setOpen(true)}
						slotProps={{
							...params.slotProps,
							input: {
								...(params.slotProps?.input ?? {}),
								startAdornment: <SearchRoundedIcon sx={{ color: "primary.main", mr: 1 }} />,
							},
							htmlInput: {
								...(params.slotProps?.htmlInput ?? {}),
							},
						}}
						sx={{
							"& .MuiOutlinedInput-root": {
								borderRadius: 999,
								backgroundColor: "rgba(255,255,255,0.04)",
							},
						}}
					/>
				)}
			/>
		</Box>
	);
};
