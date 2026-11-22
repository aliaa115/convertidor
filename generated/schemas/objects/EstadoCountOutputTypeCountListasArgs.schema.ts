import * as z from "zod";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./ListaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountListasArgsObjectSchema = makeSchema();
export const EstadoCountOutputTypeCountListasArgsObjectZodSchema = makeSchema();
