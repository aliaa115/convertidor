import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioUncheckedUpdateWithoutParrafoInputObjectSchema as ComentarioUncheckedUpdateWithoutParrafoInputObjectSchema } from "./ComentarioUncheckedUpdateWithoutParrafoInput.schema.ts";
import { ComentarioUpdateWithoutParrafoInputObjectSchema as ComentarioUpdateWithoutParrafoInputObjectSchema } from "./ComentarioUpdateWithoutParrafoInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => ComentarioUpdateWithoutParrafoInputObjectSchema), z.lazy(() => ComentarioUncheckedUpdateWithoutParrafoInputObjectSchema)]),
		})
		.strict();
export const ComentarioUpdateWithWhereUniqueWithoutParrafoInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateWithWhereUniqueWithoutParrafoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateWithWhereUniqueWithoutParrafoInput>;
export const ComentarioUpdateWithWhereUniqueWithoutParrafoInputObjectZodSchema = makeSchema();
