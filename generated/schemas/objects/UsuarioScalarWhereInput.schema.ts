import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { StringFilterObjectSchema as StringFilterObjectSchema } from "./StringFilter.schema.ts";

const usuarioscalarwhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => UsuarioScalarWhereInputObjectSchema), z.lazy(() => UsuarioScalarWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => UsuarioScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => UsuarioScalarWhereInputObjectSchema), z.lazy(() => UsuarioScalarWhereInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		userName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		nivel: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		estadoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
	})
	.strict();
export const UsuarioScalarWhereInputObjectSchema: z.ZodType<Prisma.UsuarioScalarWhereInput> = usuarioscalarwhereinputSchema as unknown as z.ZodType<Prisma.UsuarioScalarWhereInput>;
export const UsuarioScalarWhereInputObjectZodSchema = usuarioscalarwhereinputSchema;
