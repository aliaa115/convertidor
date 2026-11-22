import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
		})
		.strict();
export const SeguirUsuarioWhereUniqueInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioWhereUniqueInput>;
export const SeguirUsuarioWhereUniqueInputObjectZodSchema = makeSchema();
