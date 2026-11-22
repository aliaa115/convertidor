import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

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
export const SeguirUsuarioUncheckedCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUncheckedCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUncheckedCreateWithoutEstadoInput>;
export const SeguirUsuarioUncheckedCreateWithoutEstadoInputObjectZodSchema = makeSchema();
