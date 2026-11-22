import * as z from "zod";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./ListaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaWhereInputObjectSchema).optional(),
		})
		.strict();
export const UsuarioCountOutputTypeCountListasArgsObjectSchema = makeSchema();
export const UsuarioCountOutputTypeCountListasArgsObjectZodSchema = makeSchema();
