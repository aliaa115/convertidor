import * as z from "zod";
import { LibroEtiquetaWhereInputObjectSchema as LibroEtiquetaWhereInputObjectSchema } from "./LibroEtiquetaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroEtiquetaWhereInputObjectSchema).optional(),
		})
		.strict();
export const LibroCountOutputTypeCountEtiquetasArgsObjectSchema = makeSchema();
export const LibroCountOutputTypeCountEtiquetasArgsObjectZodSchema = makeSchema();
