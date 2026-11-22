import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ParrafoWhereInputObjectSchema as ParrafoWhereInputObjectSchema } from "./ParrafoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => ParrafoWhereInputObjectSchema).optional(),
			some: z.lazy(() => ParrafoWhereInputObjectSchema).optional(),
			none: z.lazy(() => ParrafoWhereInputObjectSchema).optional(),
		})
		.strict();
export const ParrafoListRelationFilterObjectSchema: z.ZodType<Prisma.ParrafoListRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoListRelationFilter>;
export const ParrafoListRelationFilterObjectZodSchema = makeSchema();
