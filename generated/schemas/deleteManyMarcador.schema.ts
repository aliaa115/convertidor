import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { MarcadorWhereInputObjectSchema as MarcadorWhereInputObjectSchema } from "./objects/MarcadorWhereInput.schema.ts";

export const MarcadorDeleteManySchema: z.ZodType<Prisma.MarcadorDeleteManyArgs> =
	z
		.object({ where: MarcadorWhereInputObjectSchema.optional() })
		.strict() as unknown as z.ZodType<Prisma.MarcadorDeleteManyArgs>;

export const MarcadorDeleteManyZodSchema = z
	.object({ where: MarcadorWhereInputObjectSchema.optional() })
	.strict();
