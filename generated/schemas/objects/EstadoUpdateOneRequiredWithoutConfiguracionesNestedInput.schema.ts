import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutConfiguracionesInputObjectSchema as EstadoCreateOrConnectWithoutConfiguracionesInputObjectSchema } from "./EstadoCreateOrConnectWithoutConfiguracionesInput.schema.ts";
import { EstadoCreateWithoutConfiguracionesInputObjectSchema as EstadoCreateWithoutConfiguracionesInputObjectSchema } from "./EstadoCreateWithoutConfiguracionesInput.schema.ts";
import { EstadoUncheckedCreateWithoutConfiguracionesInputObjectSchema as EstadoUncheckedCreateWithoutConfiguracionesInputObjectSchema } from "./EstadoUncheckedCreateWithoutConfiguracionesInput.schema.ts";
import { EstadoUncheckedUpdateWithoutConfiguracionesInputObjectSchema as EstadoUncheckedUpdateWithoutConfiguracionesInputObjectSchema } from "./EstadoUncheckedUpdateWithoutConfiguracionesInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutConfiguracionesInputObjectSchema as EstadoUpdateToOneWithWhereWithoutConfiguracionesInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutConfiguracionesInput.schema.ts";
import { EstadoUpdateWithoutConfiguracionesInputObjectSchema as EstadoUpdateWithoutConfiguracionesInputObjectSchema } from "./EstadoUpdateWithoutConfiguracionesInput.schema.ts";
import { EstadoUpsertWithoutConfiguracionesInputObjectSchema as EstadoUpsertWithoutConfiguracionesInputObjectSchema } from "./EstadoUpsertWithoutConfiguracionesInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutConfiguracionesInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutConfiguracionesInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutConfiguracionesInputObjectSchema).optional(),
			upsert: z.lazy(() => EstadoUpsertWithoutConfiguracionesInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => EstadoUpdateToOneWithWhereWithoutConfiguracionesInputObjectSchema),
					z.lazy(() => EstadoUpdateWithoutConfiguracionesInputObjectSchema),
					z.lazy(() => EstadoUncheckedUpdateWithoutConfiguracionesInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutConfiguracionesNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutConfiguracionesNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutConfiguracionesNestedInput>;
export const EstadoUpdateOneRequiredWithoutConfiguracionesNestedInputObjectZodSchema = makeSchema();
