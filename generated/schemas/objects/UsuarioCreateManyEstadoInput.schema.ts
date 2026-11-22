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
		})
		.strict();
export const UsuarioCreateManyEstadoInputObjectSchema: z.ZodType<Prisma.UsuarioCreateManyEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateManyEstadoInput>;
export const UsuarioCreateManyEstadoInputObjectZodSchema = makeSchema();
