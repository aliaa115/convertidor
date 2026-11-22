import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCategoriaCreateManyEstadoInputEnvelopeObjectSchema as LibroCategoriaCreateManyEstadoInputEnvelopeObjectSchema } from "./LibroCategoriaCreateManyEstadoInputEnvelope.schema.ts";
import { LibroCategoriaCreateOrConnectWithoutEstadoInputObjectSchema as LibroCategoriaCreateOrConnectWithoutEstadoInputObjectSchema } from "./LibroCategoriaCreateOrConnectWithoutEstadoInput.schema.ts";
import { LibroCategoriaCreateWithoutEstadoInputObjectSchema as LibroCategoriaCreateWithoutEstadoInputObjectSchema } from "./LibroCategoriaCreateWithoutEstadoInput.schema.ts";
import { LibroCategoriaUncheckedCreateWithoutEstadoInputObjectSchema as LibroCategoriaUncheckedCreateWithoutEstadoInputObjectSchema } from "./LibroCategoriaUncheckedCreateWithoutEstadoInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./LibroCategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroCategoriaCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => LibroCategoriaCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => LibroCategoriaUncheckedCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => LibroCategoriaUncheckedCreateWithoutEstadoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([z.lazy(() => LibroCategoriaCreateOrConnectWithoutEstadoInputObjectSchema), z.lazy(() => LibroCategoriaCreateOrConnectWithoutEstadoInputObjectSchema).array()])
				.optional(),
			createMany: z.lazy(() => LibroCategoriaCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema), z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const LibroCategoriaCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.LibroCategoriaCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCreateNestedManyWithoutEstadoInput>;
export const LibroCategoriaCreateNestedManyWithoutEstadoInputObjectZodSchema = makeSchema();
