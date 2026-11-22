import * as z from "zod";
import { SeguirUsuarioWhereInputObjectSchema as SeguirUsuarioWhereInputObjectSchema } from "./SeguirUsuarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => SeguirUsuarioWhereInputObjectSchema).optional(),
		})
		.strict();
export const EscritorCountOutputTypeCountSeguidoresArgsObjectSchema = makeSchema();
export const EscritorCountOutputTypeCountSeguidoresArgsObjectZodSchema = makeSchema();
