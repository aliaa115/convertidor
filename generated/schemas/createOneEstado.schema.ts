import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { EstadoCreateInputObjectSchema as EstadoCreateInputObjectSchema } from "./objects/EstadoCreateInput.schema.ts";
import { EstadoIncludeObjectSchema as EstadoIncludeObjectSchema } from "./objects/EstadoInclude.schema.ts";
import { EstadoSelectObjectSchema as EstadoSelectObjectSchema } from "./objects/EstadoSelect.schema.ts";
import { EstadoUncheckedCreateInputObjectSchema as EstadoUncheckedCreateInputObjectSchema } from "./objects/EstadoUncheckedCreateInput.schema.ts";

export const EstadoCreateOneSchema: z.ZodType<Prisma.EstadoCreateArgs> = z
	.object({ select: EstadoSelectObjectSchema.optional(), include: EstadoIncludeObjectSchema.optional(), data: z.union([EstadoCreateInputObjectSchema, EstadoUncheckedCreateInputObjectSchema]) })
	.strict() as unknown as z.ZodType<Prisma.EstadoCreateArgs>;

export const EstadoCreateOneZodSchema = z
	.object({ select: EstadoSelectObjectSchema.optional(), include: EstadoIncludeObjectSchema.optional(), data: z.union([EstadoCreateInputObjectSchema, EstadoUncheckedCreateInputObjectSchema]) })
	.strict();
