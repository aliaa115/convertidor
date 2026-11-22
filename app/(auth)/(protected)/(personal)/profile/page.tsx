import { notFound } from "next/navigation";
import { getCurrentUser, getWriter } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import WriterProfileWiew from "@/modules/writers/views/writer-profile-view";

// type Props = {
// 	params: {
// 		identifier: string;
// 	};
// };

export default async function Page() {
	const writer = await getWriter();

	if (!writer) return notFound();

	return <WriterProfileWiew writer={writer} personal />;
}
