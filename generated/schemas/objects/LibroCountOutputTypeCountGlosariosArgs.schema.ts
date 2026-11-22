import * as z from "zod";
import { GlosarioWhereInputObjectSchema as GlosarioWhereInputObjectSchema } from "./GlosarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => GlosarioWhereInputObjectSchema).optional(),
		})
		.strict();
export const LibroCountOutputTypeCountGlosariosArgsObjectSchema = makeSchema();
export const LibroCountOutputTypeCountGlosariosArgsObjectZodSchema = makeSchema();
