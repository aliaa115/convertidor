// components/theme-provider.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Providers({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
	return (
		<NextThemesProvider {...props}>
			<TooltipProvider>
				<Toaster
					toastOptions={{
						className: "mt-10",
						classNames: {
							toast: "bg-primary text-primary-foreground",
							success: "!bg-green-300 dark:!bg-green-200",
							error: "!bg-red-300 dark:!bg-red-200 ",
							warning: "!bg-orange-300 dark:!bg-orange-200",
						},
					}}
				/>
				{children}
			</TooltipProvider>
		</NextThemesProvider>
	);
}
