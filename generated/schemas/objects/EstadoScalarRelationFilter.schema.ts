import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			is: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			isNot: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoScalarRelationFilterObjectSchema: z.ZodType<Prisma.EstadoScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EstadoScalarRelationFilter>;
export const EstadoScalarRelationFilterObjectZodSchema = makeSchema();
