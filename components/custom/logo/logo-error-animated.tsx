import React from "react";
import { cn } from "@/lib/utils";

type _strokeClasses =
	| "stroke-primary"
	| "stroke-secondary"
	| "stroke-background"
	| "stroke-foreground"
	| "stroke-destructive"
	| "stroke-accent";

type _fillClasses =
	| "fill-primary"
	| "fill-secondary"
	| "fill-background"
	| "fill-foreground"
	| "fill-destructive"
	| "fill-accent";

type _waveClasses =
	| "text-primary"
	| "text-secondary"
	| "text-background"
	| "text-foreground"
	| "text-destructive"
	| "text-accent";

type LogoErrorAnimatedProps = React.SVGProps<SVGSVGElement> & {
	waves?: number;
	duration?: number;
	maxRadius?: number;
	startRadius?: number;
	centerX?: number;
	centerY?: number;
	waveColor?: string;
	waveColorClass?: _waveClasses;
	errorFill?: _fillClasses;
	errorStroke?: _strokeClasses;
	stagger?: number;
	size?: number | string;
	tipo?: number;
};

const BOOK_FRAME_PATH =
	"M 18.484 131.908 L 18.488 131.908 C 18.488 132.005 18.491 132.1 18.498 132.197 C 18.656 134.224 20.431 135.739 22.457 135.579 C 34.655 134.62 46.375 135.721 57.619 138.881 C 68.863 142.041 79.663 147.267 90.019 154.561 C 91.294 155.496 93.022 155.513 94.313 154.603 C 104.69 147.29 115.513 142.049 126.777 138.881 C 137.977 135.733 149.651 134.629 161.796 135.57 C 161.938 135.586 162.08 135.594 162.226 135.594 C 164.262 135.594 165.914 133.943 165.911 131.908 L 165.911 45.474 C 169.275 45.487 172.238 45.507 173.195 45.537 C 174.41 45.576 175.662 45.633 176.96 45.709 L 176.96 148.814 C 162.494 148.113 148.013 149.772 134.08 153.724 C 119.834 157.716 106.087 163.957 92.737 172 C 78.931 163.699 64.459 157.316 49.444 153.343 C 35.76 149.672 21.593 148.145 7.439 148.817 L 7.439 45.709 C 8.734 45.633 9.989 45.576 11.197 45.537 C 12.124 45.507 15.081 45.484 18.484 45.474 L 18.484 131.908 Z";

const LEFT_PAGE_PATH =
	"M 88.321 142.13 L 88.385 53.804 C 88.385 53.804 69.416 39.522 58.438 35.456 C 48.061 31.612 25.662 30.175 25.662 30.175 L 25.662 125.396 C 25.988 125.38 44.221 124.409 58.315 128.168 C 75.02 132.623 88.015 141.941 88.319 142.134 L 88.32 142.133 L 88.321 142.13 Z";

const RIGHT_PAGE_PATH =
	"M 95.775 142.243 L 95.439 53.836 C 95.439 53.836 112.362 38.855 122.702 34.936 C 134.273 30.55 159.566 30.551 159.566 30.551 L 158.558 125.302 C 158.558 125.302 137.693 126.403 127.657 129.035 C 116.53 131.953 95.775 142.243 95.775 142.243 Z";

export const LogoErrorAnimated = ({
	waves = 6,
	duration = 10,
	maxRadius = 190,
	startRadius = 0,
	centerX = 92,
	centerY = 90,
	waveColor = "#D4AF37",
	waveColorClass,
	errorFill = "fill-primary",
	errorStroke = "stroke-background",
	stagger,
	size = 500,
	style,
	tipo = 404,
	...props
}: LogoErrorAnimatedProps) => {
	const { className, ...restProps } = props;
	const safeWaves = Math.max(1, waves);
	const safeDuration = Math.max(0.1, duration);
	const safeStagger = stagger ?? safeDuration / safeWaves;

	const gradientId = React.useId();
	const clipPathId = React.useId();

	const waveColorProcessed = waveColorClass ? "currentColor" : waveColor;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="7.439 22.452 169.521 149.548"
			width={size}
			height={size}
			style={style}
			className={cn(waveColorClass, className)}
			{...restProps}
		>
			<defs>
				<radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
					<stop offset="0%" stopColor={waveColorProcessed} stopOpacity="1" />
					<stop offset="80%" stopColor={waveColorProcessed} stopOpacity="0.2" />
					<stop offset="100%" stopColor={waveColorProcessed} stopOpacity="0" />
				</radialGradient>

				<clipPath id={clipPathId}>
					<path d={LEFT_PAGE_PATH} />
					<path d={RIGHT_PAGE_PATH} />
				</clipPath>
			</defs>

			<path
				fillRule="evenodd"
				d={BOOK_FRAME_PATH}
				style={{
					stroke: "rgb(0,0,0)",
					strokeWidth: 0,
					fill: "rgb(46,58,89)",
				}}
			/>

			<g clipPath={`url(#${clipPathId})`} fill={`url(#${gradientId})`}>
				{Array.from({ length: safeWaves }).map((_, index) => {
					const begin = `${index * safeStagger}s`;

					return (
						<circle key={index} cx={centerX} cy={centerY} r="0" opacity="0">
							<animate
								attributeName="r"
								values={`${startRadius};${maxRadius}`}
								dur={`${safeDuration}s`}
								begin={begin}
								repeatCount="indefinite"
							/>
							<animate
								attributeName="opacity"
								values="1;0"
								dur={`${safeDuration}s`}
								begin={begin}
								repeatCount="indefinite"
							/>
						</circle>
					);
				})}
			</g>
			<text
				style={{
					fontFamily: "var(--font-cherry-bomb-one)",
					fontSize: "4rem",
				}}
				x="32.2"
				y="67"
				strokeWidth="6"
				stroke="rgb(255, 255, 255)"
				fill="none"
				transform="translate(0, 40)"
			>
				{tipo}
			</text>
			<text
				className={cn(errorFill)}
				style={{
					fontFamily: "var(--font-cherry-bomb-one)",
					fontSize: "4rem",
				}}
				x="32.5"
				y="67"
				transform="translate(0, 40)"
			>
				{tipo}
			</text>
		</svg>
	);
};

export default LogoErrorAnimated;
