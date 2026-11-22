import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ComentarioWhereInputObjectSchema as ComentarioWhereInputObjectSchema } from "./objects/ComentarioWhereInput.schema.ts";

export const ComentarioDeleteManySchema: z.ZodType<Prisma.ComentarioDeleteManyArgs> = z
	.object({ where: ComentarioWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.ComentarioDeleteManyArgs>;

export const ComentarioDeleteManyZodSchema = z.object({ where: ComentarioWhereInputObjectSchema.optional() }).strict();
