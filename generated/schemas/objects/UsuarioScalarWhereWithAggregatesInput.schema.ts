import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema.ts";

const usuarioscalarwherewithaggregatesinputSchema = z
	.object({
		AND: z.union([z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
		userName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		password: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		nivel: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
		estadoId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
	})
	.strict();
export const UsuarioScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UsuarioScalarWhereWithAggregatesInput> =
	usuarioscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.UsuarioScalarWhereWithAggregatesInput>;
export const UsuarioScalarWhereWithAggregatesInputObjectZodSchema = usuarioscalarwherewithaggregatesinputSchema;
