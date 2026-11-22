import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			userName: z.string().optional(),
			email: z.string().optional(),
		})
		.strict();
export const UsuarioWhereUniqueInputObjectSchema: z.ZodType<Prisma.UsuarioWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioWhereUniqueInput>;
export const UsuarioWhereUniqueInputObjectZodSchema = makeSchema();
