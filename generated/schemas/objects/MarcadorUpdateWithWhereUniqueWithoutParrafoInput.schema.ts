import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { MarcadorUncheckedUpdateWithoutParrafoInputObjectSchema as MarcadorUncheckedUpdateWithoutParrafoInputObjectSchema } from "./MarcadorUncheckedUpdateWithoutParrafoInput.schema.ts";
import { MarcadorUpdateWithoutParrafoInputObjectSchema as MarcadorUpdateWithoutParrafoInputObjectSchema } from "./MarcadorUpdateWithoutParrafoInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./MarcadorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => MarcadorWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => MarcadorUpdateWithoutParrafoInputObjectSchema),
				z.lazy(() => MarcadorUncheckedUpdateWithoutParrafoInputObjectSchema),
			]),
		})
		.strict();
export const MarcadorUpdateWithWhereUniqueWithoutParrafoInputObjectSchema: z.ZodType<Prisma.MarcadorUpdateWithWhereUniqueWithoutParrafoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorUpdateWithWhereUniqueWithoutParrafoInput>;
export const MarcadorUpdateWithWhereUniqueWithoutParrafoInputObjectZodSchema =
	makeSchema();
