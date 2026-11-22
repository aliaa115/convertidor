import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./CapituloWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => CapituloWhereInputObjectSchema).optional(),
			some: z.lazy(() => CapituloWhereInputObjectSchema).optional(),
			none: z.lazy(() => CapituloWhereInputObjectSchema).optional(),
		})
		.strict();
export const CapituloListRelationFilterObjectSchema: z.ZodType<Prisma.CapituloListRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloListRelationFilter>;
export const CapituloListRelationFilterObjectZodSchema = makeSchema();
