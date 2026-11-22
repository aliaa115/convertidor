import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateNestedOneWithoutGlosariosInputObjectSchema as EscritorCreateNestedOneWithoutGlosariosInputObjectSchema } from "./EscritorCreateNestedOneWithoutGlosariosInput.schema.ts";
import { EstadoCreateNestedOneWithoutGlosariosInputObjectSchema as EstadoCreateNestedOneWithoutGlosariosInputObjectSchema } from "./EstadoCreateNestedOneWithoutGlosariosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			palabra: z.string().optional().nullable(),
			significado: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			escritor: z.lazy(() => EscritorCreateNestedOneWithoutGlosariosInputObjectSchema),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutGlosariosInputObjectSchema).optional(),
		})
		.strict();
export const GlosarioCreateWithoutLibroInputObjectSchema: z.ZodType<Prisma.GlosarioCreateWithoutLibroInput> = makeSchema() as unknown as z.ZodType<Prisma.GlosarioCreateWithoutLibroInput>;
export const GlosarioCreateWithoutLibroInputObjectZodSchema = makeSchema();
