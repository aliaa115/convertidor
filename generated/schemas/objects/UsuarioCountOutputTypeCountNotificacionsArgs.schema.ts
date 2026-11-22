import * as z from "zod";
import { NotificacionWhereInputObjectSchema as NotificacionWhereInputObjectSchema } from "./NotificacionWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotificacionWhereInputObjectSchema).optional(),
		})
		.strict();
export const UsuarioCountOutputTypeCountNotificacionsArgsObjectSchema = makeSchema();
export const UsuarioCountOutputTypeCountNotificacionsArgsObjectZodSchema = makeSchema();
