import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { EscritorOrderByWithRelationInputObjectSchema as EscritorOrderByWithRelationInputObjectSchema } from "./EscritorOrderByWithRelationInput.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			escritorId: SortOrderSchema.optional(),
			escritorSeguidoId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			escritor: z
				.lazy(() => EscritorOrderByWithRelationInputObjectSchema)
				.optional(),
			seguido: z
				.lazy(() => EscritorOrderByWithRelationInputObjectSchema)
				.optional(),
			estado: z
				.lazy(() => EstadoOrderByWithRelationInputObjectSchema)
				.optional(),
		})
		.strict();
export const SeguirUsuarioOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioOrderByWithRelationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioOrderByWithRelationInput>;
export const SeguirUsuarioOrderByWithRelationInputObjectZodSchema =
	makeSchema();
