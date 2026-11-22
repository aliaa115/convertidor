import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioWhereInputObjectSchema as ComentarioWhereInputObjectSchema } from "./ComentarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereInputObjectSchema).optional(),
		})
		.strict();
export const EscritorCountOutputTypeCountComentariosArgsObjectSchema =
	makeSchema();
export const EscritorCountOutputTypeCountComentariosArgsObjectZodSchema =
	makeSchema();
