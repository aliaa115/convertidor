import * as z from "zod";
import { ListaLibroWhereInputObjectSchema as ListaLibroWhereInputObjectSchema } from "./ListaLibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaLibroWhereInputObjectSchema).optional(),
		})
		.strict();
export const LibroCountOutputTypeCountListaLibrosArgsObjectSchema = makeSchema();
export const LibroCountOutputTypeCountListaLibrosArgsObjectZodSchema = makeSchema();
