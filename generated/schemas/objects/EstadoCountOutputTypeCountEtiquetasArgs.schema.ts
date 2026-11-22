import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EtiquetaWhereInputObjectSchema as EtiquetaWhereInputObjectSchema } from "./EtiquetaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EtiquetaWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountEtiquetasArgsObjectSchema = makeSchema();
export const EstadoCountOutputTypeCountEtiquetasArgsObjectZodSchema =
	makeSchema();
