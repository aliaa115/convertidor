import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateWithoutEstadoInputObjectSchema as ComentarioCreateWithoutEstadoInputObjectSchema } from "./ComentarioCreateWithoutEstadoInput.schema.ts";
import { ComentarioUncheckedCreateWithoutEstadoInputObjectSchema as ComentarioUncheckedCreateWithoutEstadoInputObjectSchema } from "./ComentarioUncheckedCreateWithoutEstadoInput.schema.ts";
import { ComentarioUncheckedUpdateWithoutEstadoInputObjectSchema as ComentarioUncheckedUpdateWithoutEstadoInputObjectSchema } from "./ComentarioUncheckedUpdateWithoutEstadoInput.schema.ts";
import { ComentarioUpdateWithoutEstadoInputObjectSchema as ComentarioUpdateWithoutEstadoInputObjectSchema } from "./ComentarioUpdateWithoutEstadoInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => ComentarioUpdateWithoutEstadoInputObjectSchema), z.lazy(() => ComentarioUncheckedUpdateWithoutEstadoInputObjectSchema)]),
			create: z.union([z.lazy(() => ComentarioCreateWithoutEstadoInputObjectSchema), z.lazy(() => ComentarioUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const ComentarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ComentarioUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpsertWithWhereUniqueWithoutEstadoInput>;
export const ComentarioUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
