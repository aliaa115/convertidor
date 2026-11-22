import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCategoriaWhereInputObjectSchema as LibroCategoriaWhereInputObjectSchema } from "./LibroCategoriaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroCategoriaWhereInputObjectSchema).optional(),
		})
		.strict();
export const LibroCountOutputTypeCountCategoriasArgsObjectSchema = makeSchema();
export const LibroCountOutputTypeCountCategoriasArgsObjectZodSchema =
	makeSchema();
