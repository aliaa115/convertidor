import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ListaCreateManyEstadoInputEnvelopeObjectSchema as ListaCreateManyEstadoInputEnvelopeObjectSchema } from "./ListaCreateManyEstadoInputEnvelope.schema.ts";
import { ListaCreateOrConnectWithoutEstadoInputObjectSchema as ListaCreateOrConnectWithoutEstadoInputObjectSchema } from "./ListaCreateOrConnectWithoutEstadoInput.schema.ts";
import { ListaCreateWithoutEstadoInputObjectSchema as ListaCreateWithoutEstadoInputObjectSchema } from "./ListaCreateWithoutEstadoInput.schema.ts";
import { ListaUncheckedCreateWithoutEstadoInputObjectSchema as ListaUncheckedCreateWithoutEstadoInputObjectSchema } from "./ListaUncheckedCreateWithoutEstadoInput.schema.ts";
import { ListaWhereUniqueInputObjectSchema as ListaWhereUniqueInputObjectSchema } from "./ListaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ListaCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => ListaCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => ListaUncheckedCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => ListaUncheckedCreateWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => ListaCreateOrConnectWithoutEstadoInputObjectSchema),
					z
						.lazy(() => ListaCreateOrConnectWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => ListaCreateManyEstadoInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => ListaWhereUniqueInputObjectSchema),
					z.lazy(() => ListaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const ListaUncheckedCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ListaUncheckedCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ListaUncheckedCreateNestedManyWithoutEstadoInput>;
export const ListaUncheckedCreateNestedManyWithoutEstadoInputObjectZodSchema =
	makeSchema();
