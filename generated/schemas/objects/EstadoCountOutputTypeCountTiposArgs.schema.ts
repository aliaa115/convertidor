import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./TipoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => TipoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountTiposArgsObjectSchema = makeSchema();
export const EstadoCountOutputTypeCountTiposArgsObjectZodSchema = makeSchema();
