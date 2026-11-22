import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { GlosarioUncheckedUpdateWithoutEscritorInputObjectSchema as GlosarioUncheckedUpdateWithoutEscritorInputObjectSchema } from "./GlosarioUncheckedUpdateWithoutEscritorInput.schema.ts";
import { GlosarioUpdateWithoutEscritorInputObjectSchema as GlosarioUpdateWithoutEscritorInputObjectSchema } from "./GlosarioUpdateWithoutEscritorInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./GlosarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => GlosarioWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => GlosarioUpdateWithoutEscritorInputObjectSchema), z.lazy(() => GlosarioUncheckedUpdateWithoutEscritorInputObjectSchema)]),
		})
		.strict();
export const GlosarioUpdateWithWhereUniqueWithoutEscritorInputObjectSchema: z.ZodType<Prisma.GlosarioUpdateWithWhereUniqueWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioUpdateWithWhereUniqueWithoutEscritorInput>;
export const GlosarioUpdateWithWhereUniqueWithoutEscritorInputObjectZodSchema = makeSchema();
