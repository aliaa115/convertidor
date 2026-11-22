import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateWithoutGlosariosInputObjectSchema as EscritorCreateWithoutGlosariosInputObjectSchema } from "./EscritorCreateWithoutGlosariosInput.schema.ts";
import { EscritorUncheckedCreateWithoutGlosariosInputObjectSchema as EscritorUncheckedCreateWithoutGlosariosInputObjectSchema } from "./EscritorUncheckedCreateWithoutGlosariosInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EscritorCreateWithoutGlosariosInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutGlosariosInputObjectSchema)]),
		})
		.strict();
export const EscritorCreateOrConnectWithoutGlosariosInputObjectSchema: z.ZodType<Prisma.EscritorCreateOrConnectWithoutGlosariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateOrConnectWithoutGlosariosInput>;
export const EscritorCreateOrConnectWithoutGlosariosInputObjectZodSchema = makeSchema();
