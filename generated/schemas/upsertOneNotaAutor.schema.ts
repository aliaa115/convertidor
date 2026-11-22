import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { NotaAutorCreateInputObjectSchema as NotaAutorCreateInputObjectSchema } from "./objects/NotaAutorCreateInput.schema.ts";
import { NotaAutorIncludeObjectSchema as NotaAutorIncludeObjectSchema } from "./objects/NotaAutorInclude.schema.ts";
import { NotaAutorSelectObjectSchema as NotaAutorSelectObjectSchema } from "./objects/NotaAutorSelect.schema.ts";
import { NotaAutorUncheckedCreateInputObjectSchema as NotaAutorUncheckedCreateInputObjectSchema } from "./objects/NotaAutorUncheckedCreateInput.schema.ts";
import { NotaAutorUncheckedUpdateInputObjectSchema as NotaAutorUncheckedUpdateInputObjectSchema } from "./objects/NotaAutorUncheckedUpdateInput.schema.ts";
import { NotaAutorUpdateInputObjectSchema as NotaAutorUpdateInputObjectSchema } from "./objects/NotaAutorUpdateInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./objects/NotaAutorWhereUniqueInput.schema.ts";

export const NotaAutorUpsertOneSchema: z.ZodType<Prisma.NotaAutorUpsertArgs> = z
	.object({
		select: NotaAutorSelectObjectSchema.optional(),
		include: NotaAutorIncludeObjectSchema.optional(),
		where: NotaAutorWhereUniqueInputObjectSchema,
		create: z.union([NotaAutorCreateInputObjectSchema, NotaAutorUncheckedCreateInputObjectSchema]),
		update: z.union([NotaAutorUpdateInputObjectSchema, NotaAutorUncheckedUpdateInputObjectSchema]),
	})
	.strict() as unknown as z.ZodType<Prisma.NotaAutorUpsertArgs>;

export const NotaAutorUpsertOneZodSchema = z
	.object({
		select: NotaAutorSelectObjectSchema.optional(),
		include: NotaAutorIncludeObjectSchema.optional(),
		where: NotaAutorWhereUniqueInputObjectSchema,
		create: z.union([NotaAutorCreateInputObjectSchema, NotaAutorUncheckedCreateInputObjectSchema]),
		update: z.union([NotaAutorUpdateInputObjectSchema, NotaAutorUncheckedUpdateInputObjectSchema]),
	})
	.strict();
