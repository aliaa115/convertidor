import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateNestedOneWithoutGlosariosInputObjectSchema as EscritorCreateNestedOneWithoutGlosariosInputObjectSchema } from "./EscritorCreateNestedOneWithoutGlosariosInput.schema.ts";
import { EstadoCreateNestedOneWithoutGlosariosInputObjectSchema as EstadoCreateNestedOneWithoutGlosariosInputObjectSchema } from "./EstadoCreateNestedOneWithoutGlosariosInput.schema.ts";
import { LibroCreateNestedOneWithoutGlosariosInputObjectSchema as LibroCreateNestedOneWithoutGlosariosInputObjectSchema } from "./LibroCreateNestedOneWithoutGlosariosInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			palabra: z.string().optional().nullable(),
			significado: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			libro: z.lazy(() => LibroCreateNestedOneWithoutGlosariosInputObjectSchema),
			escritor: z.lazy(() => EscritorCreateNestedOneWithoutGlosariosInputObjectSchema),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutGlosariosInputObjectSchema).optional(),
		})
		.strict();
export const GlosarioCreateInputObjectSchema: z.ZodType<Prisma.GlosarioCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GlosarioCreateInput>;
export const GlosarioCreateInputObjectZodSchema = makeSchema();
