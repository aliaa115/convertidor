import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountEscritoresArgsObjectSchema =
	makeSchema();
export const EstadoCountOutputTypeCountEscritoresArgsObjectZodSchema =
	makeSchema();
