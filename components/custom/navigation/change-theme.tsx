"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const ChangeTheme = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<Button
				variant="ghost"
				size="icon"
				aria-label="Cambiar tema">
				<span className="h-5 w-5" />
			</Button>
		);
	}

	const icon = theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />;

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					aria-label="Cambiar tema"
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
					{icon}
				</Button>
			</TooltipTrigger>
			<TooltipContent>Cambia de tema</TooltipContent>
		</Tooltip>
	);
};

export default ChangeTheme;
