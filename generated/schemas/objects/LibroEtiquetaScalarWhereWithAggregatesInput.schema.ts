import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.ts";
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema.ts";

const libroetiquetascalarwherewithaggregatesinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => LibroEtiquetaScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => LibroEtiquetaScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		OR: z
			.lazy(() => LibroEtiquetaScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => LibroEtiquetaScalarWhereWithAggregatesInputObjectSchema),
				z
					.lazy(() => LibroEtiquetaScalarWhereWithAggregatesInputObjectSchema)
					.array(),
			])
			.optional(),
		libroId: z
			.union([
				z.lazy(() => IntWithAggregatesFilterObjectSchema),
				z.number().int(),
			])
			.optional(),
		etiquetaId: z
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
export const LibroEtiquetaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaScalarWhereWithAggregatesInput> =
	libroetiquetascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.LibroEtiquetaScalarWhereWithAggregatesInput>;
export const LibroEtiquetaScalarWhereWithAggregatesInputObjectZodSchema =
	libroetiquetascalarwherewithaggregatesinputSchema;
