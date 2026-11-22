import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateWithoutComentariosInputObjectSchema as EstadoCreateWithoutComentariosInputObjectSchema } from "./EstadoCreateWithoutComentariosInput.schema.ts";
import { EstadoUncheckedCreateWithoutComentariosInputObjectSchema as EstadoUncheckedCreateWithoutComentariosInputObjectSchema } from "./EstadoUncheckedCreateWithoutComentariosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EstadoCreateWithoutComentariosInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutComentariosInputObjectSchema)]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutComentariosInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutComentariosInput>;
export const EstadoCreateOrConnectWithoutComentariosInputObjectZodSchema = makeSchema();
