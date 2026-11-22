import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateOrConnectWithoutUsuarioInputObjectSchema as EscritorCreateOrConnectWithoutUsuarioInputObjectSchema } from "./EscritorCreateOrConnectWithoutUsuarioInput.schema.ts";
import { EscritorCreateWithoutUsuarioInputObjectSchema as EscritorCreateWithoutUsuarioInputObjectSchema } from "./EscritorCreateWithoutUsuarioInput.schema.ts";
import { EscritorUncheckedCreateWithoutUsuarioInputObjectSchema as EscritorUncheckedCreateWithoutUsuarioInputObjectSchema } from "./EscritorUncheckedCreateWithoutUsuarioInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EscritorCreateWithoutUsuarioInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutUsuarioInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EscritorCreateOrConnectWithoutUsuarioInputObjectSchema).optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EscritorCreateNestedOneWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.EscritorCreateNestedOneWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateNestedOneWithoutUsuarioInput>;
export const EscritorCreateNestedOneWithoutUsuarioInputObjectZodSchema = makeSchema();
