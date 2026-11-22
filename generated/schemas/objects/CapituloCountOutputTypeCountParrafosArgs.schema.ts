import * as z from "zod";
import { ParrafoWhereInputObjectSchema as ParrafoWhereInputObjectSchema } from "./ParrafoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ParrafoWhereInputObjectSchema).optional(),
		})
		.strict();
export const CapituloCountOutputTypeCountParrafosArgsObjectSchema = makeSchema();
export const CapituloCountOutputTypeCountParrafosArgsObjectZodSchema = makeSchema();
