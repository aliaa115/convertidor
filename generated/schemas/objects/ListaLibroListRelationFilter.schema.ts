import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaLibroWhereInputObjectSchema as ListaLibroWhereInputObjectSchema } from "./ListaLibroWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => ListaLibroWhereInputObjectSchema).optional(),
			some: z.lazy(() => ListaLibroWhereInputObjectSchema).optional(),
			none: z.lazy(() => ListaLibroWhereInputObjectSchema).optional(),
		})
		.strict();
export const ListaLibroListRelationFilterObjectSchema: z.ZodType<Prisma.ListaLibroListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ListaLibroListRelationFilter>;
export const ListaLibroListRelationFilterObjectZodSchema = makeSchema();
