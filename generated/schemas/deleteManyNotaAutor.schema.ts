import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { NotaAutorWhereInputObjectSchema as NotaAutorWhereInputObjectSchema } from "./objects/NotaAutorWhereInput.schema.ts";

export const NotaAutorDeleteManySchema: z.ZodType<Prisma.NotaAutorDeleteManyArgs> =
	z
		.object({ where: NotaAutorWhereInputObjectSchema.optional() })
		.strict() as unknown as z.ZodType<Prisma.NotaAutorDeleteManyArgs>;

export const NotaAutorDeleteManyZodSchema = z
	.object({ where: NotaAutorWhereInputObjectSchema.optional() })
	.strict();
