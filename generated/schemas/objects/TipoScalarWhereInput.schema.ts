import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const tiposcalarwhereinputSchema = z
	.object({
		AND: z
			.union([
				z.lazy(() => TipoScalarWhereInputObjectSchema),
				z.lazy(() => TipoScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => TipoScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => TipoScalarWhereInputObjectSchema),
				z.lazy(() => TipoScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
		nombre: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		tabla: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		estadoId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
			.optional(),
	})
	.strict();
export const TipoScalarWhereInputObjectSchema: z.ZodType<Prisma.TipoScalarWhereInput> =
	tiposcalarwhereinputSchema as unknown as z.ZodType<Prisma.TipoScalarWhereInput>;
export const TipoScalarWhereInputObjectZodSchema = tiposcalarwhereinputSchema;
