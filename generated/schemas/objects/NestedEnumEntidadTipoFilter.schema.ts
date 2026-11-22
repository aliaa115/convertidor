import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EntidadTipoSchema } from "../enums/EntidadTipo.schema.ts";

const nestedenumentidadtipofilterSchema = z
	.object({
		equals: EntidadTipoSchema.optional(),
		in: EntidadTipoSchema.array().optional(),
		notIn: EntidadTipoSchema.array().optional(),
		not: z.union([EntidadTipoSchema, z.lazy(() => NestedEnumEntidadTipoFilterObjectSchema)]).optional(),
	})
	.strict();
export const NestedEnumEntidadTipoFilterObjectSchema: z.ZodType<Prisma.NestedEnumEntidadTipoFilter> = nestedenumentidadtipofilterSchema as unknown as z.ZodType<Prisma.NestedEnumEntidadTipoFilter>;
export const NestedEnumEntidadTipoFilterObjectZodSchema = nestedenumentidadtipofilterSchema;
