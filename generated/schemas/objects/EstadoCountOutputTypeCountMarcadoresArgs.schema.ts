import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { MarcadorWhereInputObjectSchema as MarcadorWhereInputObjectSchema } from "./MarcadorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => MarcadorWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountMarcadoresArgsObjectSchema =
	makeSchema();
export const EstadoCountOutputTypeCountMarcadoresArgsObjectZodSchema =
	makeSchema();
