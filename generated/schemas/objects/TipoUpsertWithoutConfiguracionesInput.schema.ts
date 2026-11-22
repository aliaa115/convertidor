import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { TipoCreateWithoutConfiguracionesInputObjectSchema as TipoCreateWithoutConfiguracionesInputObjectSchema } from "./TipoCreateWithoutConfiguracionesInput.schema.ts";
import { TipoUncheckedCreateWithoutConfiguracionesInputObjectSchema as TipoUncheckedCreateWithoutConfiguracionesInputObjectSchema } from "./TipoUncheckedCreateWithoutConfiguracionesInput.schema.ts";
import { TipoUncheckedUpdateWithoutConfiguracionesInputObjectSchema as TipoUncheckedUpdateWithoutConfiguracionesInputObjectSchema } from "./TipoUncheckedUpdateWithoutConfiguracionesInput.schema.ts";
import { TipoUpdateWithoutConfiguracionesInputObjectSchema as TipoUpdateWithoutConfiguracionesInputObjectSchema } from "./TipoUpdateWithoutConfiguracionesInput.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./TipoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => TipoUpdateWithoutConfiguracionesInputObjectSchema),
				z.lazy(
					() => TipoUncheckedUpdateWithoutConfiguracionesInputObjectSchema,
				),
			]),
			create: z.union([
				z.lazy(() => TipoCreateWithoutConfiguracionesInputObjectSchema),
				z.lazy(
					() => TipoUncheckedCreateWithoutConfiguracionesInputObjectSchema,
				),
			]),
			where: z.lazy(() => TipoWhereInputObjectSchema).optional(),
		})
		.strict();
export const TipoUpsertWithoutConfiguracionesInputObjectSchema: z.ZodType<Prisma.TipoUpsertWithoutConfiguracionesInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUpsertWithoutConfiguracionesInput>;
export const TipoUpsertWithoutConfiguracionesInputObjectZodSchema =
	makeSchema();
