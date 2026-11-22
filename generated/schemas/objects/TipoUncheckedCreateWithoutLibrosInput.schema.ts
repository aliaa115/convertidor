import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioUncheckedCreateNestedManyWithoutTipoInputObjectSchema as ComentarioUncheckedCreateNestedManyWithoutTipoInputObjectSchema } from "./ComentarioUncheckedCreateNestedManyWithoutTipoInput.schema.ts";
import { ConfiguracionUncheckedCreateNestedManyWithoutTipoInputObjectSchema as ConfiguracionUncheckedCreateNestedManyWithoutTipoInputObjectSchema } from "./ConfiguracionUncheckedCreateNestedManyWithoutTipoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional().nullable(),
			tabla: z.string().optional().nullable(),
			estadoId: z.number().int().optional(),
			configuraciones: z.lazy(() => ConfiguracionUncheckedCreateNestedManyWithoutTipoInputObjectSchema).optional(),
			comentarios: z.lazy(() => ComentarioUncheckedCreateNestedManyWithoutTipoInputObjectSchema).optional(),
		})
		.strict();
export const TipoUncheckedCreateWithoutLibrosInputObjectSchema: z.ZodType<Prisma.TipoUncheckedCreateWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUncheckedCreateWithoutLibrosInput>;
export const TipoUncheckedCreateWithoutLibrosInputObjectZodSchema = makeSchema();
