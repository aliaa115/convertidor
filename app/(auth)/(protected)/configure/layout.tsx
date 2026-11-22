import React from "react";
import ConfigureNav from "@/components/custom/navigation/configure-nav";

export default function ConfigureLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="lg:w-7xl md:w-4xl sm:px-10 max-h-3/5 grid grid-cols-7 gap-3 shadow-[0px_4px_6px_0px] shadow-background-paper border-2 border-background-paper rounded-2xl p-5">
			<div className="col-span-2 border-r-2 pr-5">
				<ConfigureNav />
			</div>

			<div className="col-span-5 pl-5">{children}</div>
		</div>
	);
}
