import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateNestedManyWithoutTipoInputObjectSchema as ComentarioCreateNestedManyWithoutTipoInputObjectSchema } from "./ComentarioCreateNestedManyWithoutTipoInput.schema.ts";
import { EstadoCreateNestedOneWithoutTiposInputObjectSchema as EstadoCreateNestedOneWithoutTiposInputObjectSchema } from "./EstadoCreateNestedOneWithoutTiposInput.schema.ts";
import { LibroCreateNestedManyWithoutTipoInputObjectSchema as LibroCreateNestedManyWithoutTipoInputObjectSchema } from "./LibroCreateNestedManyWithoutTipoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			tabla: z.string().optional().nullable(),
			estado: z
				.lazy(() => EstadoCreateNestedOneWithoutTiposInputObjectSchema)
				.optional(),
			libros: z
				.lazy(() => LibroCreateNestedManyWithoutTipoInputObjectSchema)
				.optional(),
			comentarios: z
				.lazy(() => ComentarioCreateNestedManyWithoutTipoInputObjectSchema)
				.optional(),
		})
		.strict();
export const TipoCreateWithoutConfiguracionesInputObjectSchema: z.ZodType<Prisma.TipoCreateWithoutConfiguracionesInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoCreateWithoutConfiguracionesInput>;
export const TipoCreateWithoutConfiguracionesInputObjectZodSchema =
	makeSchema();
