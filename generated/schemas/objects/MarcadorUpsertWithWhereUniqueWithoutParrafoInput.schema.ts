import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { MarcadorCreateWithoutParrafoInputObjectSchema as MarcadorCreateWithoutParrafoInputObjectSchema } from "./MarcadorCreateWithoutParrafoInput.schema.ts";
import { MarcadorUncheckedCreateWithoutParrafoInputObjectSchema as MarcadorUncheckedCreateWithoutParrafoInputObjectSchema } from "./MarcadorUncheckedCreateWithoutParrafoInput.schema.ts";
import { MarcadorUncheckedUpdateWithoutParrafoInputObjectSchema as MarcadorUncheckedUpdateWithoutParrafoInputObjectSchema } from "./MarcadorUncheckedUpdateWithoutParrafoInput.schema.ts";
import { MarcadorUpdateWithoutParrafoInputObjectSchema as MarcadorUpdateWithoutParrafoInputObjectSchema } from "./MarcadorUpdateWithoutParrafoInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./MarcadorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => MarcadorWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => MarcadorUpdateWithoutParrafoInputObjectSchema), z.lazy(() => MarcadorUncheckedUpdateWithoutParrafoInputObjectSchema)]),
			create: z.union([z.lazy(() => MarcadorCreateWithoutParrafoInputObjectSchema), z.lazy(() => MarcadorUncheckedCreateWithoutParrafoInputObjectSchema)]),
		})
		.strict();
export const MarcadorUpsertWithWhereUniqueWithoutParrafoInputObjectSchema: z.ZodType<Prisma.MarcadorUpsertWithWhereUniqueWithoutParrafoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorUpsertWithWhereUniqueWithoutParrafoInput>;
export const MarcadorUpsertWithWhereUniqueWithoutParrafoInputObjectZodSchema = makeSchema();
