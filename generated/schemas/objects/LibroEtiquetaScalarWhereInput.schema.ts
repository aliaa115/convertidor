import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";

const libroetiquetascalarwhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => LibroEtiquetaScalarWhereInputObjectSchema),
				z.lazy(() => LibroEtiquetaScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => LibroEtiquetaScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => LibroEtiquetaScalarWhereInputObjectSchema),
				z.lazy(() => LibroEtiquetaScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		libroId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		etiquetaId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		estadoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
	})
	.strict();
export const LibroEtiquetaScalarWhereInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaScalarWhereInput> =
	libroetiquetascalarwhereinputSchema as unknown as z.ZodType<Prisma.LibroEtiquetaScalarWhereInput>;
export const LibroEtiquetaScalarWhereInputObjectZodSchema =
	libroetiquetascalarwhereinputSchema;
