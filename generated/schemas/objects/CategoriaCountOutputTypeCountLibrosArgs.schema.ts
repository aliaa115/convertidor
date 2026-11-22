import * as z from "zod";
import { LibroCategoriaWhereInputObjectSchema as LibroCategoriaWhereInputObjectSchema } from "./LibroCategoriaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroCategoriaWhereInputObjectSchema).optional(),
		})
		.strict();
export const CategoriaCountOutputTypeCountLibrosArgsObjectSchema = makeSchema();
export const CategoriaCountOutputTypeCountLibrosArgsObjectZodSchema = makeSchema();
