import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string(),
			url: z.string(),
		})
		.strict();
export const AvatarCreateManyInputObjectSchema: z.ZodType<Prisma.AvatarCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AvatarCreateManyInput>;
export const AvatarCreateManyInputObjectZodSchema = makeSchema();
