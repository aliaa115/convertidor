import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { EscritorOrderByWithRelationInputObjectSchema as EscritorOrderByWithRelationInputObjectSchema } from "./EscritorOrderByWithRelationInput.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";
import { ParrafoOrderByWithRelationInputObjectSchema as ParrafoOrderByWithRelationInputObjectSchema } from "./ParrafoOrderByWithRelationInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			color: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			parrafoId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			escritor: z
				.lazy(() => EscritorOrderByWithRelationInputObjectSchema)
				.optional(),
			parrafo: z
				.lazy(() => ParrafoOrderByWithRelationInputObjectSchema)
				.optional(),
			estado: z
				.lazy(() => EstadoOrderByWithRelationInputObjectSchema)
				.optional(),
		})
		.strict();
export const MarcadorOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MarcadorOrderByWithRelationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorOrderByWithRelationInput>;
export const MarcadorOrderByWithRelationInputObjectZodSchema = makeSchema();
