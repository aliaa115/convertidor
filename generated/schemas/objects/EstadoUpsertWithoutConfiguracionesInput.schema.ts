import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateWithoutConfiguracionesInputObjectSchema as EstadoCreateWithoutConfiguracionesInputObjectSchema } from "./EstadoCreateWithoutConfiguracionesInput.schema.ts";
import { EstadoUncheckedCreateWithoutConfiguracionesInputObjectSchema as EstadoUncheckedCreateWithoutConfiguracionesInputObjectSchema } from "./EstadoUncheckedCreateWithoutConfiguracionesInput.schema.ts";
import { EstadoUncheckedUpdateWithoutConfiguracionesInputObjectSchema as EstadoUncheckedUpdateWithoutConfiguracionesInputObjectSchema } from "./EstadoUncheckedUpdateWithoutConfiguracionesInput.schema.ts";
import { EstadoUpdateWithoutConfiguracionesInputObjectSchema as EstadoUpdateWithoutConfiguracionesInputObjectSchema } from "./EstadoUpdateWithoutConfiguracionesInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => EstadoUpdateWithoutConfiguracionesInputObjectSchema), z.lazy(() => EstadoUncheckedUpdateWithoutConfiguracionesInputObjectSchema)]),
			create: z.union([z.lazy(() => EstadoCreateWithoutConfiguracionesInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutConfiguracionesInputObjectSchema)]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutConfiguracionesInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutConfiguracionesInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutConfiguracionesInput>;
export const EstadoUpsertWithoutConfiguracionesInputObjectZodSchema = makeSchema();
