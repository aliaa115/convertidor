import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionWhereInputObjectSchema as ConfiguracionWhereInputObjectSchema } from "./ConfiguracionWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => ConfiguracionWhereInputObjectSchema).optional(),
			some: z.lazy(() => ConfiguracionWhereInputObjectSchema).optional(),
			none: z.lazy(() => ConfiguracionWhereInputObjectSchema).optional(),
		})
		.strict();
export const ConfiguracionListRelationFilterObjectSchema: z.ZodType<Prisma.ConfiguracionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionListRelationFilter>;
export const ConfiguracionListRelationFilterObjectZodSchema = makeSchema();
