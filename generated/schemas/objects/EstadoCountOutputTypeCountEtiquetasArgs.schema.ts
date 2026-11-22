import * as z from "zod";
import { EtiquetaWhereInputObjectSchema as EtiquetaWhereInputObjectSchema } from "./EtiquetaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EtiquetaWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountEtiquetasArgsObjectSchema = makeSchema();
export const EstadoCountOutputTypeCountEtiquetasArgsObjectZodSchema = makeSchema();
