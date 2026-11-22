import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";
import { TipoOrderByWithRelationInputObjectSchema as TipoOrderByWithRelationInputObjectSchema } from "./TipoOrderByWithRelationInput.schema.ts";
import { UsuarioOrderByWithRelationInputObjectSchema as UsuarioOrderByWithRelationInputObjectSchema } from "./UsuarioOrderByWithRelationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			valor: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			usuarioId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			tipoId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
			estadoId: SortOrderSchema.optional(),
			usuario: z.lazy(() => UsuarioOrderByWithRelationInputObjectSchema).optional(),
			tipo: z.lazy(() => TipoOrderByWithRelationInputObjectSchema).optional(),
			estado: z.lazy(() => EstadoOrderByWithRelationInputObjectSchema).optional(),
		})
		.strict();
export const ConfiguracionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ConfiguracionOrderByWithRelationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionOrderByWithRelationInput>;
export const ConfiguracionOrderByWithRelationInputObjectZodSchema = makeSchema();
