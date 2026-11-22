import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.ts";
import { EscritorScalarRelationFilterObjectSchema as EscritorScalarRelationFilterObjectSchema } from "./EscritorScalarRelationFilter.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";
import { EstadoScalarRelationFilterObjectSchema as EstadoScalarRelationFilterObjectSchema } from "./EstadoScalarRelationFilter.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema.ts";
import { ParrafoScalarRelationFilterObjectSchema as ParrafoScalarRelationFilterObjectSchema } from "./ParrafoScalarRelationFilter.schema.ts";
import { ParrafoWhereInputObjectSchema as ParrafoWhereInputObjectSchema } from "./ParrafoWhereInput.schema.ts";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema.ts";

const marcadorwhereinputSchema = z
	.object({
		AND: z.union([z.lazy(() => MarcadorWhereInputObjectSchema), z.lazy(() => MarcadorWhereInputObjectSchema).array()]).optional(),
		OR: z
			.lazy(() => MarcadorWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => MarcadorWhereInputObjectSchema), z.lazy(() => MarcadorWhereInputObjectSchema).array()]).optional(),
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
		escritor: z.union([z.lazy(() => EscritorScalarRelationFilterObjectSchema), z.lazy(() => EscritorWhereInputObjectSchema)]).optional(),
		parrafo: z.union([z.lazy(() => ParrafoScalarRelationFilterObjectSchema), z.lazy(() => ParrafoWhereInputObjectSchema)]).optional(),
		estado: z.union([z.lazy(() => EstadoScalarRelationFilterObjectSchema), z.lazy(() => EstadoWhereInputObjectSchema)]).optional(),
	})
	.strict();
export const MarcadorWhereInputObjectSchema: z.ZodType<Prisma.MarcadorWhereInput> = marcadorwhereinputSchema as unknown as z.ZodType<Prisma.MarcadorWhereInput>;
export const MarcadorWhereInputObjectZodSchema = marcadorwhereinputSchema;
