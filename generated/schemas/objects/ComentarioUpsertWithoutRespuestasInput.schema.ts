import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateWithoutRespuestasInputObjectSchema as ComentarioCreateWithoutRespuestasInputObjectSchema } from "./ComentarioCreateWithoutRespuestasInput.schema.ts";
import { ComentarioUncheckedCreateWithoutRespuestasInputObjectSchema as ComentarioUncheckedCreateWithoutRespuestasInputObjectSchema } from "./ComentarioUncheckedCreateWithoutRespuestasInput.schema.ts";
import { ComentarioUncheckedUpdateWithoutRespuestasInputObjectSchema as ComentarioUncheckedUpdateWithoutRespuestasInputObjectSchema } from "./ComentarioUncheckedUpdateWithoutRespuestasInput.schema.ts";
import { ComentarioUpdateWithoutRespuestasInputObjectSchema as ComentarioUpdateWithoutRespuestasInputObjectSchema } from "./ComentarioUpdateWithoutRespuestasInput.schema.ts";
import { ComentarioWhereInputObjectSchema as ComentarioWhereInputObjectSchema } from "./ComentarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => ComentarioUpdateWithoutRespuestasInputObjectSchema), z.lazy(() => ComentarioUncheckedUpdateWithoutRespuestasInputObjectSchema)]),
			create: z.union([z.lazy(() => ComentarioCreateWithoutRespuestasInputObjectSchema), z.lazy(() => ComentarioUncheckedCreateWithoutRespuestasInputObjectSchema)]),
			where: z.lazy(() => ComentarioWhereInputObjectSchema).optional(),
		})
		.strict();
export const ComentarioUpsertWithoutRespuestasInputObjectSchema: z.ZodType<Prisma.ComentarioUpsertWithoutRespuestasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpsertWithoutRespuestasInput>;
export const ComentarioUpsertWithoutRespuestasInputObjectZodSchema = makeSchema();
