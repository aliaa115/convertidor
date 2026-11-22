import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutSeguirUsuariosInputObjectSchema as EstadoCreateOrConnectWithoutSeguirUsuariosInputObjectSchema } from "./EstadoCreateOrConnectWithoutSeguirUsuariosInput.schema.ts";
import { EstadoCreateWithoutSeguirUsuariosInputObjectSchema as EstadoCreateWithoutSeguirUsuariosInputObjectSchema } from "./EstadoCreateWithoutSeguirUsuariosInput.schema.ts";
import { EstadoUncheckedCreateWithoutSeguirUsuariosInputObjectSchema as EstadoUncheckedCreateWithoutSeguirUsuariosInputObjectSchema } from "./EstadoUncheckedCreateWithoutSeguirUsuariosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutSeguirUsuariosInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutSeguirUsuariosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutSeguirUsuariosInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutSeguirUsuariosInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutSeguirUsuariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutSeguirUsuariosInput>;
export const EstadoCreateNestedOneWithoutSeguirUsuariosInputObjectZodSchema = makeSchema();
