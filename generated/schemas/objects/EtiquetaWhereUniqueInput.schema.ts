import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";

const makeSchema = () =>
	z
		.object({
			id: z.number().int().optional(),
		})
		.strict();
export const EtiquetaWhereUniqueInputObjectSchema: z.ZodType<Prisma.EtiquetaWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EtiquetaWhereUniqueInput>;
export const EtiquetaWhereUniqueInputObjectZodSchema = makeSchema();
