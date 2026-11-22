import { redirect } from "next/navigation";
import React from "react";

const page = () => {
	redirect("/configure/profile");
};

export default page;
