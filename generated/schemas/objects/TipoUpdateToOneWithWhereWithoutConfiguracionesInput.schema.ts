import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { TipoUncheckedUpdateWithoutConfiguracionesInputObjectSchema as TipoUncheckedUpdateWithoutConfiguracionesInputObjectSchema } from "./TipoUncheckedUpdateWithoutConfiguracionesInput.schema.ts";
import { TipoUpdateWithoutConfiguracionesInputObjectSchema as TipoUpdateWithoutConfiguracionesInputObjectSchema } from "./TipoUpdateWithoutConfiguracionesInput.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./TipoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => TipoWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => TipoUpdateWithoutConfiguracionesInputObjectSchema),
				z.lazy(
					() => TipoUncheckedUpdateWithoutConfiguracionesInputObjectSchema,
				),
			]),
		})
		.strict();
export const TipoUpdateToOneWithWhereWithoutConfiguracionesInputObjectSchema: z.ZodType<Prisma.TipoUpdateToOneWithWhereWithoutConfiguracionesInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUpdateToOneWithWhereWithoutConfiguracionesInput>;
export const TipoUpdateToOneWithWhereWithoutConfiguracionesInputObjectZodSchema =
	makeSchema();
