import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorUncheckedUpdateWithoutComentariosInputObjectSchema as EscritorUncheckedUpdateWithoutComentariosInputObjectSchema } from "./EscritorUncheckedUpdateWithoutComentariosInput.schema.ts";
import { EscritorUpdateWithoutComentariosInputObjectSchema as EscritorUpdateWithoutComentariosInputObjectSchema } from "./EscritorUpdateWithoutComentariosInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => EscritorUpdateWithoutComentariosInputObjectSchema),
				z.lazy(
					() => EscritorUncheckedUpdateWithoutComentariosInputObjectSchema,
				),
			]),
		})
		.strict();
export const EscritorUpdateToOneWithWhereWithoutComentariosInputObjectSchema: z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateToOneWithWhereWithoutComentariosInput>;
export const EscritorUpdateToOneWithWhereWithoutComentariosInputObjectZodSchema =
	makeSchema();
