import { BookPlus, Lightbulb } from "lucide-react";
import Link from "next/link";
import { ChangeTheme, FontSelector, Logo } from "@/components/custom";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { CurrentUser } from "@/lib/types";
import AuthNavbarOptions from "./authenticated-navbar-options";
import NotAuthNavbarOptions from "./not-auth-navbar-options";

type NavBarProps = {
	user: CurrentUser | null;
};

export const CreateBook_NavBar = ({ user }: NavBarProps) => {
	return (
		<header className="flex items-center justify-between gap-4 transition-all w-full bg-primary px-10 py-1">
			<Link
				href="/"
				className="flex min-w-0 flex-1 justify-center sm:justify-start md:max-w-3/12 sm:max-w-2/3 max-w-1/3"
			>
				<Logo className="max-w-50 text-white" />
			</Link>

			<div className="flex justify-end md:max-w-full sm:max-w-1/3 max-w-2/3 text-ellipsis items-center space-x-2">
				{/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
				{!user && <NotAuthNavbarOptions />}
				<div className="w-50">
					<FontSelector className="bg-transparent text-primary-foreground" />
				</div>
				<Link href="/sandbox">{user && user.nivel === 1 && <Lightbulb />}</Link>
				<ChangeTheme />
				{user && (
					<Tooltip>
						<TooltipTrigger asChild>
							<Link href="/book/create">
								<BookPlus />
							</Link>
						</TooltipTrigger>
						<TooltipContent>Crea un nuevo Libro</TooltipContent>
					</Tooltip>
				)}

				{user && <AuthNavbarOptions user={user} />}
			</div>
		</header>
	);
};

export default CreateBook_NavBar;
