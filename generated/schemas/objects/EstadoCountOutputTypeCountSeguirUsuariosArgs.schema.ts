import * as z from "zod";
import { SeguirUsuarioWhereInputObjectSchema as SeguirUsuarioWhereInputObjectSchema } from "./SeguirUsuarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => SeguirUsuarioWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCountOutputTypeCountSeguirUsuariosArgsObjectSchema = makeSchema();
export const EstadoCountOutputTypeCountSeguirUsuariosArgsObjectZodSchema = makeSchema();
