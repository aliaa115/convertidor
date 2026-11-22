import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { NotaAutorCreateInputObjectSchema as NotaAutorCreateInputObjectSchema } from "./objects/NotaAutorCreateInput.schema.ts";
import { NotaAutorIncludeObjectSchema as NotaAutorIncludeObjectSchema } from "./objects/NotaAutorInclude.schema.ts";
import { NotaAutorSelectObjectSchema as NotaAutorSelectObjectSchema } from "./objects/NotaAutorSelect.schema.ts";
import { NotaAutorUncheckedCreateInputObjectSchema as NotaAutorUncheckedCreateInputObjectSchema } from "./objects/NotaAutorUncheckedCreateInput.schema.ts";

export const NotaAutorCreateOneSchema: z.ZodType<Prisma.NotaAutorCreateArgs> = z
	.object({
		select: NotaAutorSelectObjectSchema.optional(),
		include: NotaAutorIncludeObjectSchema.optional(),
		data: z.union([NotaAutorCreateInputObjectSchema, NotaAutorUncheckedCreateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.NotaAutorCreateArgs>;

export const NotaAutorCreateOneZodSchema = z
	.object({
		select: NotaAutorSelectObjectSchema.optional(),
		include: NotaAutorIncludeObjectSchema.optional(),
		data: z.union([NotaAutorCreateInputObjectSchema, NotaAutorUncheckedCreateInputObjectSchema]),
	})
	.strict();
