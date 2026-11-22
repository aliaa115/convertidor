import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutComentariosInputObjectSchema as EstadoCreateOrConnectWithoutComentariosInputObjectSchema } from "./EstadoCreateOrConnectWithoutComentariosInput.schema.ts";
import { EstadoCreateWithoutComentariosInputObjectSchema as EstadoCreateWithoutComentariosInputObjectSchema } from "./EstadoCreateWithoutComentariosInput.schema.ts";
import { EstadoUncheckedCreateWithoutComentariosInputObjectSchema as EstadoUncheckedCreateWithoutComentariosInputObjectSchema } from "./EstadoUncheckedCreateWithoutComentariosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutComentariosInputObjectSchema as EstadoUncheckedUpdateWithoutComentariosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutComentariosInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutComentariosInputObjectSchema as EstadoUpdateToOneWithWhereWithoutComentariosInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutComentariosInput.schema.ts";
import { EstadoUpdateWithoutComentariosInputObjectSchema as EstadoUpdateWithoutComentariosInputObjectSchema } from "./EstadoUpdateWithoutComentariosInput.schema.ts";
import { EstadoUpsertWithoutComentariosInputObjectSchema as EstadoUpsertWithoutComentariosInputObjectSchema } from "./EstadoUpsertWithoutComentariosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutComentariosInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutComentariosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutComentariosInputObjectSchema).optional(),
			upsert: z.lazy(() => EstadoUpsertWithoutComentariosInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => EstadoUpdateToOneWithWhereWithoutComentariosInputObjectSchema),
					z.lazy(() => EstadoUpdateWithoutComentariosInputObjectSchema),
					z.lazy(() => EstadoUncheckedUpdateWithoutComentariosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutComentariosNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutComentariosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutComentariosNestedInput>;
export const EstadoUpdateOneRequiredWithoutComentariosNestedInputObjectZodSchema = makeSchema();
