import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioUncheckedCreateNestedManyWithoutTipoInputObjectSchema as ComentarioUncheckedCreateNestedManyWithoutTipoInputObjectSchema } from "./ComentarioUncheckedCreateNestedManyWithoutTipoInput.schema.ts";
import { ConfiguracionUncheckedCreateNestedManyWithoutTipoInputObjectSchema as ConfiguracionUncheckedCreateNestedManyWithoutTipoInputObjectSchema } from "./ConfiguracionUncheckedCreateNestedManyWithoutTipoInput.schema.ts";
import { LibroUncheckedCreateNestedManyWithoutTipoInputObjectSchema as LibroUncheckedCreateNestedManyWithoutTipoInputObjectSchema } from "./LibroUncheckedCreateNestedManyWithoutTipoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			tabla: z.string().optional().nullable(),
			configuraciones: z
				.lazy(
					() =>
						ConfiguracionUncheckedCreateNestedManyWithoutTipoInputObjectSchema,
				)
				.optional(),
			libros: z
				.lazy(() => LibroUncheckedCreateNestedManyWithoutTipoInputObjectSchema)
				.optional(),
			comentarios: z
				.lazy(
					() => ComentarioUncheckedCreateNestedManyWithoutTipoInputObjectSchema,
				)
				.optional(),
		})
		.strict();
export const TipoUncheckedCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.TipoUncheckedCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUncheckedCreateWithoutEstadoInput>;
export const TipoUncheckedCreateWithoutEstadoInputObjectZodSchema =
	makeSchema();
