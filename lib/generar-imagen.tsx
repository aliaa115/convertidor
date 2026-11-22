import { ImageResponse } from "next/og";

// type Variant = "default" | "dark" | "light";
// type Size = "sm" | "md" | "lg";

// const variantStyles = {
// 	default: {
// 		backgroundColor: "#111827",
// 		textColor: "#ffffff",
// 	},
// 	dark: {
// 		backgroundColor: "#020617",
// 		textColor: "#f8fafc",
// 	},
// 	light: {
// 		backgroundColor: "#f8fafc",
// 		textColor: "#020617",
// 	},
// };

// const sizeStyles = {
// 	sm: { fontSize: 32, padding: 20 },
// 	md: { fontSize: 48, padding: 40 },
// 	lg: { fontSize: 64, padding: 60 },
// };

export type GenerateTextImageOptions = {
	text: string;
	width?: number;
	height?: number;
	backgroundColor?: string;
	textColor?: string;
	fontSize?: number;
	padding?: number | string;
};

export function generarImagen({
	text,
	width = 1200,
	height = 630,
	backgroundColor = "#111827",
	textColor = "#ffffff",
	fontSize = 64,
	padding = 50,
}: GenerateTextImageOptions) {
	console.log({ padding });

	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor,
				color: textColor,
				padding: !isNaN(Number(padding)) ? `${padding}px` : padding,
				textAlign: "center",
				fontSize: `${fontSize}px`,
				fontWeight: 700,
				lineHeight: 1.2,
				whiteSpace: "pre-wrap",
				wordBreak: "break-word",
			}}
		>
			{text}
		</div>,
		{
			width,
			height,
		},
	);
}
