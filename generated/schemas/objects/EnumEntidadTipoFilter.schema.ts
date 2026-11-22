import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EntidadTipoSchema } from "../enums/EntidadTipo.schema.ts";
import { NestedEnumEntidadTipoFilterObjectSchema as NestedEnumEntidadTipoFilterObjectSchema } from "./NestedEnumEntidadTipoFilter.schema.ts";

const makeSchema = () =>
	z
		.object({
			equals: EntidadTipoSchema.optional(),
			in: EntidadTipoSchema.array().optional(),
			notIn: EntidadTipoSchema.array().optional(),
			not: z.union([EntidadTipoSchema, z.lazy(() => NestedEnumEntidadTipoFilterObjectSchema)]).optional(),
		})
		.strict();
export const EnumEntidadTipoFilterObjectSchema: z.ZodType<Prisma.EnumEntidadTipoFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumEntidadTipoFilter>;
export const EnumEntidadTipoFilterObjectZodSchema = makeSchema();
