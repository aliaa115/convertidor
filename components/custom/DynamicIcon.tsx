import type { LucideIcon, LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";

type Props = {
	name: string;
	className?: string;
	size?: number;
};

const icons = LucideIcons as unknown as Record<string, LucideIcon>;

export function DynamicIcon({ name, className, size = 24 }: Props) {
	const Icon = icons[name];

	if (!Icon) {
		return null;
	}

	return (
		<Icon
			className={className}
			size={size}
		/>
	);
}
