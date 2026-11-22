import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateWithoutPadreInputObjectSchema as ComentarioCreateWithoutPadreInputObjectSchema } from "./ComentarioCreateWithoutPadreInput.schema.ts";
import { ComentarioUncheckedCreateWithoutPadreInputObjectSchema as ComentarioUncheckedCreateWithoutPadreInputObjectSchema } from "./ComentarioUncheckedCreateWithoutPadreInput.schema.ts";
import { ComentarioUncheckedUpdateWithoutPadreInputObjectSchema as ComentarioUncheckedUpdateWithoutPadreInputObjectSchema } from "./ComentarioUncheckedUpdateWithoutPadreInput.schema.ts";
import { ComentarioUpdateWithoutPadreInputObjectSchema as ComentarioUpdateWithoutPadreInputObjectSchema } from "./ComentarioUpdateWithoutPadreInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => ComentarioUpdateWithoutPadreInputObjectSchema),
				z.lazy(() => ComentarioUncheckedUpdateWithoutPadreInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => ComentarioCreateWithoutPadreInputObjectSchema),
				z.lazy(() => ComentarioUncheckedCreateWithoutPadreInputObjectSchema),
			]),
		})
		.strict();
export const ComentarioUpsertWithWhereUniqueWithoutPadreInputObjectSchema: z.ZodType<Prisma.ComentarioUpsertWithWhereUniqueWithoutPadreInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpsertWithWhereUniqueWithoutPadreInput>;
export const ComentarioUpsertWithWhereUniqueWithoutPadreInputObjectZodSchema =
	makeSchema();
