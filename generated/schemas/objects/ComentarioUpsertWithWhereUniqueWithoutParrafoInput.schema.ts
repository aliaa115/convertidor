import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateWithoutParrafoInputObjectSchema as ComentarioCreateWithoutParrafoInputObjectSchema } from "./ComentarioCreateWithoutParrafoInput.schema.ts";
import { ComentarioUncheckedCreateWithoutParrafoInputObjectSchema as ComentarioUncheckedCreateWithoutParrafoInputObjectSchema } from "./ComentarioUncheckedCreateWithoutParrafoInput.schema.ts";
import { ComentarioUncheckedUpdateWithoutParrafoInputObjectSchema as ComentarioUncheckedUpdateWithoutParrafoInputObjectSchema } from "./ComentarioUncheckedUpdateWithoutParrafoInput.schema.ts";
import { ComentarioUpdateWithoutParrafoInputObjectSchema as ComentarioUpdateWithoutParrafoInputObjectSchema } from "./ComentarioUpdateWithoutParrafoInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => ComentarioUpdateWithoutParrafoInputObjectSchema),
				z.lazy(() => ComentarioUncheckedUpdateWithoutParrafoInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => ComentarioCreateWithoutParrafoInputObjectSchema),
				z.lazy(() => ComentarioUncheckedCreateWithoutParrafoInputObjectSchema),
			]),
		})
		.strict();
export const ComentarioUpsertWithWhereUniqueWithoutParrafoInputObjectSchema: z.ZodType<Prisma.ComentarioUpsertWithWhereUniqueWithoutParrafoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpsertWithWhereUniqueWithoutParrafoInput>;
export const ComentarioUpsertWithWhereUniqueWithoutParrafoInputObjectZodSchema =
	makeSchema();
