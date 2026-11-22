import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountLibrosArgsObjectSchema = makeSchema();
export const EstadoCountOutputTypeCountLibrosArgsObjectZodSchema = makeSchema();
