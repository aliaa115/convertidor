import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { IdiomaWhereInputObjectSchema as IdiomaWhereInputObjectSchema } from "./objects/IdiomaWhereInput.schema.ts";

export const IdiomaDeleteManySchema: z.ZodType<Prisma.IdiomaDeleteManyArgs> = z
	.object({ where: IdiomaWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.IdiomaDeleteManyArgs>;

export const IdiomaDeleteManyZodSchema = z
	.object({ where: IdiomaWhereInputObjectSchema.optional() })
	.strict();
