import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateOrConnectWithoutComentariosInputObjectSchema as EscritorCreateOrConnectWithoutComentariosInputObjectSchema } from "./EscritorCreateOrConnectWithoutComentariosInput.schema.ts";
import { EscritorCreateWithoutComentariosInputObjectSchema as EscritorCreateWithoutComentariosInputObjectSchema } from "./EscritorCreateWithoutComentariosInput.schema.ts";
import { EscritorUncheckedCreateWithoutComentariosInputObjectSchema as EscritorUncheckedCreateWithoutComentariosInputObjectSchema } from "./EscritorUncheckedCreateWithoutComentariosInput.schema.ts";
import { EscritorUncheckedUpdateWithoutComentariosInputObjectSchema as EscritorUncheckedUpdateWithoutComentariosInputObjectSchema } from "./EscritorUncheckedUpdateWithoutComentariosInput.schema.ts";
import { EscritorUpdateToOneWithWhereWithoutComentariosInputObjectSchema as EscritorUpdateToOneWithWhereWithoutComentariosInputObjectSchema } from "./EscritorUpdateToOneWithWhereWithoutComentariosInput.schema.ts";
import { EscritorUpdateWithoutComentariosInputObjectSchema as EscritorUpdateWithoutComentariosInputObjectSchema } from "./EscritorUpdateWithoutComentariosInput.schema.ts";
import { EscritorUpsertWithoutComentariosInputObjectSchema as EscritorUpsertWithoutComentariosInputObjectSchema } from "./EscritorUpsertWithoutComentariosInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EscritorCreateWithoutComentariosInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutComentariosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EscritorCreateOrConnectWithoutComentariosInputObjectSchema).optional(),
			upsert: z.lazy(() => EscritorUpsertWithoutComentariosInputObjectSchema).optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => EscritorUpdateToOneWithWhereWithoutComentariosInputObjectSchema),
					z.lazy(() => EscritorUpdateWithoutComentariosInputObjectSchema),
					z.lazy(() => EscritorUncheckedUpdateWithoutComentariosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EscritorUpdateOneRequiredWithoutComentariosNestedInputObjectSchema: z.ZodType<Prisma.EscritorUpdateOneRequiredWithoutComentariosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateOneRequiredWithoutComentariosNestedInput>;
export const EscritorUpdateOneRequiredWithoutComentariosNestedInputObjectZodSchema = makeSchema();
