import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ParrafoIdIndiceCompoundUniqueInputObjectSchema as ParrafoIdIndiceCompoundUniqueInputObjectSchema } from "./ParrafoIdIndiceCompoundUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
			id_indice: z.lazy(() => ParrafoIdIndiceCompoundUniqueInputObjectSchema).optional(),
		})
		.strict();
export const ParrafoWhereUniqueInputObjectSchema: z.ZodType<Prisma.ParrafoWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ParrafoWhereUniqueInput>;
export const ParrafoWhereUniqueInputObjectZodSchema = makeSchema();
