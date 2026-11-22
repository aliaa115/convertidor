import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroUncheckedCreateNestedManyWithoutIdiomaInputObjectSchema as LibroUncheckedCreateNestedManyWithoutIdiomaInputObjectSchema } from "./LibroUncheckedCreateNestedManyWithoutIdiomaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			siglas: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			estadoId: z.number().int().optional(),
			libros: z
				.lazy(
					() => LibroUncheckedCreateNestedManyWithoutIdiomaInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const IdiomaUncheckedCreateInputObjectSchema: z.ZodType<Prisma.IdiomaUncheckedCreateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaUncheckedCreateInput>;
export const IdiomaUncheckedCreateInputObjectZodSchema = makeSchema();
