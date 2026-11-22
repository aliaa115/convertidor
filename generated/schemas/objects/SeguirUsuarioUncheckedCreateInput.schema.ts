import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			createdAt: z.coerce.date().optional(),
			escritorId: z.number().int(),
			escritorSeguidoId: z.number().int(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const SeguirUsuarioUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUncheckedCreateInput>;
export const SeguirUsuarioUncheckedCreateInputObjectZodSchema = makeSchema();
