import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { GlosarioCreateWithoutEstadoInputObjectSchema as GlosarioCreateWithoutEstadoInputObjectSchema } from "./GlosarioCreateWithoutEstadoInput.schema.ts";
import { GlosarioUncheckedCreateWithoutEstadoInputObjectSchema as GlosarioUncheckedCreateWithoutEstadoInputObjectSchema } from "./GlosarioUncheckedCreateWithoutEstadoInput.schema.ts";
import { GlosarioUncheckedUpdateWithoutEstadoInputObjectSchema as GlosarioUncheckedUpdateWithoutEstadoInputObjectSchema } from "./GlosarioUncheckedUpdateWithoutEstadoInput.schema.ts";
import { GlosarioUpdateWithoutEstadoInputObjectSchema as GlosarioUpdateWithoutEstadoInputObjectSchema } from "./GlosarioUpdateWithoutEstadoInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./GlosarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => GlosarioWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => GlosarioUpdateWithoutEstadoInputObjectSchema),
				z.lazy(() => GlosarioUncheckedUpdateWithoutEstadoInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => GlosarioCreateWithoutEstadoInputObjectSchema),
				z.lazy(() => GlosarioUncheckedCreateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const GlosarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.GlosarioUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioUpsertWithWhereUniqueWithoutEstadoInput>;
export const GlosarioUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
