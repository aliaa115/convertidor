import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./objects/EstadoWhereInput.schema.ts";

export const EstadoDeleteManySchema: z.ZodType<Prisma.EstadoDeleteManyArgs> = z
	.object({ where: EstadoWhereInputObjectSchema.optional() })
	.strict() as unknown as z.ZodType<Prisma.EstadoDeleteManyArgs>;

export const EstadoDeleteManyZodSchema = z
	.object({ where: EstadoWhereInputObjectSchema.optional() })
	.strict();
