import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from "./BoolFilter.schema.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { StringFilterObjectSchema as StringFilterObjectSchema } from "./StringFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const libroscalarwhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => LibroScalarWhereInputObjectSchema),
				z.lazy(() => LibroScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => LibroScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => LibroScalarWhereInputObjectSchema),
				z.lazy(() => LibroScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		titulo: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		resumen: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		portada: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		publicado: z
			.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
			.optional(),
		fechaPublicacion: z
			.union([
				z.lazy(() => DateTimeNullableFilterObjectSchema),
				z.coerce.date(),
			])
			.optional()
			.nullable(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		escritorId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		tipoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		estadoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		idiomaId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
	})
	.strict();
export const LibroScalarWhereInputObjectSchema: z.ZodType<Prisma.LibroScalarWhereInput> =
	libroscalarwhereinputSchema as unknown as z.ZodType<Prisma.LibroScalarWhereInput>;
export const LibroScalarWhereInputObjectZodSchema = libroscalarwhereinputSchema;
