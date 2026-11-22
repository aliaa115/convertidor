import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaLibroWhereInputObjectSchema as ListaLibroWhereInputObjectSchema } from "./ListaLibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ListaLibroWhereInputObjectSchema).optional(),
		})
		.strict();
export const ListaCountOutputTypeCountLibrosArgsObjectSchema = makeSchema();
export const ListaCountOutputTypeCountLibrosArgsObjectZodSchema = makeSchema();
