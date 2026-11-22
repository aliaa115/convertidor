import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ParrafoCreateOrConnectWithoutComentariosInputObjectSchema as ParrafoCreateOrConnectWithoutComentariosInputObjectSchema } from "./ParrafoCreateOrConnectWithoutComentariosInput.schema.ts";
import { ParrafoCreateWithoutComentariosInputObjectSchema as ParrafoCreateWithoutComentariosInputObjectSchema } from "./ParrafoCreateWithoutComentariosInput.schema.ts";
import { ParrafoUncheckedCreateWithoutComentariosInputObjectSchema as ParrafoUncheckedCreateWithoutComentariosInputObjectSchema } from "./ParrafoUncheckedCreateWithoutComentariosInput.schema.ts";
import { ParrafoUncheckedUpdateWithoutComentariosInputObjectSchema as ParrafoUncheckedUpdateWithoutComentariosInputObjectSchema } from "./ParrafoUncheckedUpdateWithoutComentariosInput.schema.ts";
import { ParrafoUpdateToOneWithWhereWithoutComentariosInputObjectSchema as ParrafoUpdateToOneWithWhereWithoutComentariosInputObjectSchema } from "./ParrafoUpdateToOneWithWhereWithoutComentariosInput.schema.ts";
import { ParrafoUpdateWithoutComentariosInputObjectSchema as ParrafoUpdateWithoutComentariosInputObjectSchema } from "./ParrafoUpdateWithoutComentariosInput.schema.ts";
import { ParrafoUpsertWithoutComentariosInputObjectSchema as ParrafoUpsertWithoutComentariosInputObjectSchema } from "./ParrafoUpsertWithoutComentariosInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./ParrafoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => ParrafoCreateWithoutComentariosInputObjectSchema), z.lazy(() => ParrafoUncheckedCreateWithoutComentariosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => ParrafoCreateOrConnectWithoutComentariosInputObjectSchema).optional(),
			upsert: z.lazy(() => ParrafoUpsertWithoutComentariosInputObjectSchema).optional(),
			connect: z.lazy(() => ParrafoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => ParrafoUpdateToOneWithWhereWithoutComentariosInputObjectSchema),
					z.lazy(() => ParrafoUpdateWithoutComentariosInputObjectSchema),
					z.lazy(() => ParrafoUncheckedUpdateWithoutComentariosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const ParrafoUpdateOneRequiredWithoutComentariosNestedInputObjectSchema: z.ZodType<Prisma.ParrafoUpdateOneRequiredWithoutComentariosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUpdateOneRequiredWithoutComentariosNestedInput>;
export const ParrafoUpdateOneRequiredWithoutComentariosNestedInputObjectZodSchema = makeSchema();
