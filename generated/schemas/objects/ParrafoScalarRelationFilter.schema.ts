import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ParrafoWhereInputObjectSchema as ParrafoWhereInputObjectSchema } from "./ParrafoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			is: z.lazy(() => ParrafoWhereInputObjectSchema).optional(),
			isNot: z.lazy(() => ParrafoWhereInputObjectSchema).optional(),
		})
		.strict();
export const ParrafoScalarRelationFilterObjectSchema: z.ZodType<Prisma.ParrafoScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ParrafoScalarRelationFilter>;
export const ParrafoScalarRelationFilterObjectZodSchema = makeSchema();
