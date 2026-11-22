import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotaAutorWhereInputObjectSchema as NotaAutorWhereInputObjectSchema } from "./NotaAutorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => NotaAutorWhereInputObjectSchema).optional(),
			some: z.lazy(() => NotaAutorWhereInputObjectSchema).optional(),
			none: z.lazy(() => NotaAutorWhereInputObjectSchema).optional(),
		})
		.strict();
export const NotaAutorListRelationFilterObjectSchema: z.ZodType<Prisma.NotaAutorListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.NotaAutorListRelationFilter>;
export const NotaAutorListRelationFilterObjectZodSchema = makeSchema();
