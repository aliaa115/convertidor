import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateNestedOneWithoutGlosariosInputObjectSchema as EstadoCreateNestedOneWithoutGlosariosInputObjectSchema } from "./EstadoCreateNestedOneWithoutGlosariosInput.schema.ts";
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
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutGlosariosInputObjectSchema)
				.optional(),
		})
		.strict();
export const GlosarioCreateWithoutEscritorInputObjectSchema: z.ZodType<Prisma.GlosarioCreateWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioCreateWithoutEscritorInput>;
export const GlosarioCreateWithoutEscritorInputObjectZodSchema = makeSchema();
