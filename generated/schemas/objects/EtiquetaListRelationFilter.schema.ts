import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EtiquetaWhereInputObjectSchema as EtiquetaWhereInputObjectSchema } from "./EtiquetaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => EtiquetaWhereInputObjectSchema).optional(),
			some: z.lazy(() => EtiquetaWhereInputObjectSchema).optional(),
			none: z.lazy(() => EtiquetaWhereInputObjectSchema).optional(),
		})
		.strict();
export const EtiquetaListRelationFilterObjectSchema: z.ZodType<Prisma.EtiquetaListRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaListRelationFilter>;
export const EtiquetaListRelationFilterObjectZodSchema = makeSchema();
