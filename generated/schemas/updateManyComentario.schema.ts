import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { ComentarioUpdateManyMutationInputObjectSchema as ComentarioUpdateManyMutationInputObjectSchema } from "./objects/ComentarioUpdateManyMutationInput.schema.ts";
import { ComentarioWhereInputObjectSchema as ComentarioWhereInputObjectSchema } from "./objects/ComentarioWhereInput.schema.ts";

export const ComentarioUpdateManySchema: z.ZodType<Prisma.ComentarioUpdateManyArgs> = z
	.object({ data: ComentarioUpdateManyMutationInputObjectSchema, where: ComentarioWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.ComentarioUpdateManyArgs>;

export const ComentarioUpdateManyZodSchema = z.object({ data: ComentarioUpdateManyMutationInputObjectSchema, where: ComentarioWhereInputObjectSchema.optional() }).strict();
