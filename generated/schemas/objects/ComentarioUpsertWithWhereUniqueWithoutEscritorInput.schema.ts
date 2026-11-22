import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateWithoutEscritorInputObjectSchema as ComentarioCreateWithoutEscritorInputObjectSchema } from "./ComentarioCreateWithoutEscritorInput.schema.ts";
import { ComentarioUncheckedCreateWithoutEscritorInputObjectSchema as ComentarioUncheckedCreateWithoutEscritorInputObjectSchema } from "./ComentarioUncheckedCreateWithoutEscritorInput.schema.ts";
import { ComentarioUncheckedUpdateWithoutEscritorInputObjectSchema as ComentarioUncheckedUpdateWithoutEscritorInputObjectSchema } from "./ComentarioUncheckedUpdateWithoutEscritorInput.schema.ts";
import { ComentarioUpdateWithoutEscritorInputObjectSchema as ComentarioUpdateWithoutEscritorInputObjectSchema } from "./ComentarioUpdateWithoutEscritorInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => ComentarioUpdateWithoutEscritorInputObjectSchema),
				z.lazy(() => ComentarioUncheckedUpdateWithoutEscritorInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => ComentarioCreateWithoutEscritorInputObjectSchema),
				z.lazy(() => ComentarioUncheckedCreateWithoutEscritorInputObjectSchema),
			]),
		})
		.strict();
export const ComentarioUpsertWithWhereUniqueWithoutEscritorInputObjectSchema: z.ZodType<Prisma.ComentarioUpsertWithWhereUniqueWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpsertWithWhereUniqueWithoutEscritorInput>;
export const ComentarioUpsertWithWhereUniqueWithoutEscritorInputObjectZodSchema =
	makeSchema();
