import Link from "next/link";
import React from "react";

const NotAuthNavbarOptions = () => {
	return (
		<div className="mx-2 flex space-x-10 text-primary-foreground">
			<Link
				href="/login"
				className="text-nowrap">
				Iniciar Sesion
			</Link>
			<Link
				href="/register"
				className="text-nowrap">
				Crear cuenta
			</Link>
		</div>
	);
};

export default NotAuthNavbarOptions;
