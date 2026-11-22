import * as z from "zod";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./CapituloWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CapituloWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountCapitulosArgsObjectSchema = makeSchema();
export const EstadoCountOutputTypeCountCapitulosArgsObjectZodSchema = makeSchema();
