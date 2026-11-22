import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EtiquetaUncheckedUpdateWithoutLibrosInputObjectSchema as EtiquetaUncheckedUpdateWithoutLibrosInputObjectSchema } from "./EtiquetaUncheckedUpdateWithoutLibrosInput.schema.ts";
import { EtiquetaUpdateWithoutLibrosInputObjectSchema as EtiquetaUpdateWithoutLibrosInputObjectSchema } from "./EtiquetaUpdateWithoutLibrosInput.schema.ts";
import { EtiquetaWhereInputObjectSchema as EtiquetaWhereInputObjectSchema } from "./EtiquetaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EtiquetaWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => EtiquetaUpdateWithoutLibrosInputObjectSchema), z.lazy(() => EtiquetaUncheckedUpdateWithoutLibrosInputObjectSchema)]),
		})
		.strict();
export const EtiquetaUpdateToOneWithWhereWithoutLibrosInputObjectSchema: z.ZodType<Prisma.EtiquetaUpdateToOneWithWhereWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaUpdateToOneWithWhereWithoutLibrosInput>;
export const EtiquetaUpdateToOneWithWhereWithoutLibrosInputObjectZodSchema = makeSchema();
