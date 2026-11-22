import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const marcadorscalarwhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => MarcadorScalarWhereInputObjectSchema), z.lazy(() => MarcadorScalarWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => MarcadorScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => MarcadorScalarWhereInputObjectSchema), z.lazy(() => MarcadorScalarWhereInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		nombre: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		color: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		escritorId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		parrafoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		estadoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
	})
	.strict();
export const MarcadorScalarWhereInputObjectSchema: z.ZodType<Prisma.MarcadorScalarWhereInput> = marcadorscalarwhereinputSchema as unknown as z.ZodType<Prisma.MarcadorScalarWhereInput>;
export const MarcadorScalarWhereInputObjectZodSchema = marcadorscalarwhereinputSchema;
