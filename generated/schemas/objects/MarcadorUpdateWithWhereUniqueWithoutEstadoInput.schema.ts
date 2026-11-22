import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { MarcadorUncheckedUpdateWithoutEstadoInputObjectSchema as MarcadorUncheckedUpdateWithoutEstadoInputObjectSchema } from "./MarcadorUncheckedUpdateWithoutEstadoInput.schema.ts";
import { MarcadorUpdateWithoutEstadoInputObjectSchema as MarcadorUpdateWithoutEstadoInputObjectSchema } from "./MarcadorUpdateWithoutEstadoInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./MarcadorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => MarcadorWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => MarcadorUpdateWithoutEstadoInputObjectSchema),
				z.lazy(() => MarcadorUncheckedUpdateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const MarcadorUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.MarcadorUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorUpdateWithWhereUniqueWithoutEstadoInput>;
export const MarcadorUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
