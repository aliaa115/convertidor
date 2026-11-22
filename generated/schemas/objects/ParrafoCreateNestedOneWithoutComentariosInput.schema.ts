import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ParrafoCreateOrConnectWithoutComentariosInputObjectSchema as ParrafoCreateOrConnectWithoutComentariosInputObjectSchema } from "./ParrafoCreateOrConnectWithoutComentariosInput.schema.ts";
import { ParrafoCreateWithoutComentariosInputObjectSchema as ParrafoCreateWithoutComentariosInputObjectSchema } from "./ParrafoCreateWithoutComentariosInput.schema.ts";
import { ParrafoUncheckedCreateWithoutComentariosInputObjectSchema as ParrafoUncheckedCreateWithoutComentariosInputObjectSchema } from "./ParrafoUncheckedCreateWithoutComentariosInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./ParrafoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ParrafoCreateWithoutComentariosInputObjectSchema),
					z.lazy(
						() => ParrafoUncheckedCreateWithoutComentariosInputObjectSchema,
					),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => ParrafoCreateOrConnectWithoutComentariosInputObjectSchema)
				.optional(),
			connect: z.lazy(() => ParrafoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const ParrafoCreateNestedOneWithoutComentariosInputObjectSchema: z.ZodType<Prisma.ParrafoCreateNestedOneWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoCreateNestedOneWithoutComentariosInput>;
export const ParrafoCreateNestedOneWithoutComentariosInputObjectZodSchema =
	makeSchema();
