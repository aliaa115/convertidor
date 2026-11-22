"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Path, useForm } from "react-hook-form";
import { toast } from "sonner";
import GenerateField from "@/components/custom/forms/generate-field";
import { Button } from "@/components/ui/button";
import { CurrentUser } from "@/lib/types";
import { savePaswordAction } from "../actions/change-password.action";
import { ChangePaswordInput, changePaswordFormSchema } from "../schema/change-pasword.schema";

type ChangePasswordProps = {
	user: CurrentUser | null;
};

export default function ChangePaswordForm({ user }: ChangePasswordProps) {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<ChangePaswordInput>({
		resolver: zodResolver(changePaswordFormSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	if (!user) return null;

	async function onSubmit(data: ChangePaswordInput) {
		const result = await savePaswordAction(data);

		if (!result.success) {
			if (result.fieldErrors) {
				Object.entries(result.fieldErrors).forEach(([field, messages]) => {
					if (!messages?.length) return;

					setError(field as Path<ChangePaswordInput>, {
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

		toast.success("Contraseña actualizada correctamente", {
			position: "top-right",
		});

		router.refresh();
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="sm:px-10 bg-background-paper/30 rounded-2xl w-full grid sm:grid-cols-2 p-10 overflow-auto">
			<div className="col-span-1">
				<GenerateField
					id="password"
					label="Contraseña"
					type="password"
					register={register}
					errors={errors}
				/>
			</div>

			<div className="col-span-1">
				<GenerateField
					id="confirmPassword"
					label="Confirmar contraseña"
					type="password"
					register={register}
					errors={errors}
				/>
			</div>

			<div className="col-span-full flex w-full justify-end">
				<div className="flex flex-col">
					<Button
						color="primary"
						type="submit"
						className="mt-5">
						Cambiar contraseña
					</Button>
				</div>
			</div>
		</form>
	);
}
