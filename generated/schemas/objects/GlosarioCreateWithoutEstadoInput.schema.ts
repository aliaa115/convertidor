import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateNestedOneWithoutGlosariosInputObjectSchema as EscritorCreateNestedOneWithoutGlosariosInputObjectSchema } from "./EscritorCreateNestedOneWithoutGlosariosInput.schema.ts";
import { LibroCreateNestedOneWithoutGlosariosInputObjectSchema as LibroCreateNestedOneWithoutGlosariosInputObjectSchema } from "./LibroCreateNestedOneWithoutGlosariosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			palabra: z.string().optional().nullable(),
			significado: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			libro: z.lazy(
				() => LibroCreateNestedOneWithoutGlosariosInputObjectSchema,
			),
			escritor: z.lazy(
				() => EscritorCreateNestedOneWithoutGlosariosInputObjectSchema,
			),
		})
		.strict();
export const GlosarioCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.GlosarioCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioCreateWithoutEstadoInput>;
export const GlosarioCreateWithoutEstadoInputObjectZodSchema = makeSchema();
