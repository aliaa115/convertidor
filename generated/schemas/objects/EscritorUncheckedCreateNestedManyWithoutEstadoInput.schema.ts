import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateManyEstadoInputEnvelopeObjectSchema as EscritorCreateManyEstadoInputEnvelopeObjectSchema } from "./EscritorCreateManyEstadoInputEnvelope.schema.ts";
import { EscritorCreateOrConnectWithoutEstadoInputObjectSchema as EscritorCreateOrConnectWithoutEstadoInputObjectSchema } from "./EscritorCreateOrConnectWithoutEstadoInput.schema.ts";
import { EscritorCreateWithoutEstadoInputObjectSchema as EscritorCreateWithoutEstadoInputObjectSchema } from "./EscritorCreateWithoutEstadoInput.schema.ts";
import { EscritorUncheckedCreateWithoutEstadoInputObjectSchema as EscritorUncheckedCreateWithoutEstadoInputObjectSchema } from "./EscritorUncheckedCreateWithoutEstadoInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EscritorCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => EscritorCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => EscritorUncheckedCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => EscritorUncheckedCreateWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => EscritorCreateOrConnectWithoutEstadoInputObjectSchema),
					z
						.lazy(() => EscritorCreateOrConnectWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => EscritorCreateManyEstadoInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => EscritorWhereUniqueInputObjectSchema),
					z.lazy(() => EscritorWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const EscritorUncheckedCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.EscritorUncheckedCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUncheckedCreateNestedManyWithoutEstadoInput>;
export const EscritorUncheckedCreateNestedManyWithoutEstadoInputObjectZodSchema =
	makeSchema();
