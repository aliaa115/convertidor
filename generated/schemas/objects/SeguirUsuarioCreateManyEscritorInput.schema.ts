import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritorSeguidoId: z.number().int(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const SeguirUsuarioCreateManyEscritorInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioCreateManyEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioCreateManyEscritorInput>;
export const SeguirUsuarioCreateManyEscritorInputObjectZodSchema = makeSchema();
