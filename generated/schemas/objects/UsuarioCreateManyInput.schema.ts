import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			userName: z.string(),
			email: z.string(),
			password: z.string(),
			nivel: z.number().int().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
		})
		.strict();
export const UsuarioCreateManyInputObjectSchema: z.ZodType<Prisma.UsuarioCreateManyInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateManyInput>;
export const UsuarioCreateManyInputObjectZodSchema = makeSchema();
