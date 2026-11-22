import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioUncheckedUpdateWithoutRespuestasInputObjectSchema as ComentarioUncheckedUpdateWithoutRespuestasInputObjectSchema } from "./ComentarioUncheckedUpdateWithoutRespuestasInput.schema.ts";
import { ComentarioUpdateWithoutRespuestasInputObjectSchema as ComentarioUpdateWithoutRespuestasInputObjectSchema } from "./ComentarioUpdateWithoutRespuestasInput.schema.ts";
import { ComentarioWhereInputObjectSchema as ComentarioWhereInputObjectSchema } from "./ComentarioWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => ComentarioUpdateWithoutRespuestasInputObjectSchema),
				z.lazy(
					() => ComentarioUncheckedUpdateWithoutRespuestasInputObjectSchema,
				),
			]),
		})
		.strict();
export const ComentarioUpdateToOneWithWhereWithoutRespuestasInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateToOneWithWhereWithoutRespuestasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateToOneWithWhereWithoutRespuestasInput>;
export const ComentarioUpdateToOneWithWhereWithoutRespuestasInputObjectZodSchema =
	makeSchema();
