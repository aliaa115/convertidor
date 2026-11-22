import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SeguirUsuarioCreateManyEscritorInputObjectSchema as SeguirUsuarioCreateManyEscritorInputObjectSchema } from "./SeguirUsuarioCreateManyEscritorInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => SeguirUsuarioCreateManyEscritorInputObjectSchema), z.lazy(() => SeguirUsuarioCreateManyEscritorInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const SeguirUsuarioCreateManyEscritorInputEnvelopeObjectSchema: z.ZodType<Prisma.SeguirUsuarioCreateManyEscritorInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioCreateManyEscritorInputEnvelope>;
export const SeguirUsuarioCreateManyEscritorInputEnvelopeObjectZodSchema = makeSchema();
