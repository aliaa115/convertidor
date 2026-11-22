import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateWithoutEstadoInputObjectSchema as EscritorCreateWithoutEstadoInputObjectSchema } from "./EscritorCreateWithoutEstadoInput.schema.ts";
import { EscritorUncheckedCreateWithoutEstadoInputObjectSchema as EscritorUncheckedCreateWithoutEstadoInputObjectSchema } from "./EscritorUncheckedCreateWithoutEstadoInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EscritorCreateWithoutEstadoInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const EscritorCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.EscritorCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateOrConnectWithoutEstadoInput>;
export const EscritorCreateOrConnectWithoutEstadoInputObjectZodSchema = makeSchema();
