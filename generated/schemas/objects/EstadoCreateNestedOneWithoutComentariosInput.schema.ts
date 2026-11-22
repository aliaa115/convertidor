import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutComentariosInputObjectSchema as EstadoCreateOrConnectWithoutComentariosInputObjectSchema } from "./EstadoCreateOrConnectWithoutComentariosInput.schema.ts";
import { EstadoCreateWithoutComentariosInputObjectSchema as EstadoCreateWithoutComentariosInputObjectSchema } from "./EstadoCreateWithoutComentariosInput.schema.ts";
import { EstadoUncheckedCreateWithoutComentariosInputObjectSchema as EstadoUncheckedCreateWithoutComentariosInputObjectSchema } from "./EstadoUncheckedCreateWithoutComentariosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutComentariosInputObjectSchema),
					z.lazy(
						() => EstadoUncheckedCreateWithoutComentariosInputObjectSchema,
					),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutComentariosInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutComentariosInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutComentariosInput>;
export const EstadoCreateNestedOneWithoutComentariosInputObjectZodSchema =
	makeSchema();
