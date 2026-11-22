import * as z from "zod";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereInputObjectSchema).optional(),
		})
		.strict();
export const IdiomaCountOutputTypeCountLibrosArgsObjectSchema = makeSchema();
export const IdiomaCountOutputTypeCountLibrosArgsObjectZodSchema = makeSchema();
