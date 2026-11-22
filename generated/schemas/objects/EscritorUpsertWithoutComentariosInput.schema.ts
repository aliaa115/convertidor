import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateWithoutComentariosInputObjectSchema as EscritorCreateWithoutComentariosInputObjectSchema } from "./EscritorCreateWithoutComentariosInput.schema.ts";
import { EscritorUncheckedCreateWithoutComentariosInputObjectSchema as EscritorUncheckedCreateWithoutComentariosInputObjectSchema } from "./EscritorUncheckedCreateWithoutComentariosInput.schema.ts";
import { EscritorUncheckedUpdateWithoutComentariosInputObjectSchema as EscritorUncheckedUpdateWithoutComentariosInputObjectSchema } from "./EscritorUncheckedUpdateWithoutComentariosInput.schema.ts";
import { EscritorUpdateWithoutComentariosInputObjectSchema as EscritorUpdateWithoutComentariosInputObjectSchema } from "./EscritorUpdateWithoutComentariosInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EscritorUpdateWithoutComentariosInputObjectSchema),
				z.lazy(
					() => EscritorUncheckedUpdateWithoutComentariosInputObjectSchema,
				),
			]),
			create: z.union([
				z.lazy(() => EscritorCreateWithoutComentariosInputObjectSchema),
				z.lazy(
					() => EscritorUncheckedCreateWithoutComentariosInputObjectSchema,
				),
			]),
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
		})
		.strict();
export const EscritorUpsertWithoutComentariosInputObjectSchema: z.ZodType<Prisma.EscritorUpsertWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpsertWithoutComentariosInput>;
export const EscritorUpsertWithoutComentariosInputObjectZodSchema =
	makeSchema();
