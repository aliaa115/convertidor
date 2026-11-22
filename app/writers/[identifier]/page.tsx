import { notFound } from "next/navigation";
import { getCurrentUser, getWriter } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import WriterProfileWiew from "@/modules/writers/views/writer-profile-view";

type Props = {
	params: Promise<{ identifier: string }>;
};

export default async function Page({ params }: Props) {
	const { identifier } = await params;
	const user = await getCurrentUser();

	const writer = await getWriter(identifier, Number(identifier) === user?.id ? undefined : true);

	if (!writer) return notFound();
	if (writer.estadoId !== 1) return notFound();

	return (
		<WriterProfileWiew
			writer={writer}
			user={user}
		/>
	);
}
