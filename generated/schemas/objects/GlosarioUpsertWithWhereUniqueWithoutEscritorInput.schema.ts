import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { GlosarioCreateWithoutEscritorInputObjectSchema as GlosarioCreateWithoutEscritorInputObjectSchema } from "./GlosarioCreateWithoutEscritorInput.schema.ts";
import { GlosarioUncheckedCreateWithoutEscritorInputObjectSchema as GlosarioUncheckedCreateWithoutEscritorInputObjectSchema } from "./GlosarioUncheckedCreateWithoutEscritorInput.schema.ts";
import { GlosarioUncheckedUpdateWithoutEscritorInputObjectSchema as GlosarioUncheckedUpdateWithoutEscritorInputObjectSchema } from "./GlosarioUncheckedUpdateWithoutEscritorInput.schema.ts";
import { GlosarioUpdateWithoutEscritorInputObjectSchema as GlosarioUpdateWithoutEscritorInputObjectSchema } from "./GlosarioUpdateWithoutEscritorInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./GlosarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => GlosarioWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => GlosarioUpdateWithoutEscritorInputObjectSchema),
				z.lazy(() => GlosarioUncheckedUpdateWithoutEscritorInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => GlosarioCreateWithoutEscritorInputObjectSchema),
				z.lazy(() => GlosarioUncheckedCreateWithoutEscritorInputObjectSchema),
			]),
		})
		.strict();
export const GlosarioUpsertWithWhereUniqueWithoutEscritorInputObjectSchema: z.ZodType<Prisma.GlosarioUpsertWithWhereUniqueWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioUpsertWithWhereUniqueWithoutEscritorInput>;
export const GlosarioUpsertWithWhereUniqueWithoutEscritorInputObjectZodSchema =
	makeSchema();
