import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";
import { ListaLibroOrderByRelationAggregateInputObjectSchema as ListaLibroOrderByRelationAggregateInputObjectSchema } from "./ListaLibroOrderByRelationAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";
import { UsuarioOrderByWithRelationInputObjectSchema as UsuarioOrderByWithRelationInputObjectSchema } from "./UsuarioOrderByWithRelationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombre: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			privada: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			usuarioId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			estadoId: SortOrderSchema.optional(),
			usuario: z.lazy(() => UsuarioOrderByWithRelationInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoOrderByWithRelationInputObjectSchema).optional(),
			libros: z.lazy(() => ListaLibroOrderByRelationAggregateInputObjectSchema).optional(),
		})
		.strict();
export const ListaOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ListaOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaOrderByWithRelationInput>;
export const ListaOrderByWithRelationInputObjectZodSchema = makeSchema();
