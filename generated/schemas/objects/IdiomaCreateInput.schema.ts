import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateNestedOneWithoutIdiomaInputObjectSchema as EstadoCreateNestedOneWithoutIdiomaInputObjectSchema } from "./EstadoCreateNestedOneWithoutIdiomaInput.schema.ts";
import { LibroCreateNestedManyWithoutIdiomaInputObjectSchema as LibroCreateNestedManyWithoutIdiomaInputObjectSchema } from "./LibroCreateNestedManyWithoutIdiomaInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			siglas: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutIdiomaInputObjectSchema),
			libros: z
				.lazy(() => LibroCreateNestedManyWithoutIdiomaInputObjectSchema)
				.optional(),
		})
		.strict();
export const IdiomaCreateInputObjectSchema: z.ZodType<Prisma.IdiomaCreateInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaCreateInput>;
export const IdiomaCreateInputObjectZodSchema = makeSchema();
