import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const glosarioscalarwhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => GlosarioScalarWhereInputObjectSchema), z.lazy(() => GlosarioScalarWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => GlosarioScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => GlosarioScalarWhereInputObjectSchema), z.lazy(() => GlosarioScalarWhereInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		palabra: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		significado: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		libroId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		escritorId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		estadoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
	})
	.strict();
export const GlosarioScalarWhereInputObjectSchema: z.ZodType<Prisma.GlosarioScalarWhereInput> = glosarioscalarwhereinputSchema as unknown as z.ZodType<Prisma.GlosarioScalarWhereInput>;
export const GlosarioScalarWhereInputObjectZodSchema = glosarioscalarwhereinputSchema;
