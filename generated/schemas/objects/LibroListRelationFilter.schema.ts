import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => LibroWhereInputObjectSchema).optional(),
			some: z.lazy(() => LibroWhereInputObjectSchema).optional(),
			none: z.lazy(() => LibroWhereInputObjectSchema).optional(),
		})
		.strict();
export const LibroListRelationFilterObjectSchema: z.ZodType<Prisma.LibroListRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroListRelationFilter>;
export const LibroListRelationFilterObjectZodSchema = makeSchema();
