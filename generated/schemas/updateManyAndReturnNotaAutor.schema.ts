import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { NotaAutorSelectObjectSchema as NotaAutorSelectObjectSchema } from "./objects/NotaAutorSelect.schema.ts";
import { NotaAutorUpdateManyMutationInputObjectSchema as NotaAutorUpdateManyMutationInputObjectSchema } from "./objects/NotaAutorUpdateManyMutationInput.schema.ts";
import { NotaAutorWhereInputObjectSchema as NotaAutorWhereInputObjectSchema } from "./objects/NotaAutorWhereInput.schema.ts";

export const NotaAutorUpdateManyAndReturnSchema: z.ZodType<Prisma.NotaAutorUpdateManyAndReturnArgs> =
	z
		.object({
			select: NotaAutorSelectObjectSchema.optional(),
			data: NotaAutorUpdateManyMutationInputObjectSchema,
			where: NotaAutorWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.NotaAutorUpdateManyAndReturnArgs>;

export const NotaAutorUpdateManyAndReturnZodSchema = z
	.object({
		select: NotaAutorSelectObjectSchema.optional(),
		data: NotaAutorUpdateManyMutationInputObjectSchema,
		where: NotaAutorWhereInputObjectSchema.optional(),
	})
	.strict();
