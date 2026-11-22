import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutConfiguracionesInputObjectSchema as EstadoCreateOrConnectWithoutConfiguracionesInputObjectSchema } from "./EstadoCreateOrConnectWithoutConfiguracionesInput.schema.ts";
import { EstadoCreateWithoutConfiguracionesInputObjectSchema as EstadoCreateWithoutConfiguracionesInputObjectSchema } from "./EstadoCreateWithoutConfiguracionesInput.schema.ts";
import { EstadoUncheckedCreateWithoutConfiguracionesInputObjectSchema as EstadoUncheckedCreateWithoutConfiguracionesInputObjectSchema } from "./EstadoUncheckedCreateWithoutConfiguracionesInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutConfiguracionesInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutConfiguracionesInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutConfiguracionesInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutConfiguracionesInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutConfiguracionesInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutConfiguracionesInput>;
export const EstadoCreateNestedOneWithoutConfiguracionesInputObjectZodSchema = makeSchema();
