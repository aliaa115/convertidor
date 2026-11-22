"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Path, useForm } from "react-hook-form";
import { toast } from "sonner";
import GenerateField from "@/components/custom/forms/generate-field";
import { Button } from "@/components/ui/button";
import { registerAction } from "../actions/register.action";
import { RegisterInput, usuarioFormSchema } from "../schema/register.schema";

export default function RegisterForm() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<RegisterInput>({
		resolver: zodResolver(usuarioFormSchema),
		defaultValues: {
			email: "",
			userName: "",
			password: "",
			confirmPassword: "",
			nombres: "",
			apellidos: "",
			fechaNacimiento: undefined,
		},
	});

	async function onSubmit(data: RegisterInput) {
		const result = await registerAction(data);

		if (!result.success) {
			if (result.fieldErrors) {
				Object.entries(result.fieldErrors).forEach(([field, messages]) => {
					if (!messages?.length) return;

					setError(field as Path<RegisterInput>, {
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

		if (result.success) {
			toast.success("Usuario creado correctamente", {
				position: "top-right",
			});
			router.refresh();
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-x-35  w-full justify-center items-center mx-auto p-5">
			<GenerateField
				id="email"
				label="Correo"
				type="email"
				register={register}
				errors={errors}
			/>

			<GenerateField
				id="userName"
				label="Usuario"
				register={register}
				errors={errors}
			/>

			<div className="md:flex w-full md:space-x-5">
				<GenerateField
					id="password"
					label="Contraseña"
					type="password"
					register={register}
					errors={errors}
				/>

				<GenerateField
					id="confirmPassword"
					label="Confirmar contraseña"
					type="password"
					register={register}
					errors={errors}
				/>
			</div>

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

			<GenerateField
				id="fechaNacimiento"
				label="Fecha de Nacimiento"
				type="date"
				register={register}
				errors={errors}
			/>

			<Button
				color="primary"
				type="submit"
				className=" my-5">
				Registrarse
			</Button>
			<p className="text-center text-sm text-muted-foreground my-2">
				Ya tienes cuenta?{" "}
				<Link
					href="/login"
					className="font-semibold underline">
					Iniciar sesion
				</Link>
			</p>
		</form>
	);
}
