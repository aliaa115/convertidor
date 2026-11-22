import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ConfiguracionCreateOrConnectWithoutUsuarioInputObjectSchema as ConfiguracionCreateOrConnectWithoutUsuarioInputObjectSchema } from "./ConfiguracionCreateOrConnectWithoutUsuarioInput.schema.ts";
import { ConfiguracionCreateWithoutUsuarioInputObjectSchema as ConfiguracionCreateWithoutUsuarioInputObjectSchema } from "./ConfiguracionCreateWithoutUsuarioInput.schema.ts";
import { ConfiguracionUncheckedCreateWithoutUsuarioInputObjectSchema as ConfiguracionUncheckedCreateWithoutUsuarioInputObjectSchema } from "./ConfiguracionUncheckedCreateWithoutUsuarioInput.schema.ts";
import { ConfiguracionUncheckedUpdateWithoutUsuarioInputObjectSchema as ConfiguracionUncheckedUpdateWithoutUsuarioInputObjectSchema } from "./ConfiguracionUncheckedUpdateWithoutUsuarioInput.schema.ts";
import { ConfiguracionUpdateToOneWithWhereWithoutUsuarioInputObjectSchema as ConfiguracionUpdateToOneWithWhereWithoutUsuarioInputObjectSchema } from "./ConfiguracionUpdateToOneWithWhereWithoutUsuarioInput.schema.ts";
import { ConfiguracionUpdateWithoutUsuarioInputObjectSchema as ConfiguracionUpdateWithoutUsuarioInputObjectSchema } from "./ConfiguracionUpdateWithoutUsuarioInput.schema.ts";
import { ConfiguracionUpsertWithoutUsuarioInputObjectSchema as ConfiguracionUpsertWithoutUsuarioInputObjectSchema } from "./ConfiguracionUpsertWithoutUsuarioInput.schema.ts";
import { ConfiguracionWhereInputObjectSchema as ConfiguracionWhereInputObjectSchema } from "./ConfiguracionWhereInput.schema.ts";
import { ConfiguracionWhereUniqueInputObjectSchema as ConfiguracionWhereUniqueInputObjectSchema } from "./ConfiguracionWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => ConfiguracionCreateWithoutUsuarioInputObjectSchema), z.lazy(() => ConfiguracionUncheckedCreateWithoutUsuarioInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => ConfiguracionCreateOrConnectWithoutUsuarioInputObjectSchema).optional(),
			upsert: z.lazy(() => ConfiguracionUpsertWithoutUsuarioInputObjectSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => ConfiguracionWhereInputObjectSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => ConfiguracionWhereInputObjectSchema)]).optional(),
			connect: z.lazy(() => ConfiguracionWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => ConfiguracionUpdateToOneWithWhereWithoutUsuarioInputObjectSchema),
					z.lazy(() => ConfiguracionUpdateWithoutUsuarioInputObjectSchema),
					z.lazy(() => ConfiguracionUncheckedUpdateWithoutUsuarioInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const ConfiguracionUpdateOneWithoutUsuarioNestedInputObjectSchema: z.ZodType<Prisma.ConfiguracionUpdateOneWithoutUsuarioNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUpdateOneWithoutUsuarioNestedInput>;
export const ConfiguracionUpdateOneWithoutUsuarioNestedInputObjectZodSchema = makeSchema();
