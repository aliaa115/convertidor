import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { UsuarioCreateManyEstadoInputObjectSchema as UsuarioCreateManyEstadoInputObjectSchema } from "./UsuarioCreateManyEstadoInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([
				z.lazy(() => UsuarioCreateManyEstadoInputObjectSchema),
				z.lazy(() => UsuarioCreateManyEstadoInputObjectSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const UsuarioCreateManyEstadoInputEnvelopeObjectSchema: z.ZodType<Prisma.UsuarioCreateManyEstadoInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateManyEstadoInputEnvelope>;
export const UsuarioCreateManyEstadoInputEnvelopeObjectZodSchema = makeSchema();
