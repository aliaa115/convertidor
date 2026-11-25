import { ArrowLeftIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import LogoTextAnimated from "@/components/custom/logo/logo-text-animated";
import AuthNavBar from "@/components/custom/navigation/navbar/auth-navbar";

const notFound = () => {
	return (
		<main className="relative flex min-h-screen items-center justify-center flex-col">
			<div className="absolute top-0 w-full">
				<AuthNavBar />
			</div>
			<div className="absolute inset-0 z-0 opacity-50 pointer-events-none flex items-center justify-center">
				<LogoTextAnimated
					tipo={401}
					size="100%"
					style={{ width: "100vw", height: "100vh" }}
					waveColorClass="text-accent"
					errorFill="fill-accent"
					className="p-10"
				/>
			</div>
			<div className="text-center z-10 bg-background/90 p-10 rounded-2xl">
				<h1 className="text-2xl font-bold">401 - No autorizado</h1>
				<p>No tienes permiso para acceder a esta sección.</p>
				<p>Vuelve al inicio para seguir leyendo.</p>
				<Link
					href="/"
					className="flex flex-nowrap group z-10 mt-5 p-5 rounded-4xl hover:bg-accent/10 w-fit mx-auto">
					<ArrowLeftIcon className="group-hover:size-8 transition-all" />
					<HomeIcon className="group-hover:size-8 transition-all" />
				</Link>
			</div>
		</main>
	);
};

export default notFound;
