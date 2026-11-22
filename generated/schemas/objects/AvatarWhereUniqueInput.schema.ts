import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string().optional(),
		})
		.strict();
export const AvatarWhereUniqueInputObjectSchema: z.ZodType<Prisma.AvatarWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AvatarWhereUniqueInput>;
export const AvatarWhereUniqueInputObjectZodSchema = makeSchema();
