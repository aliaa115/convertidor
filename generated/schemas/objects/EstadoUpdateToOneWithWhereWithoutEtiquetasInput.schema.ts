import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoUncheckedUpdateWithoutEtiquetasInputObjectSchema as EstadoUncheckedUpdateWithoutEtiquetasInputObjectSchema } from "./EstadoUncheckedUpdateWithoutEtiquetasInput.schema.ts";
import { EstadoUpdateWithoutEtiquetasInputObjectSchema as EstadoUpdateWithoutEtiquetasInputObjectSchema } from "./EstadoUpdateWithoutEtiquetasInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => EstadoUpdateWithoutEtiquetasInputObjectSchema), z.lazy(() => EstadoUncheckedUpdateWithoutEtiquetasInputObjectSchema)]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutEtiquetasInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutEtiquetasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutEtiquetasInput>;
export const EstadoUpdateToOneWithWhereWithoutEtiquetasInputObjectZodSchema = makeSchema();
