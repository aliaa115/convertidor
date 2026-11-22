import { ArrowLeftIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import Logo404Animated from "@/components/custom/logo/logo-error-animated";
import type { EstadoErrorLibro } from "@/lib/validar-libro";

type BookErrorProps = {
	estado: EstadoErrorLibro;
};

export default function BookError({ estado }: BookErrorProps) {
	const noEncontrado = estado === "no-encontrado";
	const inactivo = estado === "inactivo";

	const errorMessage = noEncontrado ? "Libro no encontrado" : inactivo ? "Libro inactivo" : "Libro no publicado";

	const errorType = noEncontrado ? "¡UPS!" : inactivo ? "¡UPS!" : "¡OH NO!";

	const errorColor: "fill-destructive" | "fill-warning" = noEncontrado ? "fill-destructive" : "fill-warning";

	const errorWaveColor: ("text-destructive" | "text-warning")[] = noEncontrado ? ["text-destructive", "text-warning"] : ["text-warning", "text-destructive"];

	const alertMessage = noEncontrado
		? "Parece que este libro se perdió entre las páginas."
		: inactivo
			? "Este libro no está disponible actualmente."
			: "Este libro todavía no está disponible. ¡Vuelve pronto!";

	return (
		<div className="relative flex min-h-[80vh] h-[80vh] items-center justify-center flex-col w-full">
			<div className="absolute inset-0 z-0 opacity-50 pointer-events-none flex items-center justify-center">
				<Logo404Animated
					size="100%"
					waveColors={errorWaveColor}
					errorFill={errorColor}
					errorTextFill={errorColor}
					tipo={errorType}
					tipoFontSize="3rem"
					texto={errorMessage}
				/>
			</div>

			<div className="text-center z-10 bg-background/85 p-10 rounded-2xl">
				<h1 className="text-2xl font-bold">
					{errorType} - {errorMessage}
				</h1>

				<p>{alertMessage}</p>
				<p>Vuelve al inicio para seguir leyendo.</p>

				<Link
					href="/"
					className="flex flex-nowrap group z-10 mt-5 p-5 rounded-4xl hover:bg-primary/10 w-fit mx-auto">
					<ArrowLeftIcon className="group-hover:size-8 transition-all" />
					<HomeIcon className="group-hover:size-8 transition-all" />
				</Link>
			</div>
		</div>
	);
}
