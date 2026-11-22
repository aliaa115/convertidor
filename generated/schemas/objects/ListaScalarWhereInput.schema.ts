import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from "./BoolFilter.schema.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from "./IntNullableFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const listascalarwhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => ListaScalarWhereInputObjectSchema),
				z.lazy(() => ListaScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => ListaScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ListaScalarWhereInputObjectSchema),
				z.lazy(() => ListaScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		nombre: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		privada: z
			.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
			.optional(),
		usuarioId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		estadoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
	})
	.strict();
export const ListaScalarWhereInputObjectSchema: z.ZodType<Prisma.ListaScalarWhereInput> =
	listascalarwhereinputSchema as unknown as z.ZodType<Prisma.ListaScalarWhereInput>;
export const ListaScalarWhereInputObjectZodSchema = listascalarwhereinputSchema;
