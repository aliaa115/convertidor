import * as z from "zod";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./TipoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => TipoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountTiposArgsObjectSchema = makeSchema();
export const EstadoCountOutputTypeCountTiposArgsObjectZodSchema = makeSchema();
