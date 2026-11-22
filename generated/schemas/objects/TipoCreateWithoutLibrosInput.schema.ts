import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateNestedManyWithoutTipoInputObjectSchema as ComentarioCreateNestedManyWithoutTipoInputObjectSchema } from "./ComentarioCreateNestedManyWithoutTipoInput.schema.ts";
import { ConfiguracionCreateNestedManyWithoutTipoInputObjectSchema as ConfiguracionCreateNestedManyWithoutTipoInputObjectSchema } from "./ConfiguracionCreateNestedManyWithoutTipoInput.schema.ts";
import { EstadoCreateNestedOneWithoutTiposInputObjectSchema as EstadoCreateNestedOneWithoutTiposInputObjectSchema } from "./EstadoCreateNestedOneWithoutTiposInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string().optional().nullable(),
			tabla: z.string().optional().nullable(),
			estado: z.lazy(() => EstadoCreateNestedOneWithoutTiposInputObjectSchema).optional(),
			configuraciones: z.lazy(() => ConfiguracionCreateNestedManyWithoutTipoInputObjectSchema).optional(),
			comentarios: z.lazy(() => ComentarioCreateNestedManyWithoutTipoInputObjectSchema).optional(),
		})
		.strict();
export const TipoCreateWithoutLibrosInputObjectSchema: z.ZodType<Prisma.TipoCreateWithoutLibrosInput> = makeSchema() as unknown as z.ZodType<Prisma.TipoCreateWithoutLibrosInput>;
export const TipoCreateWithoutLibrosInputObjectZodSchema = makeSchema();
