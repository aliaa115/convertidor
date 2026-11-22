"use client";
import {
	BadgeCheckIcon,
	BadgeIcon,
	BellIcon,
	Library,
	LogOutIcon,
	User,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CurrentUser } from "@/lib/types";
import { logoutAction } from "@/modules/auth/actions/logout.action";
import Notification from "./notification";

type AuthNavbarOptionsProps = {
	user: CurrentUser;
};

const AuthNavbarOptions = ({ user }: AuthNavbarOptionsProps) => {
	const initials =
		user.escritor?.alias?.slice(0, 2).toUpperCase() ??
		user.userName.slice(0, 2).toUpperCase();

	return (
		<>
			<Notification />
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" size="icon" className="rounded-full">
						<Avatar>
							<AvatarImage
								src={user.escritor?.avatar?.url ?? ""}
								alt={user.userName}
							/>
							<AvatarFallback>{initials}</AvatarFallback>
						</Avatar>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-80">
					<DropdownMenuGroup>
						<DropdownMenuItem className="w-full ">
							<Link
								href="/library"
								type="submit"
								className="flex gap-x-2 w-full p-0"
							>
								<Library />
								Librería
							</Link>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuGroup>
						<DropdownMenuItem className="w-full ">
							<Link
								href="/profile"
								type="submit"
								className="flex gap-x-2 w-full p-0"
							>
								<User />
								Perfil
							</Link>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem className="w-full">
							<Link
								href="/configure"
								type="submit"
								className="flex gap-x-2 w-full p-0"
							>
								<BadgeCheckIcon />
								Configuracion
							</Link>
						</DropdownMenuItem>
						<form action={logoutAction} id="logout">
							<DropdownMenuItem variant="destructive">
								<button
									type="submit"
									className="flex gap-x-2 w-full cursor-pointer"
								>
									<LogOutIcon />
									Sign Out
								</button>
							</DropdownMenuItem>
						</form>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
};

export default AuthNavbarOptions;
