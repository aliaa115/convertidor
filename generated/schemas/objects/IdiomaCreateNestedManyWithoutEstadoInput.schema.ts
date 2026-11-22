import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { IdiomaCreateManyEstadoInputEnvelopeObjectSchema as IdiomaCreateManyEstadoInputEnvelopeObjectSchema } from "./IdiomaCreateManyEstadoInputEnvelope.schema.ts";
import { IdiomaCreateOrConnectWithoutEstadoInputObjectSchema as IdiomaCreateOrConnectWithoutEstadoInputObjectSchema } from "./IdiomaCreateOrConnectWithoutEstadoInput.schema.ts";
import { IdiomaCreateWithoutEstadoInputObjectSchema as IdiomaCreateWithoutEstadoInputObjectSchema } from "./IdiomaCreateWithoutEstadoInput.schema.ts";
import { IdiomaUncheckedCreateWithoutEstadoInputObjectSchema as IdiomaUncheckedCreateWithoutEstadoInputObjectSchema } from "./IdiomaUncheckedCreateWithoutEstadoInput.schema.ts";
import { IdiomaWhereUniqueInputObjectSchema as IdiomaWhereUniqueInputObjectSchema } from "./IdiomaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => IdiomaCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => IdiomaCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => IdiomaUncheckedCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => IdiomaUncheckedCreateWithoutEstadoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => IdiomaCreateOrConnectWithoutEstadoInputObjectSchema), z.lazy(() => IdiomaCreateOrConnectWithoutEstadoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => IdiomaCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => IdiomaWhereUniqueInputObjectSchema), z.lazy(() => IdiomaWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const IdiomaCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.IdiomaCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaCreateNestedManyWithoutEstadoInput>;
export const IdiomaCreateNestedManyWithoutEstadoInputObjectZodSchema = makeSchema();
