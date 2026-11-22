import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { IdiomaWhereInputObjectSchema as IdiomaWhereInputObjectSchema } from "./IdiomaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => IdiomaWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountIdiomaArgsObjectSchema = makeSchema();
export const EstadoCountOutputTypeCountIdiomaArgsObjectZodSchema = makeSchema();
