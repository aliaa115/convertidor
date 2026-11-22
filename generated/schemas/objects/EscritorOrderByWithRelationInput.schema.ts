import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SortOrderSchema } from "../enums/SortOrder.schema.ts";
import { AvatarOrderByWithRelationInputObjectSchema as AvatarOrderByWithRelationInputObjectSchema } from "./AvatarOrderByWithRelationInput.schema.ts";
import { ComentarioOrderByRelationAggregateInputObjectSchema as ComentarioOrderByRelationAggregateInputObjectSchema } from "./ComentarioOrderByRelationAggregateInput.schema.ts";
import { EstadoOrderByWithRelationInputObjectSchema as EstadoOrderByWithRelationInputObjectSchema } from "./EstadoOrderByWithRelationInput.schema.ts";
import { FavoritoOrderByRelationAggregateInputObjectSchema as FavoritoOrderByRelationAggregateInputObjectSchema } from "./FavoritoOrderByRelationAggregateInput.schema.ts";
import { GlosarioOrderByRelationAggregateInputObjectSchema as GlosarioOrderByRelationAggregateInputObjectSchema } from "./GlosarioOrderByRelationAggregateInput.schema.ts";
import { LibroOrderByRelationAggregateInputObjectSchema as LibroOrderByRelationAggregateInputObjectSchema } from "./LibroOrderByRelationAggregateInput.schema.ts";
import { MarcadorOrderByRelationAggregateInputObjectSchema as MarcadorOrderByRelationAggregateInputObjectSchema } from "./MarcadorOrderByRelationAggregateInput.schema.ts";
import { NotaAutorOrderByRelationAggregateInputObjectSchema as NotaAutorOrderByRelationAggregateInputObjectSchema } from "./NotaAutorOrderByRelationAggregateInput.schema.ts";
import { SeguirUsuarioOrderByRelationAggregateInputObjectSchema as SeguirUsuarioOrderByRelationAggregateInputObjectSchema } from "./SeguirUsuarioOrderByRelationAggregateInput.schema.ts";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema.ts";
import { UsuarioOrderByWithRelationInputObjectSchema as UsuarioOrderByWithRelationInputObjectSchema } from "./UsuarioOrderByWithRelationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: SortOrderSchema.optional(),
			nombres: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			apellidos: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			alias: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			descripcion: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			fechaNacimiento: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			createdAt: SortOrderSchema.optional(),
			updatedAt: SortOrderSchema.optional(),
			usuarioId: z
				.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
				.optional(),
			avatarId: SortOrderSchema.optional(),
			estadoId: SortOrderSchema.optional(),
			usuario: z
				.lazy(() => UsuarioOrderByWithRelationInputObjectSchema)
				.optional(),
			avatar: z
				.lazy(() => AvatarOrderByWithRelationInputObjectSchema)
				.optional(),
			estado: z
				.lazy(() => EstadoOrderByWithRelationInputObjectSchema)
				.optional(),
			libros: z
				.lazy(() => LibroOrderByRelationAggregateInputObjectSchema)
				.optional(),
			comentarios: z
				.lazy(() => ComentarioOrderByRelationAggregateInputObjectSchema)
				.optional(),
			favoritos: z
				.lazy(() => FavoritoOrderByRelationAggregateInputObjectSchema)
				.optional(),
			glosarios: z
				.lazy(() => GlosarioOrderByRelationAggregateInputObjectSchema)
				.optional(),
			notasAutor: z
				.lazy(() => NotaAutorOrderByRelationAggregateInputObjectSchema)
				.optional(),
			marcadores: z
				.lazy(() => MarcadorOrderByRelationAggregateInputObjectSchema)
				.optional(),
			seguidores: z
				.lazy(() => SeguirUsuarioOrderByRelationAggregateInputObjectSchema)
				.optional(),
			siguiendo: z
				.lazy(() => SeguirUsuarioOrderByRelationAggregateInputObjectSchema)
				.optional(),
		})
		.strict();
export const EscritorOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EscritorOrderByWithRelationInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorOrderByWithRelationInput>;
export const EscritorOrderByWithRelationInputObjectZodSchema = makeSchema();
