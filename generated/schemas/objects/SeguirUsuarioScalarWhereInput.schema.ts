import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";

const seguirusuarioscalarwhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => SeguirUsuarioScalarWhereInputObjectSchema), z.lazy(() => SeguirUsuarioScalarWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => SeguirUsuarioScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => SeguirUsuarioScalarWhereInputObjectSchema), z.lazy(() => SeguirUsuarioScalarWhereInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		escritorId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		escritorSeguidoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		estadoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
	})
	.strict();
export const SeguirUsuarioScalarWhereInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioScalarWhereInput> =
	seguirusuarioscalarwhereinputSchema as unknown as z.ZodType<Prisma.SeguirUsuarioScalarWhereInput>;
export const SeguirUsuarioScalarWhereInputObjectZodSchema = seguirusuarioscalarwhereinputSchema;
