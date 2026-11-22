import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateNestedManyWithoutTipoInputObjectSchema as ComentarioCreateNestedManyWithoutTipoInputObjectSchema } from "./ComentarioCreateNestedManyWithoutTipoInput.schema.ts";
import { ConfiguracionCreateNestedManyWithoutTipoInputObjectSchema as ConfiguracionCreateNestedManyWithoutTipoInputObjectSchema } from "./ConfiguracionCreateNestedManyWithoutTipoInput.schema.ts";
import { LibroCreateNestedManyWithoutTipoInputObjectSchema as LibroCreateNestedManyWithoutTipoInputObjectSchema } from "./LibroCreateNestedManyWithoutTipoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			tabla: z.string().optional().nullable(),
			configuraciones: z
				.lazy(() => ConfiguracionCreateNestedManyWithoutTipoInputObjectSchema)
				.optional(),
			libros: z
				.lazy(() => LibroCreateNestedManyWithoutTipoInputObjectSchema)
				.optional(),
			comentarios: z
				.lazy(() => ComentarioCreateNestedManyWithoutTipoInputObjectSchema)
				.optional(),
		})
		.strict();
export const TipoCreateWithoutEstadoInputObjectSchema: z.ZodType<Prisma.TipoCreateWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoCreateWithoutEstadoInput>;
export const TipoCreateWithoutEstadoInputObjectZodSchema = makeSchema();
