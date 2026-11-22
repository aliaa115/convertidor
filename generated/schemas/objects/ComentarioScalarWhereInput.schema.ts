import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from "./IntNullableFilter.schema.ts";
import { StringFilterObjectSchema as StringFilterObjectSchema } from "./StringFilter.schema.ts";

const comentarioscalarwhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => ComentarioScalarWhereInputObjectSchema), z.lazy(() => ComentarioScalarWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => ComentarioScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => ComentarioScalarWhereInputObjectSchema), z.lazy(() => ComentarioScalarWhereInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		contenido: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		escritorId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		parrafoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		comentarioPadreId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		tipoId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		estadoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
	})
	.strict();
export const ComentarioScalarWhereInputObjectSchema: z.ZodType<Prisma.ComentarioScalarWhereInput> = comentarioscalarwhereinputSchema as unknown as z.ZodType<Prisma.ComentarioScalarWhereInput>;
export const ComentarioScalarWhereInputObjectZodSchema = comentarioscalarwhereinputSchema;
