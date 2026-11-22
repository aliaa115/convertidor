import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { AvatarWhereInputObjectSchema as AvatarWhereInputObjectSchema } from "./objects/AvatarWhereInput.schema.ts";

export const AvatarDeleteManySchema: z.ZodType<Prisma.AvatarDeleteManyArgs> = z
	.object({ where: AvatarWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.AvatarDeleteManyArgs>;

export const AvatarDeleteManyZodSchema = z.object({ where: AvatarWhereInputObjectSchema.optional() }).strict();
