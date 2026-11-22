import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutSeguirUsuariosInputObjectSchema as EstadoCreateWithoutSeguirUsuariosInputObjectSchema } from "./EstadoCreateWithoutSeguirUsuariosInput.schema.ts";
import { EstadoUncheckedCreateWithoutSeguirUsuariosInputObjectSchema as EstadoUncheckedCreateWithoutSeguirUsuariosInputObjectSchema } from "./EstadoUncheckedCreateWithoutSeguirUsuariosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutSeguirUsuariosInputObjectSchema),
				z.lazy(
					() => EstadoUncheckedCreateWithoutSeguirUsuariosInputObjectSchema,
				),
			]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutSeguirUsuariosInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutSeguirUsuariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutSeguirUsuariosInput>;
export const EstadoCreateOrConnectWithoutSeguirUsuariosInputObjectZodSchema =
	makeSchema();
