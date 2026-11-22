import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int(),
			indice: z.number().int(),
		})
		.strict();
export const ParrafoIdIndiceCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ParrafoIdIndiceCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ParrafoIdIndiceCompoundUniqueInput>;
export const ParrafoIdIndiceCompoundUniqueInputObjectZodSchema = makeSchema();
