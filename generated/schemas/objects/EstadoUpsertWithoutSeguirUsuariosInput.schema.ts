import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutSeguirUsuariosInputObjectSchema as EstadoCreateWithoutSeguirUsuariosInputObjectSchema } from "./EstadoCreateWithoutSeguirUsuariosInput.schema.ts";
import { EstadoUncheckedCreateWithoutSeguirUsuariosInputObjectSchema as EstadoUncheckedCreateWithoutSeguirUsuariosInputObjectSchema } from "./EstadoUncheckedCreateWithoutSeguirUsuariosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutSeguirUsuariosInputObjectSchema as EstadoUncheckedUpdateWithoutSeguirUsuariosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutSeguirUsuariosInput.schema.ts";
import { EstadoUpdateWithoutSeguirUsuariosInputObjectSchema as EstadoUpdateWithoutSeguirUsuariosInputObjectSchema } from "./EstadoUpdateWithoutSeguirUsuariosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EstadoUpdateWithoutSeguirUsuariosInputObjectSchema),
				z.lazy(
					() => EstadoUncheckedUpdateWithoutSeguirUsuariosInputObjectSchema,
				),
			]),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutSeguirUsuariosInputObjectSchema),
				z.lazy(
					() => EstadoUncheckedCreateWithoutSeguirUsuariosInputObjectSchema,
				),
			]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutSeguirUsuariosInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutSeguirUsuariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutSeguirUsuariosInput>;
export const EstadoUpsertWithoutSeguirUsuariosInputObjectZodSchema =
	makeSchema();
