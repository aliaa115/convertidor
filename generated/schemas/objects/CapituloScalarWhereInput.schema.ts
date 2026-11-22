import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from "./IntNullableFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const capituloscalarwhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => CapituloScalarWhereInputObjectSchema), z.lazy(() => CapituloScalarWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => CapituloScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => CapituloScalarWhereInputObjectSchema), z.lazy(() => CapituloScalarWhereInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		nombre: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		indice: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		libroId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		estadoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
	})
	.strict();
export const CapituloScalarWhereInputObjectSchema: z.ZodType<Prisma.CapituloScalarWhereInput> = capituloscalarwhereinputSchema as unknown as z.ZodType<Prisma.CapituloScalarWhereInput>;
export const CapituloScalarWhereInputObjectZodSchema = capituloscalarwhereinputSchema;
