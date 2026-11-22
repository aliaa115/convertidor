import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateNestedOneWithoutIdiomaInputObjectSchema as EstadoCreateNestedOneWithoutIdiomaInputObjectSchema } from "./EstadoCreateNestedOneWithoutIdiomaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			siglas: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutIdiomaInputObjectSchema).optional(),
		})
		.strict();
export const IdiomaCreateWithoutLibrosInputObjectSchema: z.ZodType<Prisma.IdiomaCreateWithoutLibrosInput> = makeSchema() as unknown as z.ZodType<Prisma.IdiomaCreateWithoutLibrosInput>;
export const IdiomaCreateWithoutLibrosInputObjectZodSchema = makeSchema();
