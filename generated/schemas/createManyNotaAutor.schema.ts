import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { NotaAutorCreateManyInputObjectSchema as NotaAutorCreateManyInputObjectSchema } from "./objects/NotaAutorCreateManyInput.schema.ts";

export const NotaAutorCreateManySchema: z.ZodType<Prisma.NotaAutorCreateManyArgs> = z
	.object({ data: z.union([NotaAutorCreateManyInputObjectSchema, z.array(NotaAutorCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict() as unknown as z.ZodType<Prisma.NotaAutorCreateManyArgs>;

export const NotaAutorCreateManyZodSchema = z
	.object({ data: z.union([NotaAutorCreateManyInputObjectSchema, z.array(NotaAutorCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() })
	.strict();
