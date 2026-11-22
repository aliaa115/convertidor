import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateManyEstadoInputEnvelopeObjectSchema as CapituloCreateManyEstadoInputEnvelopeObjectSchema } from "./CapituloCreateManyEstadoInputEnvelope.schema.ts";
import { CapituloCreateOrConnectWithoutEstadoInputObjectSchema as CapituloCreateOrConnectWithoutEstadoInputObjectSchema } from "./CapituloCreateOrConnectWithoutEstadoInput.schema.ts";
import { CapituloCreateWithoutEstadoInputObjectSchema as CapituloCreateWithoutEstadoInputObjectSchema } from "./CapituloCreateWithoutEstadoInput.schema.ts";
import { CapituloUncheckedCreateWithoutEstadoInputObjectSchema as CapituloUncheckedCreateWithoutEstadoInputObjectSchema } from "./CapituloUncheckedCreateWithoutEstadoInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./CapituloWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => CapituloCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => CapituloCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => CapituloUncheckedCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => CapituloUncheckedCreateWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => CapituloCreateOrConnectWithoutEstadoInputObjectSchema),
					z
						.lazy(() => CapituloCreateOrConnectWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => CapituloCreateManyEstadoInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => CapituloWhereUniqueInputObjectSchema),
					z.lazy(() => CapituloWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const CapituloCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.CapituloCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloCreateNestedManyWithoutEstadoInput>;
export const CapituloCreateNestedManyWithoutEstadoInputObjectZodSchema =
	makeSchema();
