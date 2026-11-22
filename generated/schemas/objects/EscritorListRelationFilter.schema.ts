import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
			some: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
			none: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
		})
		.strict();
export const EscritorListRelationFilterObjectSchema: z.ZodType<Prisma.EscritorListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EscritorListRelationFilter>;
export const EscritorListRelationFilterObjectZodSchema = makeSchema();
