import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutUsuariosInputObjectSchema as EstadoCreateOrConnectWithoutUsuariosInputObjectSchema } from "./EstadoCreateOrConnectWithoutUsuariosInput.schema.ts";
import { EstadoCreateWithoutUsuariosInputObjectSchema as EstadoCreateWithoutUsuariosInputObjectSchema } from "./EstadoCreateWithoutUsuariosInput.schema.ts";
import { EstadoUncheckedCreateWithoutUsuariosInputObjectSchema as EstadoUncheckedCreateWithoutUsuariosInputObjectSchema } from "./EstadoUncheckedCreateWithoutUsuariosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutUsuariosInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutUsuariosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutUsuariosInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutUsuariosInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutUsuariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutUsuariosInput>;
export const EstadoCreateNestedOneWithoutUsuariosInputObjectZodSchema = makeSchema();
