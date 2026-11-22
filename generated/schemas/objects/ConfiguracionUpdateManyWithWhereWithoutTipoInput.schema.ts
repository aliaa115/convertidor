import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ConfiguracionScalarWhereInputObjectSchema as ConfiguracionScalarWhereInputObjectSchema } from "./ConfiguracionScalarWhereInput.schema.ts";
import { ConfiguracionUncheckedUpdateManyWithoutTipoInputObjectSchema as ConfiguracionUncheckedUpdateManyWithoutTipoInputObjectSchema } from "./ConfiguracionUncheckedUpdateManyWithoutTipoInput.schema.ts";
import { ConfiguracionUpdateManyMutationInputObjectSchema as ConfiguracionUpdateManyMutationInputObjectSchema } from "./ConfiguracionUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ConfiguracionScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => ConfiguracionUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => ConfiguracionUncheckedUpdateManyWithoutTipoInputObjectSchema,
				),
			]),
		})
		.strict();
export const ConfiguracionUpdateManyWithWhereWithoutTipoInputObjectSchema: z.ZodType<Prisma.ConfiguracionUpdateManyWithWhereWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUpdateManyWithWhereWithoutTipoInput>;
export const ConfiguracionUpdateManyWithWhereWithoutTipoInputObjectZodSchema =
	makeSchema();
