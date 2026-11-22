import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { MarcadorSelectObjectSchema as MarcadorSelectObjectSchema } from "./objects/MarcadorSelect.schema.ts";
import { MarcadorUpdateManyMutationInputObjectSchema as MarcadorUpdateManyMutationInputObjectSchema } from "./objects/MarcadorUpdateManyMutationInput.schema.ts";
import { MarcadorWhereInputObjectSchema as MarcadorWhereInputObjectSchema } from "./objects/MarcadorWhereInput.schema.ts";

export const MarcadorUpdateManyAndReturnSchema: z.ZodType<Prisma.MarcadorUpdateManyAndReturnArgs> = z
	.object({ select: MarcadorSelectObjectSchema.optional(), data: MarcadorUpdateManyMutationInputObjectSchema, where: MarcadorWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.MarcadorUpdateManyAndReturnArgs>;

export const MarcadorUpdateManyAndReturnZodSchema = z
	.object({ select: MarcadorSelectObjectSchema.optional(), data: MarcadorUpdateManyMutationInputObjectSchema, where: MarcadorWhereInputObjectSchema.optional() })
	.strict();
