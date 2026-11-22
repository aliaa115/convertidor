import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { IdiomaWhereInputObjectSchema as IdiomaWhereInputObjectSchema } from "./IdiomaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			is: z.lazy(() => IdiomaWhereInputObjectSchema).optional(),
			isNot: z.lazy(() => IdiomaWhereInputObjectSchema).optional(),
		})
		.strict();
export const IdiomaScalarRelationFilterObjectSchema: z.ZodType<Prisma.IdiomaScalarRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaScalarRelationFilter>;
export const IdiomaScalarRelationFilterObjectZodSchema = makeSchema();
