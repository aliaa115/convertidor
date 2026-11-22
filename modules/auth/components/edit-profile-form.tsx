"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { InfoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Path, useForm } from "react-hook-form";
import { toast } from "sonner";
import GenerateField from "@/components/custom/forms/generate-field";
import DebugPageShow from "@/components/custom/navigation/navbar/test";
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CurrentUser } from "@/lib/types";
import { cn } from "@/lib/utils";
import { AvatarModel } from "@/types/prisma";
import { saveProfileAction } from "../actions/profile.actions";
import { ProfileInput, profileFormSchema } from "../schema/profile.schema";

export default function ProfileForm({ user, avatars }: { user: CurrentUser | null; avatars: AvatarModel[] }) {
	const router = useRouter();
	const initials = user?.escritor?.alias?.slice(0, 2).toUpperCase() ?? user?.userName.slice(0, 2).toUpperCase() ?? "";

	const {
		register,
		handleSubmit,
		setError,
		setValue,
		watch,
		formState: { errors },
	} = useForm<ProfileInput>({
		resolver: zodResolver(profileFormSchema),
		defaultValues: {
			email: user?.email ?? "",
			userName: user?.userName ?? "",
			nombres: user?.escritor?.nombres ?? "",
			apellidos: user?.escritor?.apellidos ?? "",
			fechaNacimiento: user?.escritor?.fechaNacimiento ? new Date(user?.escritor.fechaNacimiento).toISOString().split("T")[0] : "",
			avatarId: user?.escritor?.avatar?.id ?? null,
		},
	});

	if (!user) return null;

	const selectedAvatarId = watch("avatarId");

	const selectedAvatar = avatars.find((avatar) => avatar.id === selectedAvatarId) ?? user.escritor?.avatar ?? null;

	async function onSubmit(data: ProfileInput) {
		const result = await saveProfileAction(data);

		if (!result.success) {
			if (result.fieldErrors) {
				Object.entries(result.fieldErrors).forEach(([field, messages]) => {
					if (!messages?.length) return;

					setError(field as Path<ProfileInput>, {
						type: "server",
						message: messages[0],
					});

					toast.error(messages[0], {
						position: "top-right",
					});
				});
			}

			return;
		}
		toast.success("Perfil actualizado correctamente", {
			position: "top-right",
		});
		router.refresh();
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="sm:px-10 bg-background-paper/30 rounded-2xl w-full grid sm:grid-cols-5 p-10 overflow-auto">
			<DebugPageShow />

			<div className="flex flex-col">
				<Avatar className="size-32 mx-auto">
					<AvatarImage
						src={selectedAvatar?.url ?? ""}
						alt={user.userName}
					/>
					<AvatarFallback>{initials}</AvatarFallback>
				</Avatar>

				<Dialog>
					<DialogTrigger asChild>
						<Button
							color="primary"
							className="my-5">
							Cambiar
						</Button>
					</DialogTrigger>

					<DialogContent>
						<DialogTitle>Avatares disponibles</DialogTitle>
						<div className="grid grid-cols-3 gap-2">
							{avatars.map((avatar) => {
								const isSelected = avatar.id === selectedAvatarId;

								return (
									<Button
										key={avatar.id}
										type="button"
										variant="ghost"
										size="icon"
										className={cn(
											"rounded-full size-30 p-5 group",
											isSelected && "bg-primary",
											"hover:bg-accent/50",
											"dark:hover:bg-accent/50",
											avatar.id === user?.escritor?.avatar?.id && "border-secondary border-4",
										)}
										onClick={() => {
											setValue("avatarId", avatar.id, {
												shouldDirty: true,
												shouldValidate: true,
											});
										}}>
										<Avatar className={cn("size-20 group-hover:size-25 transition-all duration-300")}>
											<AvatarImage
												src={avatar.url ?? ""}
												alt={avatar.nombre}
											/>
											<AvatarFallback>{initials}</AvatarFallback>
										</Avatar>
									</Button>
								);
							})}
						</div>
					</DialogContent>
				</Dialog>
				{selectedAvatarId !== user?.escritor?.avatarId && (
					<Alert className="bg-warning/20">
						<InfoIcon />
						<AlertTitle>Ojo</AlertTitle>
						<AlertDescription>Se cambio el avatar, debe guardar cambios para ver reflejado el cambio.</AlertDescription>
					</Alert>
				)}
			</div>

			<div className="flex flex-col col-span-4 sm:pl-20">
				<GenerateField
					id="email"
					label="Correo"
					type="email"
					register={register}
					errors={errors}
				/>
				<div className="md:flex w-full md:space-x-5">
					<GenerateField
						id="userName"
						label="Usuario"
						register={register}
						errors={errors}
					/>
					<GenerateField
						id="alias"
						label="Alias"
						register={register}
						errors={errors}
					/>
				</div>

				<div className="md:flex w-full md:space-x-5">
					<GenerateField
						id="nombres"
						label="Nombres"
						register={register}
						errors={errors}
					/>

					<GenerateField
						id="apellidos"
						label="Apellidos"
						register={register}
						errors={errors}
					/>
				</div>
				<div className="md:flex w-full md:space-x-5">
					<GenerateField
						id="fechaNacimiento"
						label="Fecha de Nacimiento"
						type="date"
						register={register}
						errors={errors}
					/>
				</div>
				<div className="md:flex w-full md:space-x-5">
					<GenerateField
						id="descripcion"
						label="Descripción"
						type="textarea"
						placeholder="Escribe una breve descripción de ti."
						register={register}
						errors={errors}
					/>
				</div>

				{/* <pre>
          {JSON.stringify({ ...user, avatarId: selectedAvatarId }, null, 2)}
        </pre> */}
			</div>

			<div className="col-span-5 flex w-full justify-end">
				<div className="flex flex-col">
					<Button
						color="primary"
						type="submit"
						className="mt-5">
						Guardar cambios
					</Button>
				</div>
			</div>
		</form>
	);
}
