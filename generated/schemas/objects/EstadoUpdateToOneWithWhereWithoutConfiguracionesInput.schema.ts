import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoUncheckedUpdateWithoutConfiguracionesInputObjectSchema as EstadoUncheckedUpdateWithoutConfiguracionesInputObjectSchema } from "./EstadoUncheckedUpdateWithoutConfiguracionesInput.schema.ts";
import { EstadoUpdateWithoutConfiguracionesInputObjectSchema as EstadoUpdateWithoutConfiguracionesInputObjectSchema } from "./EstadoUpdateWithoutConfiguracionesInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => EstadoUpdateWithoutConfiguracionesInputObjectSchema),
				z.lazy(
					() => EstadoUncheckedUpdateWithoutConfiguracionesInputObjectSchema,
				),
			]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutConfiguracionesInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutConfiguracionesInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutConfiguracionesInput>;
export const EstadoUpdateToOneWithWhereWithoutConfiguracionesInputObjectZodSchema =
	makeSchema();
