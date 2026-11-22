import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioUncheckedUpdateWithoutPadreInputObjectSchema as ComentarioUncheckedUpdateWithoutPadreInputObjectSchema } from "./ComentarioUncheckedUpdateWithoutPadreInput.schema.ts";
import { ComentarioUpdateWithoutPadreInputObjectSchema as ComentarioUpdateWithoutPadreInputObjectSchema } from "./ComentarioUpdateWithoutPadreInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => ComentarioUpdateWithoutPadreInputObjectSchema), z.lazy(() => ComentarioUncheckedUpdateWithoutPadreInputObjectSchema)]),
		})
		.strict();
export const ComentarioUpdateWithWhereUniqueWithoutPadreInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateWithWhereUniqueWithoutPadreInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateWithWhereUniqueWithoutPadreInput>;
export const ComentarioUpdateWithWhereUniqueWithoutPadreInputObjectZodSchema = makeSchema();
