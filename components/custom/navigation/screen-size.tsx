import { cn } from "@/lib/utils";

export const ScreenSize = ({ color = "bg-red-500" }: { color?: string }) => {
	return (
		<div className={cn("fixed bottom-0 right-0 p-2 text-white font-bold", color)}>
			<span className="sm:hidden">XS</span>
			<span className="hidden sm:inline md:hidden">SM</span>
			<span className="hidden md:inline lg:hidden">MD</span>
			<span className="hidden lg:inline xl:hidden">LG</span>
			<span className="hidden xl:inline 2xl:hidden">XL</span>
			<span className="hidden 2xl:inline">2XL</span>
		</div>
	);
};

export default ScreenSize;
