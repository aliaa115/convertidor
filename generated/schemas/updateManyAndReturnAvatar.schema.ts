import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { AvatarSelectObjectSchema as AvatarSelectObjectSchema } from "./objects/AvatarSelect.schema.ts";
import { AvatarUpdateManyMutationInputObjectSchema as AvatarUpdateManyMutationInputObjectSchema } from "./objects/AvatarUpdateManyMutationInput.schema.ts";
import { AvatarWhereInputObjectSchema as AvatarWhereInputObjectSchema } from "./objects/AvatarWhereInput.schema.ts";

export const AvatarUpdateManyAndReturnSchema: z.ZodType<Prisma.AvatarUpdateManyAndReturnArgs> =
	z
		.object({
			select: AvatarSelectObjectSchema.optional(),
			data: AvatarUpdateManyMutationInputObjectSchema,
			where: AvatarWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.AvatarUpdateManyAndReturnArgs>;

export const AvatarUpdateManyAndReturnZodSchema = z
	.object({
		select: AvatarSelectObjectSchema.optional(),
		data: AvatarUpdateManyMutationInputObjectSchema,
		where: AvatarWhereInputObjectSchema.optional(),
	})
	.strict();
