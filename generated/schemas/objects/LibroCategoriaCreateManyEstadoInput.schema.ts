import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			libroId: z.number().int(),
			categoriaId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict();
export const LibroCategoriaCreateManyEstadoInputObjectSchema: z.ZodType<Prisma.LibroCategoriaCreateManyEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCreateManyEstadoInput>;
export const LibroCategoriaCreateManyEstadoInputObjectZodSchema = makeSchema();
