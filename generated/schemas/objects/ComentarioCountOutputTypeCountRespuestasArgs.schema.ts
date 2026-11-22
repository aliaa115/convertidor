import * as z from "zod";
import { ComentarioWhereInputObjectSchema as ComentarioWhereInputObjectSchema } from "./ComentarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereInputObjectSchema).optional(),
		})
		.strict();
export const ComentarioCountOutputTypeCountRespuestasArgsObjectSchema = makeSchema();
export const ComentarioCountOutputTypeCountRespuestasArgsObjectZodSchema = makeSchema();
