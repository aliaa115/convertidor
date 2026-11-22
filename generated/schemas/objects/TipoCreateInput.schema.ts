import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateNestedManyWithoutTipoInputObjectSchema as ComentarioCreateNestedManyWithoutTipoInputObjectSchema } from "./ComentarioCreateNestedManyWithoutTipoInput.schema.ts";
import { ConfiguracionCreateNestedManyWithoutTipoInputObjectSchema as ConfiguracionCreateNestedManyWithoutTipoInputObjectSchema } from "./ConfiguracionCreateNestedManyWithoutTipoInput.schema.ts";
import { EstadoCreateNestedOneWithoutTiposInputObjectSchema as EstadoCreateNestedOneWithoutTiposInputObjectSchema } from "./EstadoCreateNestedOneWithoutTiposInput.schema.ts";
import { LibroCreateNestedManyWithoutTipoInputObjectSchema as LibroCreateNestedManyWithoutTipoInputObjectSchema } from "./LibroCreateNestedManyWithoutTipoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			tabla: z.string().optional().nullable(),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutTiposInputObjectSchema).optional(),
			configuraciones: z.lazy(() => ConfiguracionCreateNestedManyWithoutTipoInputObjectSchema).optional(),
			libros: z.lazy(() => LibroCreateNestedManyWithoutTipoInputObjectSchema).optional(),
			comentarios: z.lazy(() => ComentarioCreateNestedManyWithoutTipoInputObjectSchema).optional(),
		})
		.strict();
export const TipoCreateInputObjectSchema: z.ZodType<Prisma.TipoCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TipoCreateInput>;
export const TipoCreateInputObjectZodSchema = makeSchema();
