import * as z from "zod";
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from "./CategoriaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CategoriaWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountCategoriasArgsObjectSchema = makeSchema();
export const EstadoCountOutputTypeCountCategoriasArgsObjectZodSchema = makeSchema();
