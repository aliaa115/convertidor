import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ConfiguracionScalarWhereInputObjectSchema as ConfiguracionScalarWhereInputObjectSchema } from "./ConfiguracionScalarWhereInput.schema.ts";
import { ConfiguracionUncheckedUpdateManyWithoutEstadoInputObjectSchema as ConfiguracionUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./ConfiguracionUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { ConfiguracionUpdateManyMutationInputObjectSchema as ConfiguracionUpdateManyMutationInputObjectSchema } from "./ConfiguracionUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ConfiguracionScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => ConfiguracionUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => ConfiguracionUncheckedUpdateManyWithoutEstadoInputObjectSchema,
				),
			]),
		})
		.strict();
export const ConfiguracionUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ConfiguracionUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ConfiguracionUpdateManyWithWhereWithoutEstadoInput>;
export const ConfiguracionUpdateManyWithWhereWithoutEstadoInputObjectZodSchema =
	makeSchema();
