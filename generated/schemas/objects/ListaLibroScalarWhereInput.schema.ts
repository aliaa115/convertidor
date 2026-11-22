import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from "./IntNullableFilter.schema.ts";

const listalibroscalarwhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => ListaLibroScalarWhereInputObjectSchema),
				z.lazy(() => ListaLibroScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => ListaLibroScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ListaLibroScalarWhereInputObjectSchema),
				z.lazy(() => ListaLibroScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		listaId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		libroId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		estadoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
	})
	.strict();
export const ListaLibroScalarWhereInputObjectSchema: z.ZodType<Prisma.ListaLibroScalarWhereInput> =
	listalibroscalarwhereinputSchema as unknown as z.ZodType<Prisma.ListaLibroScalarWhereInput>;
export const ListaLibroScalarWhereInputObjectZodSchema =
	listalibroscalarwhereinputSchema;
