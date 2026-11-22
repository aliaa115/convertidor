import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./UsuarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => UsuarioWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountUsuariosArgsObjectSchema = makeSchema();
export const EstadoCountOutputTypeCountUsuariosArgsObjectZodSchema =
	makeSchema();
