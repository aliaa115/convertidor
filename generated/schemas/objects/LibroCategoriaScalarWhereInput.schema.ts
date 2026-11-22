import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";

const librocategoriascalarwhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => LibroCategoriaScalarWhereInputObjectSchema), z.lazy(() => LibroCategoriaScalarWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => LibroCategoriaScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => LibroCategoriaScalarWhereInputObjectSchema), z.lazy(() => LibroCategoriaScalarWhereInputObjectSchema).array()]).optional(),
		libroId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		categoriaId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		estadoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
	})
	.strict();
export const LibroCategoriaScalarWhereInputObjectSchema: z.ZodType<Prisma.LibroCategoriaScalarWhereInput> =
	librocategoriascalarwhereinputSchema as unknown as z.ZodType<Prisma.LibroCategoriaScalarWhereInput>;
export const LibroCategoriaScalarWhereInputObjectZodSchema = librocategoriascalarwhereinputSchema;
