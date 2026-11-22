import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { AvatarUpdateManyMutationInputObjectSchema as AvatarUpdateManyMutationInputObjectSchema } from "./objects/AvatarUpdateManyMutationInput.schema.ts";
import { AvatarWhereInputObjectSchema as AvatarWhereInputObjectSchema } from "./objects/AvatarWhereInput.schema.ts";

export const AvatarUpdateManySchema: z.ZodType<Prisma.AvatarUpdateManyArgs> = z
	.object({
		data: AvatarUpdateManyMutationInputObjectSchema,
		where: AvatarWhereInputObjectSchema.optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.AvatarUpdateManyArgs>;

export const AvatarUpdateManyZodSchema = z
	.object({
		data: AvatarUpdateManyMutationInputObjectSchema,
		where: AvatarWhereInputObjectSchema.optional(),
	})
	.strict();
