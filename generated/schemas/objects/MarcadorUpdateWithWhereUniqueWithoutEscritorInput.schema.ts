import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { MarcadorUncheckedUpdateWithoutEscritorInputObjectSchema as MarcadorUncheckedUpdateWithoutEscritorInputObjectSchema } from "./MarcadorUncheckedUpdateWithoutEscritorInput.schema.ts";
import { MarcadorUpdateWithoutEscritorInputObjectSchema as MarcadorUpdateWithoutEscritorInputObjectSchema } from "./MarcadorUpdateWithoutEscritorInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./MarcadorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => MarcadorWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => MarcadorUpdateWithoutEscritorInputObjectSchema),
				z.lazy(() => MarcadorUncheckedUpdateWithoutEscritorInputObjectSchema),
			]),
		})
		.strict();
export const MarcadorUpdateWithWhereUniqueWithoutEscritorInputObjectSchema: z.ZodType<Prisma.MarcadorUpdateWithWhereUniqueWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorUpdateWithWhereUniqueWithoutEscritorInput>;
export const MarcadorUpdateWithWhereUniqueWithoutEscritorInputObjectZodSchema =
	makeSchema();
