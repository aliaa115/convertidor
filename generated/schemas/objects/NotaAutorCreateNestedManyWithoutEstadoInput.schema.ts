import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotaAutorCreateManyEstadoInputEnvelopeObjectSchema as NotaAutorCreateManyEstadoInputEnvelopeObjectSchema } from "./NotaAutorCreateManyEstadoInputEnvelope.schema.ts";
import { NotaAutorCreateOrConnectWithoutEstadoInputObjectSchema as NotaAutorCreateOrConnectWithoutEstadoInputObjectSchema } from "./NotaAutorCreateOrConnectWithoutEstadoInput.schema.ts";
import { NotaAutorCreateWithoutEstadoInputObjectSchema as NotaAutorCreateWithoutEstadoInputObjectSchema } from "./NotaAutorCreateWithoutEstadoInput.schema.ts";
import { NotaAutorUncheckedCreateWithoutEstadoInputObjectSchema as NotaAutorUncheckedCreateWithoutEstadoInputObjectSchema } from "./NotaAutorUncheckedCreateWithoutEstadoInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./NotaAutorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => NotaAutorCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => NotaAutorCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => NotaAutorUncheckedCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => NotaAutorUncheckedCreateWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => NotaAutorCreateOrConnectWithoutEstadoInputObjectSchema),
					z
						.lazy(() => NotaAutorCreateOrConnectWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => NotaAutorCreateManyEstadoInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => NotaAutorWhereUniqueInputObjectSchema),
					z.lazy(() => NotaAutorWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const NotaAutorCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.NotaAutorCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorCreateNestedManyWithoutEstadoInput>;
export const NotaAutorCreateNestedManyWithoutEstadoInputObjectZodSchema =
	makeSchema();
