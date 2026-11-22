import * as z from "zod";
import { MarcadorWhereInputObjectSchema as MarcadorWhereInputObjectSchema } from "./MarcadorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => MarcadorWhereInputObjectSchema).optional(),
		})
		.strict();
export const EscritorCountOutputTypeCountMarcadoresArgsObjectSchema = makeSchema();
export const EscritorCountOutputTypeCountMarcadoresArgsObjectZodSchema = makeSchema();
