import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioUncheckedUpdateWithoutEscritorInputObjectSchema as ComentarioUncheckedUpdateWithoutEscritorInputObjectSchema } from "./ComentarioUncheckedUpdateWithoutEscritorInput.schema.ts";
import { ComentarioUpdateWithoutEscritorInputObjectSchema as ComentarioUpdateWithoutEscritorInputObjectSchema } from "./ComentarioUpdateWithoutEscritorInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => ComentarioUpdateWithoutEscritorInputObjectSchema),
				z.lazy(() => ComentarioUncheckedUpdateWithoutEscritorInputObjectSchema),
			]),
		})
		.strict();
export const ComentarioUpdateWithWhereUniqueWithoutEscritorInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateWithWhereUniqueWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateWithWhereUniqueWithoutEscritorInput>;
export const ComentarioUpdateWithWhereUniqueWithoutEscritorInputObjectZodSchema =
	makeSchema();
