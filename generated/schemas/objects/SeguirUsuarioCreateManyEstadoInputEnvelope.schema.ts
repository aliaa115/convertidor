import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SeguirUsuarioCreateManyEstadoInputObjectSchema as SeguirUsuarioCreateManyEstadoInputObjectSchema } from "./SeguirUsuarioCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => SeguirUsuarioCreateManyEstadoInputObjectSchema), z.lazy(() => SeguirUsuarioCreateManyEstadoInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const SeguirUsuarioCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.SeguirUsuarioCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioCreateManyEstadoInputEnvelope>;
export const SeguirUsuarioCreateManyEstadoInputEnvelopeObjectZodSchema = makeSchema();
