import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { IdiomaWhereInputObjectSchema as IdiomaWhereInputObjectSchema } from "./IdiomaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => IdiomaWhereInputObjectSchema).optional(),
			some: z.lazy(() => IdiomaWhereInputObjectSchema).optional(),
			none: z.lazy(() => IdiomaWhereInputObjectSchema).optional(),
		})
		.strict();
export const IdiomaListRelationFilterObjectSchema: z.ZodType<Prisma.IdiomaListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.IdiomaListRelationFilter>;
export const IdiomaListRelationFilterObjectZodSchema = makeSchema();
