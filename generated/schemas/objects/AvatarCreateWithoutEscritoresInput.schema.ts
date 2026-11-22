import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			nombre: z.string(),
			url: z.string(),
		})
		.strict();
export const AvatarCreateWithoutEscritoresInputObjectSchema: z.ZodType<Prisma.AvatarCreateWithoutEscritoresInput> = makeSchema() as unknown as z.ZodType<Prisma.AvatarCreateWithoutEscritoresInput>;
export const AvatarCreateWithoutEscritoresInputObjectZodSchema = makeSchema();
