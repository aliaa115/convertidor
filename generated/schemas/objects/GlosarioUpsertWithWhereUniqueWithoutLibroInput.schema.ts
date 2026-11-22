import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { GlosarioCreateWithoutLibroInputObjectSchema as GlosarioCreateWithoutLibroInputObjectSchema } from "./GlosarioCreateWithoutLibroInput.schema.ts";
import { GlosarioUncheckedCreateWithoutLibroInputObjectSchema as GlosarioUncheckedCreateWithoutLibroInputObjectSchema } from "./GlosarioUncheckedCreateWithoutLibroInput.schema.ts";
import { GlosarioUncheckedUpdateWithoutLibroInputObjectSchema as GlosarioUncheckedUpdateWithoutLibroInputObjectSchema } from "./GlosarioUncheckedUpdateWithoutLibroInput.schema.ts";
import { GlosarioUpdateWithoutLibroInputObjectSchema as GlosarioUpdateWithoutLibroInputObjectSchema } from "./GlosarioUpdateWithoutLibroInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./GlosarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => GlosarioWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => GlosarioUpdateWithoutLibroInputObjectSchema),
				z.lazy(() => GlosarioUncheckedUpdateWithoutLibroInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => GlosarioCreateWithoutLibroInputObjectSchema),
				z.lazy(() => GlosarioUncheckedCreateWithoutLibroInputObjectSchema),
			]),
		})
		.strict();
export const GlosarioUpsertWithWhereUniqueWithoutLibroInputObjectSchema: z.ZodType<Prisma.GlosarioUpsertWithWhereUniqueWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioUpsertWithWhereUniqueWithoutLibroInput>;
export const GlosarioUpsertWithWhereUniqueWithoutLibroInputObjectZodSchema =
	makeSchema();
