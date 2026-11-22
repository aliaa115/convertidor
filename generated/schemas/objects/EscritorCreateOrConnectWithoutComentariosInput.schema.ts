import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateWithoutComentariosInputObjectSchema as EscritorCreateWithoutComentariosInputObjectSchema } from "./EscritorCreateWithoutComentariosInput.schema.ts";
import { EscritorUncheckedCreateWithoutComentariosInputObjectSchema as EscritorUncheckedCreateWithoutComentariosInputObjectSchema } from "./EscritorUncheckedCreateWithoutComentariosInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => EscritorCreateWithoutComentariosInputObjectSchema),
				z.lazy(
					() => EscritorUncheckedCreateWithoutComentariosInputObjectSchema,
				),
			]),
		})
		.strict();
export const EscritorCreateOrConnectWithoutComentariosInputObjectSchema: z.ZodType<Prisma.EscritorCreateOrConnectWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateOrConnectWithoutComentariosInput>;
export const EscritorCreateOrConnectWithoutComentariosInputObjectZodSchema =
	makeSchema();
