import * as z from "zod";
import type { Prisma } from "../prisma/browser.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./objects/TipoWhereInput.schema.ts";

export const TipoDeleteManySchema: z.ZodType<Prisma.TipoDeleteManyArgs> = z.object({ where: TipoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TipoDeleteManyArgs>;

export const TipoDeleteManyZodSchema = z.object({ where: TipoWhereInputObjectSchema.optional() }).strict();
