import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ConfiguracionCreateWithoutUsuarioInputObjectSchema as ConfiguracionCreateWithoutUsuarioInputObjectSchema } from "./ConfiguracionCreateWithoutUsuarioInput.schema.ts";
import { ConfiguracionUncheckedCreateWithoutUsuarioInputObjectSchema as ConfiguracionUncheckedCreateWithoutUsuarioInputObjectSchema } from "./ConfiguracionUncheckedCreateWithoutUsuarioInput.schema.ts";
import { ConfiguracionUncheckedUpdateWithoutUsuarioInputObjectSchema as ConfiguracionUncheckedUpdateWithoutUsuarioInputObjectSchema } from "./ConfiguracionUncheckedUpdateWithoutUsuarioInput.schema.ts";
import { ConfiguracionUpdateWithoutUsuarioInputObjectSchema as ConfiguracionUpdateWithoutUsuarioInputObjectSchema } from "./ConfiguracionUpdateWithoutUsuarioInput.schema.ts";
import { ConfiguracionWhereInputObjectSchema as ConfiguracionWhereInputObjectSchema } from "./ConfiguracionWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => ConfiguracionUpdateWithoutUsuarioInputObjectSchema),
				z.lazy(
					() => ConfiguracionUncheckedUpdateWithoutUsuarioInputObjectSchema,
				),
			]),
			create: z.union([
				z.lazy(() => ConfiguracionCreateWithoutUsuarioInputObjectSchema),
				z.lazy(
					() => ConfiguracionUncheckedCreateWithoutUsuarioInputObjectSchema,
				),
			]),
			where: z.lazy(() => ConfiguracionWhereInputObjectSchema).optional(),
		})
		.strict();
export const ConfiguracionUpsertWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ConfiguracionUpsertWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUpsertWithoutUsuarioInput>;
export const ConfiguracionUpsertWithoutUsuarioInputObjectZodSchema =
	makeSchema();
