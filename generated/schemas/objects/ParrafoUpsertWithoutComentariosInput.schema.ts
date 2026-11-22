import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ParrafoCreateWithoutComentariosInputObjectSchema as ParrafoCreateWithoutComentariosInputObjectSchema } from "./ParrafoCreateWithoutComentariosInput.schema.ts";
import { ParrafoUncheckedCreateWithoutComentariosInputObjectSchema as ParrafoUncheckedCreateWithoutComentariosInputObjectSchema } from "./ParrafoUncheckedCreateWithoutComentariosInput.schema.ts";
import { ParrafoUncheckedUpdateWithoutComentariosInputObjectSchema as ParrafoUncheckedUpdateWithoutComentariosInputObjectSchema } from "./ParrafoUncheckedUpdateWithoutComentariosInput.schema.ts";
import { ParrafoUpdateWithoutComentariosInputObjectSchema as ParrafoUpdateWithoutComentariosInputObjectSchema } from "./ParrafoUpdateWithoutComentariosInput.schema.ts";
import { ParrafoWhereInputObjectSchema as ParrafoWhereInputObjectSchema } from "./ParrafoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => ParrafoUpdateWithoutComentariosInputObjectSchema),
				z.lazy(() => ParrafoUncheckedUpdateWithoutComentariosInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => ParrafoCreateWithoutComentariosInputObjectSchema),
				z.lazy(() => ParrafoUncheckedCreateWithoutComentariosInputObjectSchema),
			]),
			where: z.lazy(() => ParrafoWhereInputObjectSchema).optional(),
		})
		.strict();
export const ParrafoUpsertWithoutComentariosInputObjectSchema: z.ZodType<Prisma.ParrafoUpsertWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUpsertWithoutComentariosInput>;
export const ParrafoUpsertWithoutComentariosInputObjectZodSchema = makeSchema();
