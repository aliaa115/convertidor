import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ConfiguracionWhereInputObjectSchema as ConfiguracionWhereInputObjectSchema } from "./ConfiguracionWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ConfiguracionWhereInputObjectSchema).optional(),
		})
		.strict();
export const TipoCountOutputTypeCountConfiguracionesArgsObjectSchema =
	makeSchema();
export const TipoCountOutputTypeCountConfiguracionesArgsObjectZodSchema =
	makeSchema();
