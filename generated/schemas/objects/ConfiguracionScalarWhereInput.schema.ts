import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from "./IntNullableFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const configuracionscalarwhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => ConfiguracionScalarWhereInputObjectSchema), z.lazy(() => ConfiguracionScalarWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => ConfiguracionScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => ConfiguracionScalarWhereInputObjectSchema), z.lazy(() => ConfiguracionScalarWhereInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		valor: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		usuarioId: z
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
export const ConfiguracionScalarWhereInputObjectSchema: z.ZodType<Prisma.ConfiguracionScalarWhereInput> =
	configuracionscalarwhereinputSchema as unknown as z.ZodType<Prisma.ConfiguracionScalarWhereInput>;
export const ConfiguracionScalarWhereInputObjectZodSchema = configuracionscalarwhereinputSchema;
