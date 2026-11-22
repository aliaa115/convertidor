import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./ListaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountListasArgsObjectSchema = makeSchema();
export const EstadoCountOutputTypeCountListasArgsObjectZodSchema = makeSchema();
