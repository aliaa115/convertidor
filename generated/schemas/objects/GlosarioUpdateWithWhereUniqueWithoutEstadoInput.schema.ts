import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { GlosarioUncheckedUpdateWithoutEstadoInputObjectSchema as GlosarioUncheckedUpdateWithoutEstadoInputObjectSchema } from "./GlosarioUncheckedUpdateWithoutEstadoInput.schema.ts";
import { GlosarioUpdateWithoutEstadoInputObjectSchema as GlosarioUpdateWithoutEstadoInputObjectSchema } from "./GlosarioUpdateWithoutEstadoInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./GlosarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => GlosarioWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => GlosarioUpdateWithoutEstadoInputObjectSchema), z.lazy(() => GlosarioUncheckedUpdateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const GlosarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.GlosarioUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioUpdateWithWhereUniqueWithoutEstadoInput>;
export const GlosarioUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema = makeSchema();
