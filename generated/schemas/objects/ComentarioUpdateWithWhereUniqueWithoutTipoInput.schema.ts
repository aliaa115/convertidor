import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioUncheckedUpdateWithoutTipoInputObjectSchema as ComentarioUncheckedUpdateWithoutTipoInputObjectSchema } from "./ComentarioUncheckedUpdateWithoutTipoInput.schema.ts";
import { ComentarioUpdateWithoutTipoInputObjectSchema as ComentarioUpdateWithoutTipoInputObjectSchema } from "./ComentarioUpdateWithoutTipoInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => ComentarioUpdateWithoutTipoInputObjectSchema), z.lazy(() => ComentarioUncheckedUpdateWithoutTipoInputObjectSchema)]),
		})
		.strict();
export const ComentarioUpdateWithWhereUniqueWithoutTipoInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateWithWhereUniqueWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateWithWhereUniqueWithoutTipoInput>;
export const ComentarioUpdateWithWhereUniqueWithoutTipoInputObjectZodSchema = makeSchema();
