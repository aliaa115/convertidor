import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema.ts";

const avatarscalarwherewithaggregatesinputSchema = z
	.object({
		AND: z.union([z.lazy(() => AvatarScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AvatarScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => AvatarScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => AvatarScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AvatarScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
		nombre: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		url: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
	})
	.strict();
export const AvatarScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AvatarScalarWhereWithAggregatesInput> =
	avatarscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AvatarScalarWhereWithAggregatesInput>;
export const AvatarScalarWhereWithAggregatesInputObjectZodSchema = avatarscalarwherewithaggregatesinputSchema;
