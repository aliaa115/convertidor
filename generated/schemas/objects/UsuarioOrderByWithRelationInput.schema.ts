import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { ConfiguracionOrderByWithRelationInputObjectSchema as ConfiguracionOrderByWithRelationInputObjectSchema } from "./ConfiguracionOrderByWithRelationInput.schema.ts";
import { EscritorOrderByWithRelationInputObjectSchema as EscritorOrderByWithRelationInputObjectSchema } from "./EscritorOrderByWithRelationInput.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";
import { ListaOrderByRelationAggregateInputObjectSchema as ListaOrderByRelationAggregateInputObjectSchema } from "./ListaOrderByRelationAggregateInput.schema.ts";
import { NotificacionOrderByRelationAggregateInputObjectSchema as NotificacionOrderByRelationAggregateInputObjectSchema } from "./NotificacionOrderByRelationAggregateInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			userName: SortOrderSchema.optional(),
			email: SortOrderSchema.optional(),
			password: SortOrderSchema.optional(),
			nivel: SortOrderSchema.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			estado: z.lazy(() => EstadoOrderByWithRelationInputObjectSchema).optional(),
			configuracion: z.lazy(() => ConfiguracionOrderByWithRelationInputObjectSchema).optional(),
			escritor: z.lazy(() => EscritorOrderByWithRelationInputObjectSchema).optional(),
			listas: z.lazy(() => ListaOrderByRelationAggregateInputObjectSchema).optional(),
			notificacions: z.lazy(() => NotificacionOrderByRelationAggregateInputObjectSchema).optional(),
		})
		.strict();
export const UsuarioOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UsuarioOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioOrderByWithRelationInput>;
export const UsuarioOrderByWithRelationInputObjectZodSchema = makeSchema();
