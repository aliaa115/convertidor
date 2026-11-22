import { unauthorized } from "next/navigation";
import NavBar from "@/components/custom/navigation/navbar/navbar";
import RefreshOnPageShow from "@/components/custom/navigation/refresh-on-page-show";
import { getCurrentUser } from "@/lib/auth";

type AuthTemplateProps = {
	children: React.ReactNode;
};
export default async function Template({ children }: AuthTemplateProps) {
	return children;
}
