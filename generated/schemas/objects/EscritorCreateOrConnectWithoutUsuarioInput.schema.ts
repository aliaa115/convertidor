import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateWithoutUsuarioInputObjectSchema as EscritorCreateWithoutUsuarioInputObjectSchema } from "./EscritorCreateWithoutUsuarioInput.schema.ts";
import { EscritorUncheckedCreateWithoutUsuarioInputObjectSchema as EscritorUncheckedCreateWithoutUsuarioInputObjectSchema } from "./EscritorUncheckedCreateWithoutUsuarioInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EscritorCreateWithoutUsuarioInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutUsuarioInputObjectSchema)]),
		})
		.strict();
export const EscritorCreateOrConnectWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.EscritorCreateOrConnectWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateOrConnectWithoutUsuarioInput>;
export const EscritorCreateOrConnectWithoutUsuarioInputObjectZodSchema = makeSchema();
