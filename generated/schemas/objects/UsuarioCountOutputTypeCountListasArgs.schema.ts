import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./ListaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaWhereInputObjectSchema).optional(),
		})
		.strict();
export const UsuarioCountOutputTypeCountListasArgsObjectSchema = makeSchema();
export const UsuarioCountOutputTypeCountListasArgsObjectZodSchema =
	makeSchema();
