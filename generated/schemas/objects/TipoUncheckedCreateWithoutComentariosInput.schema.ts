import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionUncheckedCreateNestedManyWithoutTipoInputObjectSchema as ConfiguracionUncheckedCreateNestedManyWithoutTipoInputObjectSchema } from "./ConfiguracionUncheckedCreateNestedManyWithoutTipoInput.schema.ts";
import { LibroUncheckedCreateNestedManyWithoutTipoInputObjectSchema as LibroUncheckedCreateNestedManyWithoutTipoInputObjectSchema } from "./LibroUncheckedCreateNestedManyWithoutTipoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			tabla: z.string().optional().nullable(),
			estadoId: z.number().int().optional(),
			configuraciones: z.lazy(() => ConfiguracionUncheckedCreateNestedManyWithoutTipoInputObjectSchema).optional(),
			libros: z.lazy(() => LibroUncheckedCreateNestedManyWithoutTipoInputObjectSchema).optional(),
		})
		.strict();
export const TipoUncheckedCreateWithoutComentariosInputObjectSchema: z.ZodType<Prisma.TipoUncheckedCreateWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUncheckedCreateWithoutComentariosInput>;
export const TipoUncheckedCreateWithoutComentariosInputObjectZodSchema = makeSchema();
