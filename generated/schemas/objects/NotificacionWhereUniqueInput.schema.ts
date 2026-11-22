import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
		})
		.strict();
export const NotificacionWhereUniqueInputObjectSchema: z.ZodType<Prisma.NotificacionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificacionWhereUniqueInput>;
export const NotificacionWhereUniqueInputObjectZodSchema = makeSchema();
