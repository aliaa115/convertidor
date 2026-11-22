import React from "react";
import DebugPageShow from "@/components/custom/navigation/navbar/test";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import ProfileForm from "@/modules/auth/components/edit-profile-form";

export const revalidate = 0;

const page = async () => {
	const user = await getCurrentUser();

	const avatars = await prisma.avatar.findMany({
		select: {
			id: true,
			url: true,
			nombre: true,
		},
	});

	return (
		<ProfileForm
			user={user}
			avatars={avatars}
		/>
	);
};

export default page;
