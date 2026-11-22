import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

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
export const SeguirUsuarioUncheckedCreateWithoutEscritorInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUncheckedCreateWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUncheckedCreateWithoutEscritorInput>;
export const SeguirUsuarioUncheckedCreateWithoutEscritorInputObjectZodSchema =
	makeSchema();
