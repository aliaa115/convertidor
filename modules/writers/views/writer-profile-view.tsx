"use client";

import { Edit, Edit2, HeartPlus, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CurrentUser, WritterUser } from "@/lib/types";
import { followWriterAction, unfollowWriterAction } from "../actions/follow.action";

type WriterProfileViewProps = {
	writer: WritterUser;
	personal?: boolean;
	user?: CurrentUser | null;
};

const WriterProfileView = ({ writer, personal = false, user: currentUser }: WriterProfileViewProps) => {
	const router = useRouter();
	const currentWriter = currentUser?.escritor;
	const isPersonal = personal || currentWriter?.id === writer?.id;
	const user = writer.usuario;
	const initials = writer?.alias?.slice(0, 2).toUpperCase() ?? user?.userName.slice(0, 2).toUpperCase() ?? "";
	const listas = writer?.usuario?.listas ?? [];
	const libros = writer?.libros ?? [];

	const siguiendo = writer?.siguiendo ?? [];
	const seguidores = writer?.seguidores ?? [];

	const writerSigueUsuario = siguiendo.find((seg) => seg.escritorSeguidoId === currentWriter?.id);
	const usuarioSiguiendoWriter = seguidores.find((seg) => seg.escritorId === currentWriter?.id);

	const generarBoton = (icono: React.ReactNode, texto: string, onClick?: React.MouseEventHandler<HTMLButtonElement>) => (
		<div className="mt-2">
			<Button
				variant="ghost"
				className="p-2 rounded-2xl flex flex-nowrap gap-2 hover:cursor-pointer hover:bg-primary! hover:text-primary-foreground! "
				onClick={onClick}>
				{icono}
				<span className="">{texto}</span>
			</Button>
		</div>
	);

	const redireccionar = (path: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		router.push(path);
	};

	const seguir =
		(seguir: boolean = true) =>
		async (event: React.MouseEvent<HTMLButtonElement>) => {
			event.preventDefault();
			if (!currentWriter) return;

			const body = { writerId: writer.id, writerUserId: writer.usuario?.id };

			const result = seguir ? await followWriterAction(body) : await unfollowWriterAction(body);

			if (!result.success) {
				if (result.fieldErrors) {
					Object.entries(result.fieldErrors).forEach(([field, messages]) => {
						if (!messages?.length) return;

						toast.error(messages[0], {
							position: "top-right",
						});
					});
				}

				return;
			}
			toast.success(result.message, {
				position: "top-right",
			});
			router.refresh();
		};

	const renderMiniCardInfo = (titulo: string, texto: string) => (
		<div className="text-xs text-foreground/50">
			{titulo}: {texto}
		</div>
	);
	return (
		<div className="shadow-xl grid grid-cols-5 gap-5 w-full justify-center 2xl:max-w-8xl lg:max-w-5xl md:max-w-4xl mb-10 p-10 bg-background/50 rounded-2xl">
			<div className="flex col-span-full gap-10 w-full bg-accent/10 p-5 rounded-2xl shadow-md overflow-hidden">
				<div className="">
					<Avatar className=" size-20 mx-auto">
						<AvatarImage
							className=""
							src={writer.avatar?.url ?? ""}
							alt={writer.usuario?.userName}
						/>
						<AvatarFallback>{initials}</AvatarFallback>
					</Avatar>
					{isPersonal
						? generarBoton(<Edit2 className="size-5" />, "Editar", redireccionar("/configure/profile"))
						: usuarioSiguiendoWriter
							? generarBoton(<Minus className="size-5" />, "Siguiendo", seguir(false))
							: generarBoton(<Plus className="size-5" />, "Seguir", seguir())}
				</div>
				<div className="grow justify-center flex flex-col">
					<h2 className="text-4xl font-bold">{writer?.alias || user?.userName}</h2>
					<h1 className="text-2xl">@{user?.userName}</h1>
				</div>
				<div className="hidden md:flex max-w-200 text-justify flex-col justify-end text-foreground/80">
					<div className="text-right text-xs text-foreground/50">Se unió en {writer?.createdAt?.toLocaleDateString()}</div>
					{isPersonal ? "Acerca de ti:" : "Acerca del escritor:"}
					<div className="text-xs text-foreground/50">{writer?.descripcion ?? (isPersonal ? "No tienes descripción" : "Sin descripción")}</div>
				</div>
			</div>
			<div className="col-span-full grid md:grid-cols-3 grid-cols-2 w-full bg-accent/5 p-5 rounded overflow-hidden items-center">
				<div className="col-span-1 justify-center flex flex-col">
					{renderMiniCardInfo("Listas de lectura", `${listas.length}`)}
					{renderMiniCardInfo("Libros", `${libros.length}`)}
					{isPersonal && renderMiniCardInfo("Publicados", `${libros.filter((i) => i.publicado).length}`)}
				</div>
				<div className="col-span-1 justify-center flex flex-col">
					{renderMiniCardInfo("Siguiendo", `${siguiendo.length}`)}
					{renderMiniCardInfo("Seguidores", `${seguidores.length}`)}
				</div>
				{(writerSigueUsuario || usuarioSiguiendoWriter) && (
					<div className="col-span-1 justify-center flex flex-col">
						{writerSigueUsuario && renderMiniCardInfo("Te sigue desde", `${writerSigueUsuario?.createdAt?.toLocaleDateString()}`)}
						{usuarioSiguiendoWriter && renderMiniCardInfo("Lo sigues desde", `${usuarioSiguiendoWriter?.createdAt?.toLocaleDateString()}`)}
					</div>
				)}
			</div>
			<div className="grid grid-cols-3 col-span-full gap-5 w-full bg-accent/10 p-5 rounded-2xl shadow-md overflow-hidden">
				<div className="flex flex-col col-span-full md:col-span-1 gap-2 w-full overflow-hidden ">
					<p className="text-3xl p-1 w-full bg-accent/10">{isPersonal ? "Tus listas de Lectura" : "Listas de lectura"}</p>
					<div className="flex flex-col gap-2">
						{listas
							.filter((lista) => (isPersonal ? true : !lista.privada))
							.map((lista) => {
								return (
									<Link
										key={lista.id}
										href={`/writers/${writer?.usuario?.userName}/listas/${lista.id}`}
										className="hover:bg-primary hover:text-primary-foreground p-2 rounded-2xl flex flex-nowrap">
										<Edit className="" />
										<span className="">{lista.nombre}</span>
									</Link>
								);
							})}
					</div>
					<div className="overflow-hidden border-r-2 border-accent"></div>
				</div>
				<div className="flex flex-col col-span-full md:col-span-2 gap-2 w-full overflow-hidden">
					<p className="text-3xl p-1 w-full bg-accent/10">{isPersonal ? "Tus Libros" : "Libros del escritor"}</p>
					<div className="flex my-2 gap-2 px-5">
						{libros
							.filter((libro) => (isPersonal ? true : libro.publicado))
							.map((libro) => {
								return (
									<Link
										key={libro.id}
										href={isPersonal ? `/book/edit/${libro.id}` : `/book/${libro.id}`}
										className="w-1/2 hover:bg-primary/20 p-2 rounded-2xl flex flex-nowrap items-center space-x-5">
										<Image
											alt={libro.titulo}
											width={80}
											height={120}
											src={`/api/book-cover/${libro.id}?size=100&padding=50px`}
											className="rounded-md object-cover shrink-0"
										/>
										<div className="flex flex-col h-full">
											<span className="w-full text-3xl">{libro.titulo}</span>
											<span className="h-full text-justify text-sm pr-6">
												{(libro.resumen ?? "").slice(0, 100)}
												{(libro.resumen?.length ?? 0) > 100 && "..."}
											</span>
											<span className="space-x-3 px-2 flex text-sm justify-end bg-gray-500/10 rounded-md">
												<span className="text-sm text-right">{libro.fechaPublicacion?.toLocaleDateString()}</span>
												<span className="grow" />
												{!libro.publicado && <span className="text-sm text-right">{!libro.publicado && "Borrador"}</span>}
											</span>
										</div>
									</Link>
								);
							})}
					</div>
				</div>
			</div>
			{/* <pre>{JSON.stringify(writer, null, 2)}</pre> */}
		</div>
	);
};

export default WriterProfileView;
