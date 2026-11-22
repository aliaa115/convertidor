import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from "./IntNullableFilter.schema.ts";
import { LibroScalarRelationFilterObjectSchema as LibroScalarRelationFilterObjectSchema } from "./LibroScalarRelationFilter.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";
import { NotaAutorListRelationFilterObjectSchema as NotaAutorListRelationFilterObjectSchema } from "./NotaAutorListRelationFilter.schema.ts";
import { ParrafoListRelationFilterObjectSchema as ParrafoListRelationFilterObjectSchema } from "./ParrafoListRelationFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const capitulowhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => CapituloWhereInputObjectSchema), z.lazy(() => CapituloWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => CapituloWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => CapituloWhereInputObjectSchema), z.lazy(() => CapituloWhereInputObjectSchema).array()]).optional(),
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
		libro: z.union([z.lazy(() => LibroScalarRelationFilterObjectSchema), z.lazy(() => LibroWhereInputObjectSchema)]).optional(),
		estado: z.union([z.lazy(() => EstadoScalarRelationFilterObjectSchema), z.lazy(() => EstadoWhereInputObjectSchema)]).optional(),
		parrafos: z.lazy(() => ParrafoListRelationFilterObjectSchema).optional(),
		notasAutor: z.lazy(() => NotaAutorListRelationFilterObjectSchema).optional(),
	})
	.strict();
export const CapituloWhereInputObjectSchema: z.ZodType<Prisma.CapituloWhereInput> = capitulowhereinputSchema as unknown as z.ZodType<Prisma.CapituloWhereInput>;
export const CapituloWhereInputObjectZodSchema = capitulowhereinputSchema;
