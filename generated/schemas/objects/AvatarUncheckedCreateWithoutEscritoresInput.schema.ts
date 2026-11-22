import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			nombre: z.string(),
			url: z.string(),
		})
		.strict();
export const AvatarUncheckedCreateWithoutEscritoresInputObjectSchema: z.ZodType<Prisma.AvatarUncheckedCreateWithoutEscritoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.AvatarUncheckedCreateWithoutEscritoresInput>;
export const AvatarUncheckedCreateWithoutEscritoresInputObjectZodSchema =
	makeSchema();
