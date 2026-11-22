import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateManyAvatarInputObjectSchema as EscritorCreateManyAvatarInputObjectSchema } from "./EscritorCreateManyAvatarInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => EscritorCreateManyAvatarInputObjectSchema),
				z.lazy(() => EscritorCreateManyAvatarInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const EscritorCreateManyAvatarInputEnvelopeObjectSchema: z.ZodType<Prisma.EscritorCreateManyAvatarInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateManyAvatarInputEnvelope>;
export const EscritorCreateManyAvatarInputEnvelopeObjectZodSchema =
	makeSchema();
