import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoUncheckedUpdateWithoutComentariosInputObjectSchema as EstadoUncheckedUpdateWithoutComentariosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutComentariosInput.schema.ts";
import { EstadoUpdateWithoutComentariosInputObjectSchema as EstadoUpdateWithoutComentariosInputObjectSchema } from "./EstadoUpdateWithoutComentariosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => EstadoUpdateWithoutComentariosInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutComentariosInputObjectSchema),
			]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutComentariosInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutComentariosInput>;
export const EstadoUpdateToOneWithWhereWithoutComentariosInputObjectZodSchema =
	makeSchema();
