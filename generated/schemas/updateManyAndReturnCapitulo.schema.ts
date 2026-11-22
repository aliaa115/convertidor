import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { CapituloSelectObjectSchema as CapituloSelectObjectSchema } from "./objects/CapituloSelect.schema.ts";
import { CapituloUpdateManyMutationInputObjectSchema as CapituloUpdateManyMutationInputObjectSchema } from "./objects/CapituloUpdateManyMutationInput.schema.ts";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./objects/CapituloWhereInput.schema.ts";

export const CapituloUpdateManyAndReturnSchema: z.ZodType<Prisma.CapituloUpdateManyAndReturnArgs> = z
	.object({ select: CapituloSelectObjectSchema.optional(), data: CapituloUpdateManyMutationInputObjectSchema, where: CapituloWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.CapituloUpdateManyAndReturnArgs>;

export const CapituloUpdateManyAndReturnZodSchema = z
	.object({ select: CapituloSelectObjectSchema.optional(), data: CapituloUpdateManyMutationInputObjectSchema, where: CapituloWhereInputObjectSchema.optional() })
	.strict();
