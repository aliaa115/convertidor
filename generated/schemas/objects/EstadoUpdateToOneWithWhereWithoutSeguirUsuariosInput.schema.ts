import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoUncheckedUpdateWithoutSeguirUsuariosInputObjectSchema as EstadoUncheckedUpdateWithoutSeguirUsuariosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutSeguirUsuariosInput.schema.ts";
import { EstadoUpdateWithoutSeguirUsuariosInputObjectSchema as EstadoUpdateWithoutSeguirUsuariosInputObjectSchema } from "./EstadoUpdateWithoutSeguirUsuariosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => EstadoUpdateWithoutSeguirUsuariosInputObjectSchema),
				z.lazy(
					() => EstadoUncheckedUpdateWithoutSeguirUsuariosInputObjectSchema,
				),
			]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutSeguirUsuariosInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutSeguirUsuariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutSeguirUsuariosInput>;
export const EstadoUpdateToOneWithWhereWithoutSeguirUsuariosInputObjectZodSchema =
	makeSchema();
