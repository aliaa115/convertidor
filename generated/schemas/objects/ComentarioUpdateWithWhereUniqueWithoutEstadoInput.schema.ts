import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioUncheckedUpdateWithoutEstadoInputObjectSchema as ComentarioUncheckedUpdateWithoutEstadoInputObjectSchema } from "./ComentarioUncheckedUpdateWithoutEstadoInput.schema.ts";
import { ComentarioUpdateWithoutEstadoInputObjectSchema as ComentarioUpdateWithoutEstadoInputObjectSchema } from "./ComentarioUpdateWithoutEstadoInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => ComentarioUpdateWithoutEstadoInputObjectSchema),
				z.lazy(() => ComentarioUncheckedUpdateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const ComentarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateWithWhereUniqueWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateWithWhereUniqueWithoutEstadoInput>;
export const ComentarioUpdateWithWhereUniqueWithoutEstadoInputObjectZodSchema =
	makeSchema();
