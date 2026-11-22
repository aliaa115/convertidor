import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./TipoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => TipoWhereInputObjectSchema).optional(),
			some: z.lazy(() => TipoWhereInputObjectSchema).optional(),
			none: z.lazy(() => TipoWhereInputObjectSchema).optional(),
		})
		.strict();
export const TipoListRelationFilterObjectSchema: z.ZodType<Prisma.TipoListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TipoListRelationFilter>;
export const TipoListRelationFilterObjectZodSchema = makeSchema();
