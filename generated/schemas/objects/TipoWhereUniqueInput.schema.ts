import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
		})
		.strict();
export const TipoWhereUniqueInputObjectSchema: z.ZodType<Prisma.TipoWhereUniqueInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoWhereUniqueInput>;
export const TipoWhereUniqueInputObjectZodSchema = makeSchema();
