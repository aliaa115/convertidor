import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./TipoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			is: z.lazy(() => TipoWhereInputObjectSchema).optional(),
			isNot: z.lazy(() => TipoWhereInputObjectSchema).optional(),
		})
		.strict();
export const TipoScalarRelationFilterObjectSchema: z.ZodType<Prisma.TipoScalarRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoScalarRelationFilter>;
export const TipoScalarRelationFilterObjectZodSchema = makeSchema();
