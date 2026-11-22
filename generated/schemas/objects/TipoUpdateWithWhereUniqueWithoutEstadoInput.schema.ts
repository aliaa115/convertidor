import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { TipoUncheckedUpdateWithoutEstadoInputObjectSchema as TipoUncheckedUpdateWithoutEstadoInputObjectSchema } from "./TipoUncheckedUpdateWithoutEstadoInput.schema.ts";
import { TipoUpdateWithoutEstadoInputObjectSchema as TipoUpdateWithoutEstadoInputObjectSchema } from "./TipoUpdateWithoutEstadoInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./TipoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => TipoWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => TipoUpdateWithoutEstadoInputObjectSchema),
				z.lazy(() => TipoUncheckedUpdateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const TipoUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.TipoUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUpdateWithWhereUniqueWithoutEstadoInput>;
export const TipoUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
