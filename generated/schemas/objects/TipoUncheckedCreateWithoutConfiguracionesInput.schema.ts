import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioUncheckedCreateNestedManyWithoutTipoInputObjectSchema as ComentarioUncheckedCreateNestedManyWithoutTipoInputObjectSchema } from "./ComentarioUncheckedCreateNestedManyWithoutTipoInput.schema.ts";
import { LibroUncheckedCreateNestedManyWithoutTipoInputObjectSchema as LibroUncheckedCreateNestedManyWithoutTipoInputObjectSchema } from "./LibroUncheckedCreateNestedManyWithoutTipoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			tabla: z.string().optional().nullable(),
			estadoId: z.number().int().optional(),
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
export const TipoUncheckedCreateWithoutConfiguracionesInputObjectSchema: z.ZodType<Prisma.TipoUncheckedCreateWithoutConfiguracionesInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUncheckedCreateWithoutConfiguracionesInput>;
export const TipoUncheckedCreateWithoutConfiguracionesInputObjectZodSchema =
	makeSchema();
