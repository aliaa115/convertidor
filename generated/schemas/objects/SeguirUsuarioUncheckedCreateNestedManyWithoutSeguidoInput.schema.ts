import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { SeguirUsuarioCreateManySeguidoInputEnvelopeObjectSchema as SeguirUsuarioCreateManySeguidoInputEnvelopeObjectSchema } from "./SeguirUsuarioCreateManySeguidoInputEnvelope.schema.ts";
import { SeguirUsuarioCreateOrConnectWithoutSeguidoInputObjectSchema as SeguirUsuarioCreateOrConnectWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioCreateOrConnectWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioCreateWithoutSeguidoInputObjectSchema as SeguirUsuarioCreateWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioCreateWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioUncheckedCreateWithoutSeguidoInputObjectSchema as SeguirUsuarioUncheckedCreateWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioUncheckedCreateWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./SeguirUsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => SeguirUsuarioCreateWithoutSeguidoInputObjectSchema),
					z
						.lazy(() => SeguirUsuarioCreateWithoutSeguidoInputObjectSchema)
						.array(),
					z.lazy(
						() => SeguirUsuarioUncheckedCreateWithoutSeguidoInputObjectSchema,
					),
					z
						.lazy(
							() => SeguirUsuarioUncheckedCreateWithoutSeguidoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(
						() => SeguirUsuarioCreateOrConnectWithoutSeguidoInputObjectSchema,
					),
					z
						.lazy(
							() => SeguirUsuarioCreateOrConnectWithoutSeguidoInputObjectSchema,
						)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => SeguirUsuarioCreateManySeguidoInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema),
					z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const SeguirUsuarioUncheckedCreateNestedManyWithoutSeguidoInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUncheckedCreateNestedManyWithoutSeguidoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUncheckedCreateNestedManyWithoutSeguidoInput>;
export const SeguirUsuarioUncheckedCreateNestedManyWithoutSeguidoInputObjectZodSchema =
	makeSchema();
