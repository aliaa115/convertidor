import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaCreateManyUsuarioInputEnvelopeObjectSchema as ListaCreateManyUsuarioInputEnvelopeObjectSchema } from "./ListaCreateManyUsuarioInputEnvelope.schema.ts";
import { ListaCreateOrConnectWithoutUsuarioInputObjectSchema as ListaCreateOrConnectWithoutUsuarioInputObjectSchema } from "./ListaCreateOrConnectWithoutUsuarioInput.schema.ts";
import { ListaCreateWithoutUsuarioInputObjectSchema as ListaCreateWithoutUsuarioInputObjectSchema } from "./ListaCreateWithoutUsuarioInput.schema.ts";
import { ListaUncheckedCreateWithoutUsuarioInputObjectSchema as ListaUncheckedCreateWithoutUsuarioInputObjectSchema } from "./ListaUncheckedCreateWithoutUsuarioInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./ListaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ListaCreateWithoutUsuarioInputObjectSchema),
					z.lazy(() => ListaCreateWithoutUsuarioInputObjectSchema).array(),
					z.lazy(() => ListaUncheckedCreateWithoutUsuarioInputObjectSchema),
					z
						.lazy(() => ListaUncheckedCreateWithoutUsuarioInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => ListaCreateOrConnectWithoutUsuarioInputObjectSchema),
					z
						.lazy(() => ListaCreateOrConnectWithoutUsuarioInputObjectSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => ListaCreateManyUsuarioInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => ListaWhereUniqueInputObjectSchema),
					z.lazy(() => ListaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const ListaCreateNestedManyWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.ListaCreateNestedManyWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaCreateNestedManyWithoutUsuarioInput>;
export const ListaCreateNestedManyWithoutUsuarioInputObjectZodSchema =
	makeSchema();
