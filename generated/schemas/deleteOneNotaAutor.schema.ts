import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { NotaAutorIncludeObjectSchema as NotaAutorIncludeObjectSchema } from "./objects/NotaAutorInclude.schema.ts";
import { NotaAutorSelectObjectSchema as NotaAutorSelectObjectSchema } from "./objects/NotaAutorSelect.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./objects/NotaAutorWhereUniqueInput.schema.ts";

export const NotaAutorDeleteOneSchema: z.ZodType<Prisma.NotaAutorDeleteArgs> = z
	.object({ select: NotaAutorSelectObjectSchema.optional(), include: NotaAutorIncludeObjectSchema.optional(), where: NotaAutorWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.NotaAutorDeleteArgs>;

export const NotaAutorDeleteOneZodSchema = z
	.object({ select: NotaAutorSelectObjectSchema.optional(), include: NotaAutorIncludeObjectSchema.optional(), where: NotaAutorWhereUniqueInputObjectSchema })
	.strict();
