import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CapituloScalarRelationFilterObjectSchema as CapituloScalarRelationFilterObjectSchema } from "./CapituloScalarRelationFilter.schema.ts";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./CapituloWhereInput.schema.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EscritorScalarRelationFilterObjectSchema as EscritorScalarRelationFilterObjectSchema } from "./EscritorScalarRelationFilter.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const notaautorwhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => NotaAutorWhereInputObjectSchema), z.lazy(() => NotaAutorWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => NotaAutorWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => NotaAutorWhereInputObjectSchema), z.lazy(() => NotaAutorWhereInputObjectSchema).array()]).optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		texto: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		escritorId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		capituloId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		estadoId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
		escritor: z.union([z.lazy(() => EscritorScalarRelationFilterObjectSchema), z.lazy(() => EscritorWhereInputObjectSchema)]).optional(),
		capitulo: z.union([z.lazy(() => CapituloScalarRelationFilterObjectSchema), z.lazy(() => CapituloWhereInputObjectSchema)]).optional(),
		estado: z.union([z.lazy(() => EstadoScalarRelationFilterObjectSchema), z.lazy(() => EstadoWhereInputObjectSchema)]).optional(),
	})
	.strict();
export const NotaAutorWhereInputObjectSchema: z.ZodType<Prisma.NotaAutorWhereInput> = notaautorwhereinputSchema as unknown as z.ZodType<Prisma.NotaAutorWhereInput>;
export const NotaAutorWhereInputObjectZodSchema = notaautorwhereinputSchema;
