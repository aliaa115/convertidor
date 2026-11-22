import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateWithoutConfiguracionesInputObjectSchema as EstadoCreateWithoutConfiguracionesInputObjectSchema } from "./EstadoCreateWithoutConfiguracionesInput.schema.ts";
import { EstadoUncheckedCreateWithoutConfiguracionesInputObjectSchema as EstadoUncheckedCreateWithoutConfiguracionesInputObjectSchema } from "./EstadoUncheckedCreateWithoutConfiguracionesInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EstadoCreateWithoutConfiguracionesInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutConfiguracionesInputObjectSchema)]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutConfiguracionesInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutConfiguracionesInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutConfiguracionesInput>;
export const EstadoCreateOrConnectWithoutConfiguracionesInputObjectZodSchema = makeSchema();
