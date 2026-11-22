import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotaAutorCreateManyCapituloInputEnvelopeObjectSchema as NotaAutorCreateManyCapituloInputEnvelopeObjectSchema } from "./NotaAutorCreateManyCapituloInputEnvelope.schema.ts";
import { NotaAutorCreateOrConnectWithoutCapituloInputObjectSchema as NotaAutorCreateOrConnectWithoutCapituloInputObjectSchema } from "./NotaAutorCreateOrConnectWithoutCapituloInput.schema.ts";
import { NotaAutorCreateWithoutCapituloInputObjectSchema as NotaAutorCreateWithoutCapituloInputObjectSchema } from "./NotaAutorCreateWithoutCapituloInput.schema.ts";
import { NotaAutorUncheckedCreateWithoutCapituloInputObjectSchema as NotaAutorUncheckedCreateWithoutCapituloInputObjectSchema } from "./NotaAutorUncheckedCreateWithoutCapituloInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./NotaAutorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => NotaAutorCreateWithoutCapituloInputObjectSchema),
					z.lazy(() => NotaAutorCreateWithoutCapituloInputObjectSchema).array(),
					z.lazy(
						() => NotaAutorUncheckedCreateWithoutCapituloInputObjectSchema,
					),
					z
						.lazy(
							() => NotaAutorUncheckedCreateWithoutCapituloInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(
						() => NotaAutorCreateOrConnectWithoutCapituloInputObjectSchema,
					),
					z
						.lazy(
							() => NotaAutorCreateOrConnectWithoutCapituloInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => NotaAutorCreateManyCapituloInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => NotaAutorWhereUniqueInputObjectSchema),
					z.lazy(() => NotaAutorWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const NotaAutorCreateNestedManyWithoutCapituloInputObjectSchema: z.ZodType<Prisma.NotaAutorCreateNestedManyWithoutCapituloInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorCreateNestedManyWithoutCapituloInput>;
export const NotaAutorCreateNestedManyWithoutCapituloInputObjectZodSchema =
	makeSchema();
