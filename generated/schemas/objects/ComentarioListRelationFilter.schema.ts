import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioWhereInputObjectSchema as ComentarioWhereInputObjectSchema } from "./ComentarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => ComentarioWhereInputObjectSchema).optional(),
			some: z.lazy(() => ComentarioWhereInputObjectSchema).optional(),
			none: z.lazy(() => ComentarioWhereInputObjectSchema).optional(),
		})
		.strict();
export const ComentarioListRelationFilterObjectSchema: z.ZodType<Prisma.ComentarioListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ComentarioListRelationFilter>;
export const ComentarioListRelationFilterObjectZodSchema = makeSchema();
