import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from "./CategoriaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CategoriaWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountCategoriasArgsObjectSchema =
	makeSchema();
export const EstadoCountOutputTypeCountCategoriasArgsObjectZodSchema =
	makeSchema();
