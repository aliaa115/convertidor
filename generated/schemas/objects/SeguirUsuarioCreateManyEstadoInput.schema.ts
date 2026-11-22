import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritorId: z.number().int(),
			escritorSeguidoId: z.number().int(),
		})
		.strict();
export const SeguirUsuarioCreateManyEstadoInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioCreateManyEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioCreateManyEstadoInput>;
export const SeguirUsuarioCreateManyEstadoInputObjectZodSchema = makeSchema();
