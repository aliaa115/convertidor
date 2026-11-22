import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutComentariosInputObjectSchema as EstadoCreateWithoutComentariosInputObjectSchema } from "./EstadoCreateWithoutComentariosInput.schema.ts";
import { EstadoUncheckedCreateWithoutComentariosInputObjectSchema as EstadoUncheckedCreateWithoutComentariosInputObjectSchema } from "./EstadoUncheckedCreateWithoutComentariosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutComentariosInputObjectSchema as EstadoUncheckedUpdateWithoutComentariosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutComentariosInput.schema.ts";
import { EstadoUpdateWithoutComentariosInputObjectSchema as EstadoUpdateWithoutComentariosInputObjectSchema } from "./EstadoUpdateWithoutComentariosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EstadoUpdateWithoutComentariosInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutComentariosInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutComentariosInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutComentariosInputObjectSchema),
			]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutComentariosInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutComentariosInput>;
export const EstadoUpsertWithoutComentariosInputObjectZodSchema = makeSchema();
