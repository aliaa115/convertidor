import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateWithoutSiguiendoInputObjectSchema as EscritorCreateWithoutSiguiendoInputObjectSchema } from "./EscritorCreateWithoutSiguiendoInput.schema.ts";
import { EscritorUncheckedCreateWithoutSiguiendoInputObjectSchema as EscritorUncheckedCreateWithoutSiguiendoInputObjectSchema } from "./EscritorUncheckedCreateWithoutSiguiendoInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EscritorCreateWithoutSiguiendoInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutSiguiendoInputObjectSchema)]),
		})
		.strict();
export const EscritorCreateOrConnectWithoutSiguiendoInputObjectSchema: z.ZodType<Prisma.EscritorCreateOrConnectWithoutSiguiendoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateOrConnectWithoutSiguiendoInput>;
export const EscritorCreateOrConnectWithoutSiguiendoInputObjectZodSchema = makeSchema();
