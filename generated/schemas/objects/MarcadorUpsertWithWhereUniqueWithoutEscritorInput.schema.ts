import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { MarcadorCreateWithoutEscritorInputObjectSchema as MarcadorCreateWithoutEscritorInputObjectSchema } from "./MarcadorCreateWithoutEscritorInput.schema.ts";
import { MarcadorUncheckedCreateWithoutEscritorInputObjectSchema as MarcadorUncheckedCreateWithoutEscritorInputObjectSchema } from "./MarcadorUncheckedCreateWithoutEscritorInput.schema.ts";
import { MarcadorUncheckedUpdateWithoutEscritorInputObjectSchema as MarcadorUncheckedUpdateWithoutEscritorInputObjectSchema } from "./MarcadorUncheckedUpdateWithoutEscritorInput.schema.ts";
import { MarcadorUpdateWithoutEscritorInputObjectSchema as MarcadorUpdateWithoutEscritorInputObjectSchema } from "./MarcadorUpdateWithoutEscritorInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./MarcadorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => MarcadorWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => MarcadorUpdateWithoutEscritorInputObjectSchema), z.lazy(() => MarcadorUncheckedUpdateWithoutEscritorInputObjectSchema)]),
			create: z.union([z.lazy(() => MarcadorCreateWithoutEscritorInputObjectSchema), z.lazy(() => MarcadorUncheckedCreateWithoutEscritorInputObjectSchema)]),
		})
		.strict();
export const MarcadorUpsertWithWhereUniqueWithoutEscritorInputObjectSchema: z.ZodType<Prisma.MarcadorUpsertWithWhereUniqueWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorUpsertWithWhereUniqueWithoutEscritorInput>;
export const MarcadorUpsertWithWhereUniqueWithoutEscritorInputObjectZodSchema = makeSchema();
