import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			titulo: z.string(),
			resumen: z.string(),
			portada: z.string().optional().nullable(),
			publicado: z.boolean().optional(),
			fechaPublicacion: z.coerce.date().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			tipoId: z.number().int(),
			estadoId: z.number().int().optional(),
			idiomaId: z.number().int().optional(),
		})
		.strict();
export const LibroCreateManyEscritorInputObjectSchema: z.ZodType<Prisma.LibroCreateManyEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateManyEscritorInput>;
export const LibroCreateManyEscritorInputObjectZodSchema = makeSchema();
