import * as z from "zod";
import { MarcadorWhereInputObjectSchema as MarcadorWhereInputObjectSchema } from "./MarcadorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => MarcadorWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountMarcadoresArgsObjectSchema = makeSchema();
export const EstadoCountOutputTypeCountMarcadoresArgsObjectZodSchema = makeSchema();
