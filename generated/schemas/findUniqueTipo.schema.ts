import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { TipoIncludeObjectSchema as TipoIncludeObjectSchema } from "./objects/TipoInclude.schema.ts";
import { TipoSelectObjectSchema as TipoSelectObjectSchema } from "./objects/TipoSelect.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./objects/TipoWhereUniqueInput.schema.ts";

export const TipoFindUniqueSchema: z.ZodType<Prisma.TipoFindUniqueArgs> = z
	.object({ select: TipoSelectObjectSchema.optional(), include: TipoIncludeObjectSchema.optional(), where: TipoWhereUniqueInputObjectSchema })
	.strict() as unknown as z.ZodType<Prisma.TipoFindUniqueArgs>;

export const TipoFindUniqueZodSchema = z.object({ select: TipoSelectObjectSchema.optional(), include: TipoIncludeObjectSchema.optional(), where: TipoWhereUniqueInputObjectSchema }).strict();
