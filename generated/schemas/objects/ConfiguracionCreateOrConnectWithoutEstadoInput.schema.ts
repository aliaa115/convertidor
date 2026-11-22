import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionCreateWithoutEstadoInputObjectSchema as ConfiguracionCreateWithoutEstadoInputObjectSchema } from "./ConfiguracionCreateWithoutEstadoInput.schema.ts";
import { ConfiguracionUncheckedCreateWithoutEstadoInputObjectSchema as ConfiguracionUncheckedCreateWithoutEstadoInputObjectSchema } from "./ConfiguracionUncheckedCreateWithoutEstadoInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./ConfiguracionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => ConfiguracionCreateWithoutEstadoInputObjectSchema), z.lazy(() => ConfiguracionUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const ConfiguracionCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ConfiguracionCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionCreateOrConnectWithoutEstadoInput>;
export const ConfiguracionCreateOrConnectWithoutEstadoInputObjectZodSchema = makeSchema();
