import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { TipoCreateWithoutEstadoInputObjectSchema as TipoCreateWithoutEstadoInputObjectSchema } from "./TipoCreateWithoutEstadoInput.schema.ts";
import { TipoUncheckedCreateWithoutEstadoInputObjectSchema as TipoUncheckedCreateWithoutEstadoInputObjectSchema } from "./TipoUncheckedCreateWithoutEstadoInput.schema.ts";
import { TipoUncheckedUpdateWithoutEstadoInputObjectSchema as TipoUncheckedUpdateWithoutEstadoInputObjectSchema } from "./TipoUncheckedUpdateWithoutEstadoInput.schema.ts";
import { TipoUpdateWithoutEstadoInputObjectSchema as TipoUpdateWithoutEstadoInputObjectSchema } from "./TipoUpdateWithoutEstadoInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./TipoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => TipoWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => TipoUpdateWithoutEstadoInputObjectSchema),
				z.lazy(() => TipoUncheckedUpdateWithoutEstadoInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => TipoCreateWithoutEstadoInputObjectSchema),
				z.lazy(() => TipoUncheckedCreateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const TipoUpsertWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.TipoUpsertWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUpsertWithWhereUniqueWithoutEstadoInput>;
export const TipoUpsertWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
