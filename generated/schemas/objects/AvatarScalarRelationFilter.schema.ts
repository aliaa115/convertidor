import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { AvatarWhereInputObjectSchema as AvatarWhereInputObjectSchema } from "./AvatarWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			is: z.lazy(() => AvatarWhereInputObjectSchema).optional(),
			isNot: z.lazy(() => AvatarWhereInputObjectSchema).optional(),
		})
		.strict();
export const AvatarScalarRelationFilterObjectSchema: z.ZodType<Prisma.AvatarScalarRelationFilter> =
	makeSchema() as unknown as z.ZodType<Prisma.AvatarScalarRelationFilter>;
export const AvatarScalarRelationFilterObjectZodSchema = makeSchema();
