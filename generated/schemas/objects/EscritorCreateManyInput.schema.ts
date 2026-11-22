import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombres: z.string().optional().nullable(),
			apellidos: z.string().optional().nullable(),
			alias: z.string().optional().nullable(),
			descripcion: z.string().max(255).optional().nullable(),
			fechaNacimiento: z.coerce.date().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			usuarioId: z.number().int().optional().nullable(),
			avatarId: z.number().int().optional(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const EscritorCreateManyInputObjectSchema: z.ZodType<Prisma.EscritorCreateManyInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateManyInput>;
export const EscritorCreateManyInputObjectZodSchema = makeSchema();
