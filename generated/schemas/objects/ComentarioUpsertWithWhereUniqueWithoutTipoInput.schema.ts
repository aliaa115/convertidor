import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateWithoutTipoInputObjectSchema as ComentarioCreateWithoutTipoInputObjectSchema } from "./ComentarioCreateWithoutTipoInput.schema.ts";
import { ComentarioUncheckedCreateWithoutTipoInputObjectSchema as ComentarioUncheckedCreateWithoutTipoInputObjectSchema } from "./ComentarioUncheckedCreateWithoutTipoInput.schema.ts";
import { ComentarioUncheckedUpdateWithoutTipoInputObjectSchema as ComentarioUncheckedUpdateWithoutTipoInputObjectSchema } from "./ComentarioUncheckedUpdateWithoutTipoInput.schema.ts";
import { ComentarioUpdateWithoutTipoInputObjectSchema as ComentarioUpdateWithoutTipoInputObjectSchema } from "./ComentarioUpdateWithoutTipoInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => ComentarioUpdateWithoutTipoInputObjectSchema), z.lazy(() => ComentarioUncheckedUpdateWithoutTipoInputObjectSchema)]),
			create: z.union([z.lazy(() => ComentarioCreateWithoutTipoInputObjectSchema), z.lazy(() => ComentarioUncheckedCreateWithoutTipoInputObjectSchema)]),
		})
		.strict();
export const ComentarioUpsertWithWhereUniqueWithoutTipoInputObjectSchema: z.ZodType<Prisma.ComentarioUpsertWithWhereUniqueWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpsertWithWhereUniqueWithoutTipoInput>;
export const ComentarioUpsertWithWhereUniqueWithoutTipoInputObjectZodSchema = makeSchema();
