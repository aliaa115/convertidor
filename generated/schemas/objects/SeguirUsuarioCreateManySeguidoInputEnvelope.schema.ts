import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SeguirUsuarioCreateManySeguidoInputObjectSchema as SeguirUsuarioCreateManySeguidoInputObjectSchema } from "./SeguirUsuarioCreateManySeguidoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => SeguirUsuarioCreateManySeguidoInputObjectSchema), z.lazy(() => SeguirUsuarioCreateManySeguidoInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const SeguirUsuarioCreateManySeguidoInputEnvelopeObjectSchema: z.ZodType<Prisma.SeguirUsuarioCreateManySeguidoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioCreateManySeguidoInputEnvelope>;
export const SeguirUsuarioCreateManySeguidoInputEnvelopeObjectZodSchema = makeSchema();
