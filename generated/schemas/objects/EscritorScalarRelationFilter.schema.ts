import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			is: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
			isNot: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
		})
		.strict();
export const EscritorScalarRelationFilterObjectSchema: z.ZodType<Prisma.EscritorScalarRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorScalarRelationFilter>;
export const EscritorScalarRelationFilterObjectZodSchema = makeSchema();
