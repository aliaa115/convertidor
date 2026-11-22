import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionUncheckedUpdateWithoutUsuarioInputObjectSchema as ConfiguracionUncheckedUpdateWithoutUsuarioInputObjectSchema } from "./ConfiguracionUncheckedUpdateWithoutUsuarioInput.schema.ts";
import { ConfiguracionUpdateWithoutUsuarioInputObjectSchema as ConfiguracionUpdateWithoutUsuarioInputObjectSchema } from "./ConfiguracionUpdateWithoutUsuarioInput.schema.ts";
import { ConfiguracionWhereInputObjectSchema as ConfiguracionWhereInputObjectSchema } from "./ConfiguracionWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ConfiguracionWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => ConfiguracionUpdateWithoutUsuarioInputObjectSchema), z.lazy(() => ConfiguracionUncheckedUpdateWithoutUsuarioInputObjectSchema)]),
		})
		.strict();
export const ConfiguracionUpdateToOneWithWhereWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ConfiguracionUpdateToOneWithWhereWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUpdateToOneWithWhereWithoutUsuarioInput>;
export const ConfiguracionUpdateToOneWithWhereWithoutUsuarioInputObjectZodSchema = makeSchema();
