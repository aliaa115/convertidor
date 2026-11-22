import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaFindManySchema as ListaFindManySchema } from "../findManyLista.schema.ts";
import { NotificacionFindManySchema as NotificacionFindManySchema } from "../findManyNotificacion.schema.ts";
import { ConfiguracionArgsObjectSchema as ConfiguracionArgsObjectSchema } from "./ConfiguracionArgs.schema.ts";
import { EscritorArgsObjectSchema as EscritorArgsObjectSchema } from "./EscritorArgs.schema.ts";
import { EstadoArgsObjectSchema as EstadoArgsObjectSchema } from "./EstadoArgs.schema.ts";
import { UsuarioCountOutputTypeArgsObjectSchema as UsuarioCountOutputTypeArgsObjectSchema } from "./UsuarioCountOutputTypeArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.boolean().optional(),
			userName: z.boolean().optional(),
			email: z.boolean().optional(),
			password: z.boolean().optional(),
			nivel: z.boolean().optional(),
			createdAt: z.boolean().optional(),
			updatedAt: z.boolean().optional(),
			estadoId: z.boolean().optional(),
			estado: z
				.union([z.boolean(), z.lazy(() => EstadoArgsObjectSchema)])
				.optional(),
			configuracion: z
				.union([z.boolean(), z.lazy(() => ConfiguracionArgsObjectSchema)])
				.optional(),
			escritor: z
				.union([z.boolean(), z.lazy(() => EscritorArgsObjectSchema)])
				.optional(),
			listas: z
				.union([z.boolean(), z.lazy(() => ListaFindManySchema)])
				.optional(),
			notificacions: z
				.union([z.boolean(), z.lazy(() => NotificacionFindManySchema)])
				.optional(),
			_count: z
				.union([
					z.boolean(),
					z.lazy(() => UsuarioCountOutputTypeArgsObjectSchema),
				])
				.optional(),
		})
		.strict();
export const UsuarioSelectObjectSchema: z.ZodType<Prisma.UsuarioSelect> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioSelect>;
export const UsuarioSelectObjectZodSchema = makeSchema();
