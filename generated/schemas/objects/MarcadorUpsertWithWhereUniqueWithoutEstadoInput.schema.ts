import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { MarcadorCreateWithoutEstadoInputObjectSchema as MarcadorCreateWithoutEstadoInputObjectSchema } from "./MarcadorCreateWithoutEstadoInput.schema.ts";
import { MarcadorUncheckedCreateWithoutEstadoInputObjectSchema as MarcadorUncheckedCreateWithoutEstadoInputObjectSchema } from "./MarcadorUncheckedCreateWithoutEstadoInput.schema.ts";
import { MarcadorUncheckedUpdateWithoutEstadoInputObjectSchema as MarcadorUncheckedUpdateWithoutEstadoInputObjectSchema } from "./MarcadorUncheckedUpdateWithoutEstadoInput.schema.ts";
import { MarcadorUpdateWithoutEstadoInputObjectSchema as MarcadorUpdateWithoutEstadoInputObjectSchema } from "./MarcadorUpdateWithoutEstadoInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./MarcadorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => MarcadorWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => MarcadorUpdateWithoutEstadoInputObjectSchema),
				z.lazy(() => MarcadorUncheckedUpdateWithoutEstadoInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => MarcadorCreateWithoutEstadoInputObjectSchema),
				z.lazy(() => MarcadorUncheckedCreateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const MarcadorUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.MarcadorUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorUpsertWithWhereUniqueWithoutEstadoInput>;
export const MarcadorUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
