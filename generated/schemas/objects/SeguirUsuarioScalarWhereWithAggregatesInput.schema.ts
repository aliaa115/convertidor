import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";

const seguirusuarioscalarwherewithaggregatesinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => SeguirUsuarioScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => SeguirUsuarioScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		OR: z
			.lazy(() => SeguirUsuarioScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => SeguirUsuarioScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => SeguirUsuarioScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		id: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
		createdAt: z
			.union([
				z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
				z.coerce.date(),
			])
			.optional(),
		updatedAt: z
			.union([
				z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
				z.coerce.date(),
			])
			.optional(),
		escritorId: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
		escritorSeguidoId: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
		estadoId: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
	})
	.strict();
export const SeguirUsuarioScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioScalarWhereWithAggregatesInput> =
	seguirusuarioscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SeguirUsuarioScalarWhereWithAggregatesInput>;
export const SeguirUsuarioScalarWhereWithAggregatesInputObjectZodSchema =
	seguirusuarioscalarwherewithaggregatesinputSchema;
