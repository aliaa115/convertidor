import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateWithoutUsuariosInputObjectSchema as EstadoCreateWithoutUsuariosInputObjectSchema } from "./EstadoCreateWithoutUsuariosInput.schema.ts";
import { EstadoUncheckedCreateWithoutUsuariosInputObjectSchema as EstadoUncheckedCreateWithoutUsuariosInputObjectSchema } from "./EstadoUncheckedCreateWithoutUsuariosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EstadoCreateWithoutUsuariosInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutUsuariosInputObjectSchema)]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutUsuariosInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutUsuariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutUsuariosInput>;
export const EstadoCreateOrConnectWithoutUsuariosInputObjectZodSchema = makeSchema();
