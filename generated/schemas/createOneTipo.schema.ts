import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { TipoCreateInputObjectSchema as TipoCreateInputObjectSchema } from "./objects/TipoCreateInput.schema.ts";
import { TipoIncludeObjectSchema as TipoIncludeObjectSchema } from "./objects/TipoInclude.schema.ts";
import { TipoSelectObjectSchema as TipoSelectObjectSchema } from "./objects/TipoSelect.schema.ts";
import { TipoUncheckedCreateInputObjectSchema as TipoUncheckedCreateInputObjectSchema } from "./objects/TipoUncheckedCreateInput.schema.ts";

export const TipoCreateOneSchema: z.ZodType<Prisma.TipoCreateArgs> = z
	.object({ select: TipoSelectObjectSchema.optional(), include: TipoIncludeObjectSchema.optional(), data: z.union([TipoCreateInputObjectSchema, TipoUncheckedCreateInputObjectSchema]) })
	.strict() as unknown as z.ZodType<Prisma.TipoCreateArgs>;

export const TipoCreateOneZodSchema = z
	.object({ select: TipoSelectObjectSchema.optional(), include: TipoIncludeObjectSchema.optional(), data: z.union([TipoCreateInputObjectSchema, TipoUncheckedCreateInputObjectSchema]) })
	.strict();
