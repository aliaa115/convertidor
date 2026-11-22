import * as z from "zod";
import { ConfiguracionWhereInputObjectSchema as ConfiguracionWhereInputObjectSchema } from "./ConfiguracionWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ConfiguracionWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountConfiguracionesArgsObjectSchema = makeSchema();
export const EstadoCountOutputTypeCountConfiguracionesArgsObjectZodSchema = makeSchema();
