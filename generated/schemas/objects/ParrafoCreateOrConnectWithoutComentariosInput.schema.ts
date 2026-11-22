import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ParrafoCreateWithoutComentariosInputObjectSchema as ParrafoCreateWithoutComentariosInputObjectSchema } from "./ParrafoCreateWithoutComentariosInput.schema.ts";
import { ParrafoUncheckedCreateWithoutComentariosInputObjectSchema as ParrafoUncheckedCreateWithoutComentariosInputObjectSchema } from "./ParrafoUncheckedCreateWithoutComentariosInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./ParrafoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ParrafoWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => ParrafoCreateWithoutComentariosInputObjectSchema),
				z.lazy(() => ParrafoUncheckedCreateWithoutComentariosInputObjectSchema),
			]),
		})
		.strict();
export const ParrafoCreateOrConnectWithoutComentariosInputObjectSchema: z.ZodType<Prisma.ParrafoCreateOrConnectWithoutComentariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoCreateOrConnectWithoutComentariosInput>;
export const ParrafoCreateOrConnectWithoutComentariosInputObjectZodSchema =
	makeSchema();
