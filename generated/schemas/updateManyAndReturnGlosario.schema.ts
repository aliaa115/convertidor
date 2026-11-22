import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { GlosarioSelectObjectSchema as GlosarioSelectObjectSchema } from "./objects/GlosarioSelect.schema.ts";
import { GlosarioUpdateManyMutationInputObjectSchema as GlosarioUpdateManyMutationInputObjectSchema } from "./objects/GlosarioUpdateManyMutationInput.schema.ts";
import { GlosarioWhereInputObjectSchema as GlosarioWhereInputObjectSchema } from "./objects/GlosarioWhereInput.schema.ts";

export const GlosarioUpdateManyAndReturnSchema: z.ZodType<Prisma.GlosarioUpdateManyAndReturnArgs> = z
	.object({ select: GlosarioSelectObjectSchema.optional(), data: GlosarioUpdateManyMutationInputObjectSchema, where: GlosarioWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.GlosarioUpdateManyAndReturnArgs>;

export const GlosarioUpdateManyAndReturnZodSchema = z
	.object({ select: GlosarioSelectObjectSchema.optional(), data: GlosarioUpdateManyMutationInputObjectSchema, where: GlosarioWhereInputObjectSchema.optional() })
	.strict();
