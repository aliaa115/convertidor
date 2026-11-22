import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { TipoCountOutputTypeCountComentariosArgsObjectSchema as TipoCountOutputTypeCountComentariosArgsObjectSchema } from "./TipoCountOutputTypeCountComentariosArgs.schema.ts";
import { TipoCountOutputTypeCountConfiguracionesArgsObjectSchema as TipoCountOutputTypeCountConfiguracionesArgsObjectSchema } from "./TipoCountOutputTypeCountConfiguracionesArgs.schema.ts";
import { TipoCountOutputTypeCountLibrosArgsObjectSchema as TipoCountOutputTypeCountLibrosArgsObjectSchema } from "./TipoCountOutputTypeCountLibrosArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			configuraciones: z
				.union([
					z.boolean(),
					z.lazy(() => TipoCountOutputTypeCountConfiguracionesArgsObjectSchema),
				])
				.optional(),
			libros: z
				.union([
					z.boolean(),
					z.lazy(() => TipoCountOutputTypeCountLibrosArgsObjectSchema),
				])
				.optional(),
			comentarios: z
				.union([
					z.boolean(),
					z.lazy(() => TipoCountOutputTypeCountComentariosArgsObjectSchema),
				])
				.optional(),
		})
		.strict();
export const TipoCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TipoCountOutputTypeSelect> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoCountOutputTypeSelect>;
export const TipoCountOutputTypeSelectObjectZodSchema = makeSchema();
