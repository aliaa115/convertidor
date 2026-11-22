import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { NotaAutorIncludeObjectSchema as NotaAutorIncludeObjectSchema } from "./objects/NotaAutorInclude.schema.ts";
import { NotaAutorSelectObjectSchema as NotaAutorSelectObjectSchema } from "./objects/NotaAutorSelect.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./objects/NotaAutorWhereUniqueInput.schema.ts";

export const NotaAutorFindUniqueOrThrowSchema: z.ZodType<Prisma.NotaAutorFindUniqueOrThrowArgs> =
	z
		.object({
			select: NotaAutorSelectObjectSchema.optional(),
			include: NotaAutorIncludeObjectSchema.optional(),
			where: NotaAutorWhereUniqueInputObjectSchema,
		})
		.strict() as unknown as z.ZodType<Prisma.NotaAutorFindUniqueOrThrowArgs>;

export const NotaAutorFindUniqueOrThrowZodSchema = z
	.object({
		select: NotaAutorSelectObjectSchema.optional(),
		include: NotaAutorIncludeObjectSchema.optional(),
		where: NotaAutorWhereUniqueInputObjectSchema,
	})
	.strict();
