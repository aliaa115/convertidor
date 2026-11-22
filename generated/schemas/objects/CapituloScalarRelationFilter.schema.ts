import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./CapituloWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			is: z.lazy(() => CapituloWhereInputObjectSchema).optional(),
			isNot: z.lazy(() => CapituloWhereInputObjectSchema).optional(),
		})
		.strict();
export const CapituloScalarRelationFilterObjectSchema: z.ZodType<Prisma.CapituloScalarRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloScalarRelationFilter>;
export const CapituloScalarRelationFilterObjectZodSchema = makeSchema();
