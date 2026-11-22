import * as z from "zod";
import { IdiomaWhereInputObjectSchema as IdiomaWhereInputObjectSchema } from "./IdiomaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => IdiomaWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountIdiomaArgsObjectSchema = makeSchema();
export const EstadoCountOutputTypeCountIdiomaArgsObjectZodSchema = makeSchema();
