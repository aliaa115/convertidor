import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ListaCreateManyUsuarioInputObjectSchema as ListaCreateManyUsuarioInputObjectSchema } from "./ListaCreateManyUsuarioInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			data: z.union([z.lazy(() => ListaCreateManyUsuarioInputObjectSchema), z.lazy(() => ListaCreateManyUsuarioInputObjectSchema).array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();
export const ListaCreateManyUsuarioInputEnvelopeObjectSchema: z.ZodType<Prisma.ListaCreateManyUsuarioInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ListaCreateManyUsuarioInputEnvelope>;
export const ListaCreateManyUsuarioInputEnvelopeObjectZodSchema = makeSchema();
