import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaWhereInputObjectSchema as ListaWhereInputObjectSchema } from "./ListaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => ListaWhereInputObjectSchema).optional(),
			some: z.lazy(() => ListaWhereInputObjectSchema).optional(),
			none: z.lazy(() => ListaWhereInputObjectSchema).optional(),
		})
		.strict();
export const ListaListRelationFilterObjectSchema: z.ZodType<Prisma.ListaListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ListaListRelationFilter>;
export const ListaListRelationFilterObjectZodSchema = makeSchema();
