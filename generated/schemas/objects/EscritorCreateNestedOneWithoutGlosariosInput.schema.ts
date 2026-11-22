import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateOrConnectWithoutGlosariosInputObjectSchema as EscritorCreateOrConnectWithoutGlosariosInputObjectSchema } from "./EscritorCreateOrConnectWithoutGlosariosInput.schema.ts";
import { EscritorCreateWithoutGlosariosInputObjectSchema as EscritorCreateWithoutGlosariosInputObjectSchema } from "./EscritorCreateWithoutGlosariosInput.schema.ts";
import { EscritorUncheckedCreateWithoutGlosariosInputObjectSchema as EscritorUncheckedCreateWithoutGlosariosInputObjectSchema } from "./EscritorUncheckedCreateWithoutGlosariosInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EscritorCreateWithoutGlosariosInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutGlosariosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EscritorCreateOrConnectWithoutGlosariosInputObjectSchema).optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EscritorCreateNestedOneWithoutGlosariosInputObjectSchema: z.ZodType<Prisma.EscritorCreateNestedOneWithoutGlosariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateNestedOneWithoutGlosariosInput>;
export const EscritorCreateNestedOneWithoutGlosariosInputObjectZodSchema = makeSchema();
