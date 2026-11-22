import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";
import { LibroOrderByWithRelationInputObjectSchema as LibroOrderByWithRelationInputObjectSchema } from "./LibroOrderByWithRelationInput.schema.ts";
import { ListaOrderByWithRelationInputObjectSchema as ListaOrderByWithRelationInputObjectSchema } from "./ListaOrderByWithRelationInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			listaId: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			libroId: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			estadoId: SortOrderSchema.optional(),
			lista: z.lazy(() => ListaOrderByWithRelationInputObjectSchema).optional(),
			libro: z.lazy(() => LibroOrderByWithRelationInputObjectSchema).optional(),
			estado: z
				.lazy(() => EstadoOrderByWithRelationInputObjectSchema)
				.optional(),
		})
		.strict();
export const ListaLibroOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ListaLibroOrderByWithRelationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaLibroOrderByWithRelationInput>;
export const ListaLibroOrderByWithRelationInputObjectZodSchema = makeSchema();
