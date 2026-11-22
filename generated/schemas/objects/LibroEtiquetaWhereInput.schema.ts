import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { EtiquetaScalarRelationFilterObjectSchema as EtiquetaScalarRelationFilterObjectSchema } from "./EtiquetaScalarRelationFilter.schema.ts";
import { EtiquetaWhereInputObjectSchema as EtiquetaWhereInputObjectSchema } from "./EtiquetaWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { LibroScalarRelationFilterObjectSchema as LibroScalarRelationFilterObjectSchema } from "./LibroScalarRelationFilter.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const libroetiquetawhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => LibroEtiquetaWhereInputObjectSchema),
				z.lazy(() => LibroEtiquetaWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => LibroEtiquetaWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => LibroEtiquetaWhereInputObjectSchema),
				z.lazy(() => LibroEtiquetaWhereInputObjectSchema).array(),
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
		estado: z
			.union([
				z.lazy(() => EstadoScalarRelationFilterObjectSchema),
				z.lazy(() => EstadoWhereInputObjectSchema),
			])
			.optional(),
		libro: z
			.union([
				z.lazy(() => LibroScalarRelationFilterObjectSchema),
				z.lazy(() => LibroWhereInputObjectSchema),
			])
			.optional(),
		etiqueta: z
			.union([
				z.lazy(() => EtiquetaScalarRelationFilterObjectSchema),
				z.lazy(() => EtiquetaWhereInputObjectSchema),
			])
			.optional(),
	})
	.strict();
export const LibroEtiquetaWhereInputObjectSchema: z.ZodType<Prisma.LibroEtiquetaWhereInput> =
	libroetiquetawhereinputSchema as unknown as z.ZodType<Prisma.LibroEtiquetaWhereInput>;
export const LibroEtiquetaWhereInputObjectZodSchema =
	libroetiquetawhereinputSchema;
