import { unauthorized } from "next/navigation";
import NavBar from "@/components/custom/navigation/navbar/navbar";
import RefreshOnPageShow from "@/components/custom/navigation/refresh-on-page-show";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

type AuthTemplateProps = {
	children: React.ReactNode;
};
export default async function Template({ children }: AuthTemplateProps) {
	const user = await getCurrentUser();
	if (!user) unauthorized();

	return (
		<main className="w-screen max-h-screen overflow-auto">
			<div className="z-50 sticky top-0 w-full">
				<NavBar user={user} />
			</div>
			<div className="flex justify-center items-center max-h-full mt-5">{children}</div>
		</main>
	);
}
