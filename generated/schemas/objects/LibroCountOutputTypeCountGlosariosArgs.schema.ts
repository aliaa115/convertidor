import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { GlosarioWhereInputObjectSchema as GlosarioWhereInputObjectSchema } from "./GlosarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => GlosarioWhereInputObjectSchema).optional(),
		})
		.strict();
export const LibroCountOutputTypeCountGlosariosArgsObjectSchema = makeSchema();
export const LibroCountOutputTypeCountGlosariosArgsObjectZodSchema =
	makeSchema();
