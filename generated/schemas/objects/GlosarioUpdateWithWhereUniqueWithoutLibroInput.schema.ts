import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { GlosarioUncheckedUpdateWithoutLibroInputObjectSchema as GlosarioUncheckedUpdateWithoutLibroInputObjectSchema } from "./GlosarioUncheckedUpdateWithoutLibroInput.schema.ts";
import { GlosarioUpdateWithoutLibroInputObjectSchema as GlosarioUpdateWithoutLibroInputObjectSchema } from "./GlosarioUpdateWithoutLibroInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./GlosarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => GlosarioWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => GlosarioUpdateWithoutLibroInputObjectSchema),
				z.lazy(() => GlosarioUncheckedUpdateWithoutLibroInputObjectSchema),
			]),
		})
		.strict();
export const GlosarioUpdateWithWhereUniqueWithoutLibroInputObjectSchema: z.ZodType<Prisma.GlosarioUpdateWithWhereUniqueWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioUpdateWithWhereUniqueWithoutLibroInput>;
export const GlosarioUpdateWithWhereUniqueWithoutLibroInputObjectZodSchema =
	makeSchema();
