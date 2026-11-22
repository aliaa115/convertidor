import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { GlosarioWhereInputObjectSchema as GlosarioWhereInputObjectSchema } from "./GlosarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => GlosarioWhereInputObjectSchema).optional(),
			some: z.lazy(() => GlosarioWhereInputObjectSchema).optional(),
			none: z.lazy(() => GlosarioWhereInputObjectSchema).optional(),
		})
		.strict();
export const GlosarioListRelationFilterObjectSchema: z.ZodType<Prisma.GlosarioListRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioListRelationFilter>;
export const GlosarioListRelationFilterObjectZodSchema = makeSchema();
