import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ConfiguracionCreateNestedManyWithoutTipoInputObjectSchema as ConfiguracionCreateNestedManyWithoutTipoInputObjectSchema } from "./ConfiguracionCreateNestedManyWithoutTipoInput.schema.ts";
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
			configuraciones: z
				.lazy(() => ConfiguracionCreateNestedManyWithoutTipoInputObjectSchema)
				.optional(),
			libros: z
				.lazy(() => LibroCreateNestedManyWithoutTipoInputObjectSchema)
				.optional(),
		})
		.strict();
export const TipoCreateWithoutComentariosInputObjectSchema: z.ZodType<Prisma.TipoCreateWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoCreateWithoutComentariosInput>;
export const TipoCreateWithoutComentariosInputObjectZodSchema = makeSchema();
