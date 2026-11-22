import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { MarcadorWhereInputObjectSchema as MarcadorWhereInputObjectSchema } from "./MarcadorWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			every: z.lazy(() => MarcadorWhereInputObjectSchema).optional(),
			some: z.lazy(() => MarcadorWhereInputObjectSchema).optional(),
			none: z.lazy(() => MarcadorWhereInputObjectSchema).optional(),
		})
		.strict();
export const MarcadorListRelationFilterObjectSchema: z.ZodType<Prisma.MarcadorListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MarcadorListRelationFilter>;
export const MarcadorListRelationFilterObjectZodSchema = makeSchema();
