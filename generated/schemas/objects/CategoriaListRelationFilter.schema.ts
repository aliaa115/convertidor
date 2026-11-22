import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CategoriaWhereInputObjectSchema as CategoriaWhereInputObjectSchema } from "./CategoriaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => CategoriaWhereInputObjectSchema).optional(),
			some: z.lazy(() => CategoriaWhereInputObjectSchema).optional(),
			none: z.lazy(() => CategoriaWhereInputObjectSchema).optional(),
		})
		.strict();
export const CategoriaListRelationFilterObjectSchema: z.ZodType<Prisma.CategoriaListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CategoriaListRelationFilter>;
export const CategoriaListRelationFilterObjectZodSchema = makeSchema();
