import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateOrConnectWithoutComentariosInputObjectSchema as EscritorCreateOrConnectWithoutComentariosInputObjectSchema } from "./EscritorCreateOrConnectWithoutComentariosInput.schema.ts";
import { EscritorCreateWithoutComentariosInputObjectSchema as EscritorCreateWithoutComentariosInputObjectSchema } from "./EscritorCreateWithoutComentariosInput.schema.ts";
import { EscritorUncheckedCreateWithoutComentariosInputObjectSchema as EscritorUncheckedCreateWithoutComentariosInputObjectSchema } from "./EscritorUncheckedCreateWithoutComentariosInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EscritorCreateWithoutComentariosInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutComentariosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EscritorCreateOrConnectWithoutComentariosInputObjectSchema).optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EscritorCreateNestedOneWithoutComentariosInputObjectSchema: z.ZodType<Prisma.EscritorCreateNestedOneWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateNestedOneWithoutComentariosInput>;
export const EscritorCreateNestedOneWithoutComentariosInputObjectZodSchema = makeSchema();
