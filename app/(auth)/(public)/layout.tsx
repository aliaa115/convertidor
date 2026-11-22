import { redirect } from "next/navigation";
import AuthNavBar from "@/components/custom/navigation/navbar/auth-navbar";
import { getCurrentUser } from "@/lib/auth";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
	const user = await getCurrentUser();

	if (!!user) redirect("/");

	return (
		<div className="w-screen h-screen relative">
			<div className="sticky top-0 w-full">
				<AuthNavBar />
			</div>
			<div className="mt-15 flex justify-center items-center ">
				<div className=" shadow-2xl flex justify-center items-center md:w-3/5 md:bg-[linear-gradient(to_right,var(--background)_0%,var(--background)_50%,var(--background-paper)_50%,var(--background-paper)_100%)]">
					{children}
				</div>
			</div>
		</div>
	);
}
