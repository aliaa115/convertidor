import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";

const librocategoriascalarwherewithaggregatesinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => LibroCategoriaScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => LibroCategoriaScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		OR: z
			.lazy(() => LibroCategoriaScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => LibroCategoriaScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => LibroCategoriaScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		libroId: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
		categoriaId: z
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
		estadoId: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
	})
	.strict();
export const LibroCategoriaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.LibroCategoriaScalarWhereWithAggregatesInput> =
	librocategoriascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.LibroCategoriaScalarWhereWithAggregatesInput>;
export const LibroCategoriaScalarWhereWithAggregatesInputObjectZodSchema =
	librocategoriascalarwherewithaggregatesinputSchema;
