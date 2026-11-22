import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCountOutputTypeCountRespuestasArgsObjectSchema as ComentarioCountOutputTypeCountRespuestasArgsObjectSchema } from "./ComentarioCountOutputTypeCountRespuestasArgs.schema.ts";

const makeSchema = () =>
	z
		.object({
			respuestas: z
				.union([
					z.boolean(),
					z.lazy(
						() => ComentarioCountOutputTypeCountRespuestasArgsObjectSchema,
					),
				])
				.optional(),
		})
		.strict();
export const ComentarioCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ComentarioCountOutputTypeSelect> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCountOutputTypeSelect>;
export const ComentarioCountOutputTypeSelectObjectZodSchema = makeSchema();
