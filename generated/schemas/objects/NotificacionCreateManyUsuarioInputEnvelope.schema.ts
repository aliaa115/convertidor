import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotificacionCreateManyUsuarioInputObjectSchema as NotificacionCreateManyUsuarioInputObjectSchema } from "./NotificacionCreateManyUsuarioInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => NotificacionCreateManyUsuarioInputObjectSchema), z.lazy(() => NotificacionCreateManyUsuarioInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const NotificacionCreateManyUsuarioInputEnvelopeObjectSchema: z.ZodType<Prisma.NotificacionCreateManyUsuarioInputEnvelope> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionCreateManyUsuarioInputEnvelope>;
export const NotificacionCreateManyUsuarioInputEnvelopeObjectZodSchema = makeSchema();
