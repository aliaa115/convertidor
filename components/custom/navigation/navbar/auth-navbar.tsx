import Link from "next/link";
import { ChangeTheme, FontSelector, Logo } from "@/components/custom";
import { CurrentUser } from "@/lib/types";

type AuthNavBarProps = {
	//   user: CurrentUser | null;
};

export const AuthNavBar = ({}: AuthNavBarProps) => {
	return (
		<header className="flex items-center justify-between gap-4 transition-all w-full bg-primary px-10 py-1 min-h-15 max-h-15 h-15">
			<Link
				href="/"
				className="flex min-w-0 flex-1 justify-center sm:justify-start md:max-w-3/12 sm:max-w-2/3 max-w-1/3"
			>
				<Logo className="max-w-50 text-white" />
			</Link>

			<div className="flex justify-end md:max-w-full sm:max-w-1/3 max-w-2/3 text-ellipsis items-center space-x-2">
				{/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
				<div className="w-50">
					<FontSelector className="bg-transparent text-primary-foreground" />
				</div>
				<ChangeTheme />
			</div>
		</header>
	);
};

export default AuthNavBar;
