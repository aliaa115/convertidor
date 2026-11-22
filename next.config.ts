import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		authInterrupts: true,
	},
	images: {
		localPatterns: [
			{
				pathname: "/api/book-cover/**",
			},
		],
	},
};

export default nextConfig;
