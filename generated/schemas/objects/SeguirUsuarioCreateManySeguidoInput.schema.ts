import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritorId: z.number().int(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const SeguirUsuarioCreateManySeguidoInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioCreateManySeguidoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioCreateManySeguidoInput>;
export const SeguirUsuarioCreateManySeguidoInputObjectZodSchema = makeSchema();
