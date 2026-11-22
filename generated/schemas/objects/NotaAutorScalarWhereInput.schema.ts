import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const notaautorscalarwhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => NotaAutorScalarWhereInputObjectSchema), z.lazy(() => NotaAutorScalarWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => NotaAutorScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => NotaAutorScalarWhereInputObjectSchema), z.lazy(() => NotaAutorScalarWhereInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		texto: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		escritorId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		capituloId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		estadoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
	})
	.strict();
export const NotaAutorScalarWhereInputObjectSchema: z.ZodType<Prisma.NotaAutorScalarWhereInput> = notaautorscalarwhereinputSchema as unknown as z.ZodType<Prisma.NotaAutorScalarWhereInput>;
export const NotaAutorScalarWhereInputObjectZodSchema = notaautorscalarwhereinputSchema;
