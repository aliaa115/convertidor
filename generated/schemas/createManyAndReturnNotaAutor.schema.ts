import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { NotaAutorCreateManyInputObjectSchema as NotaAutorCreateManyInputObjectSchema } from "./objects/NotaAutorCreateManyInput.schema.ts";
import { NotaAutorSelectObjectSchema as NotaAutorSelectObjectSchema } from "./objects/NotaAutorSelect.schema.ts";

export const NotaAutorCreateManyAndReturnSchema: z.ZodType<Prisma.NotaAutorCreateManyAndReturnArgs> = z
	.object({
		select: NotaAutorSelectObjectSchema.optional(),
		data: z.union([NotaAutorCreateManyInputObjectSchema, z.array(NotaAutorCreateManyInputObjectSchema)]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict() as unknown as z.ZodType<Prisma.NotaAutorCreateManyAndReturnArgs>;

export const NotaAutorCreateManyAndReturnZodSchema = z
	.object({
		select: NotaAutorSelectObjectSchema.optional(),
		data: z.union([NotaAutorCreateManyInputObjectSchema, z.array(NotaAutorCreateManyInputObjectSchema)]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();
