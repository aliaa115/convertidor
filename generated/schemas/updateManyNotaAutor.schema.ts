import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { NotaAutorUpdateManyMutationInputObjectSchema as NotaAutorUpdateManyMutationInputObjectSchema } from "./objects/NotaAutorUpdateManyMutationInput.schema.ts";
import { NotaAutorWhereInputObjectSchema as NotaAutorWhereInputObjectSchema } from "./objects/NotaAutorWhereInput.schema.ts";

export const NotaAutorUpdateManySchema: z.ZodType<Prisma.NotaAutorUpdateManyArgs> =
	z
		.object({
			data: NotaAutorUpdateManyMutationInputObjectSchema,
			where: NotaAutorWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.NotaAutorUpdateManyArgs>;

export const NotaAutorUpdateManyZodSchema = z
	.object({
		data: NotaAutorUpdateManyMutationInputObjectSchema,
		where: NotaAutorWhereInputObjectSchema.optional(),
	})
	.strict();
