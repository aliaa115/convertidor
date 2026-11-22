"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Path, useForm } from "react-hook-form";
import { toast } from "sonner";
import GenerateField from "@/components/custom/forms/generate-field";
import { Button } from "@/components/ui/button";
import { loginAction } from "../actions/login.action";
import { LoginInput, loginFormSchema } from "../schema/login.schema";

export default function LoginForm() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<LoginInput>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			identifier: "",
			password: "",
		},
	});

	async function onSubmit(data: LoginInput) {
		const result = await loginAction(data);

		if (!result.success) {
			if (result.fieldErrors) {
				Object.entries(result.fieldErrors).forEach(([field, messages]) => {
					if (!messages?.length) return;

					setError(field as Path<LoginInput>, {
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

		router.replace("/");
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-x-35 w-full justify-center items-center mx-auto p-5">
			<GenerateField
				id="identifier"
				label="Correo o usuario"
				register={register}
				errors={errors}
			/>

			<GenerateField
				id="password"
				label="Contraseña"
				type="password"
				register={register}
				errors={errors}
			/>

			<Button
				color="primary"
				type="submit"
				className="my-5">
				Iniciar sesión
			</Button>
			<p className="text-center text-sm text-muted-foreground my-2">
				No tienes cuenta?{" "}
				<Link
					href="/register"
					className="font-semibold underline">
					Registrarse
				</Link>
			</p>
		</form>
	);
}
