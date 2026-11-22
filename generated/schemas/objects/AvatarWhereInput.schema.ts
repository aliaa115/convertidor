import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorListRelationFilterObjectSchema as EscritorListRelationFilterObjectSchema } from "./EscritorListRelationFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { StringFilterObjectSchema as StringFilterObjectSchema } from "./StringFilter.schema.ts";

const avatarwhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => AvatarWhereInputObjectSchema),
				z.lazy(() => AvatarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => AvatarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => AvatarWhereInputObjectSchema),
				z.lazy(() => AvatarWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		nombre: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		url: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		escritores: z.lazy(() => EscritorListRelationFilterObjectSchema).optional(),
	})
	.strict();
export const AvatarWhereInputObjectSchema: z.ZodType<Prisma.AvatarWhereInput> =
	avatarwhereinputSchema as unknown as z.ZodType<Prisma.AvatarWhereInput>;
export const AvatarWhereInputObjectZodSchema = avatarwhereinputSchema;
