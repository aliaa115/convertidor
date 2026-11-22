import * as z from "zod";
import { GlosarioWhereInputObjectSchema as GlosarioWhereInputObjectSchema } from "./GlosarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => GlosarioWhereInputObjectSchema).optional(),
		})
		.strict();
export const EscritorCountOutputTypeCountGlosariosArgsObjectSchema = makeSchema();
export const EscritorCountOutputTypeCountGlosariosArgsObjectZodSchema = makeSchema();
