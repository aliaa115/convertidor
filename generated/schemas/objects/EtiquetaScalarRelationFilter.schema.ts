import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EtiquetaWhereInputObjectSchema as EtiquetaWhereInputObjectSchema } from "./EtiquetaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			is: z.lazy(() => EtiquetaWhereInputObjectSchema).optional(),
			isNot: z.lazy(() => EtiquetaWhereInputObjectSchema).optional(),
		})
		.strict();
export const EtiquetaScalarRelationFilterObjectSchema: z.ZodType<Prisma.EtiquetaScalarRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaScalarRelationFilter>;
export const EtiquetaScalarRelationFilterObjectZodSchema = makeSchema();
