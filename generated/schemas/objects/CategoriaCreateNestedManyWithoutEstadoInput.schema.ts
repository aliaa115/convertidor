import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CategoriaCreateManyEstadoInputEnvelopeObjectSchema as CategoriaCreateManyEstadoInputEnvelopeObjectSchema } from "./CategoriaCreateManyEstadoInputEnvelope.schema.ts";
import { CategoriaCreateOrConnectWithoutEstadoInputObjectSchema as CategoriaCreateOrConnectWithoutEstadoInputObjectSchema } from "./CategoriaCreateOrConnectWithoutEstadoInput.schema.ts";
import { CategoriaCreateWithoutEstadoInputObjectSchema as CategoriaCreateWithoutEstadoInputObjectSchema } from "./CategoriaCreateWithoutEstadoInput.schema.ts";
import { CategoriaUncheckedCreateWithoutEstadoInputObjectSchema as CategoriaUncheckedCreateWithoutEstadoInputObjectSchema } from "./CategoriaUncheckedCreateWithoutEstadoInput.schema.ts";
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from "./CategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => CategoriaCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => CategoriaCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => CategoriaUncheckedCreateWithoutEstadoInputObjectSchema),
					z
						.lazy(() => CategoriaUncheckedCreateWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => CategoriaCreateOrConnectWithoutEstadoInputObjectSchema),
					z
						.lazy(() => CategoriaCreateOrConnectWithoutEstadoInputObjectSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => CategoriaCreateManyEstadoInputEnvelopeObjectSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => CategoriaWhereUniqueInputObjectSchema),
					z.lazy(() => CategoriaWhereUniqueInputObjectSchema).array(),
				])
				.optional(),
		})
		.strict();
export const CategoriaCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.CategoriaCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaCreateNestedManyWithoutEstadoInput>;
export const CategoriaCreateNestedManyWithoutEstadoInputObjectZodSchema =
	makeSchema();
