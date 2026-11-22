import { getCurrentUser } from "@/lib/auth";
import ChangePaswordForm from "@/modules/auth/components/change-password-form";

export const revalidate = 0;

const page = async () => {
	const user = await getCurrentUser();

	return <ChangePaswordForm user={user} />;
};

export default page;
