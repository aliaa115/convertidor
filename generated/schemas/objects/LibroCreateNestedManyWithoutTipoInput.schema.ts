import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateManyTipoInputEnvelopeObjectSchema as LibroCreateManyTipoInputEnvelopeObjectSchema } from "./LibroCreateManyTipoInputEnvelope.schema.ts";
import { LibroCreateOrConnectWithoutTipoInputObjectSchema as LibroCreateOrConnectWithoutTipoInputObjectSchema } from "./LibroCreateOrConnectWithoutTipoInput.schema.ts";
import { LibroCreateWithoutTipoInputObjectSchema as LibroCreateWithoutTipoInputObjectSchema } from "./LibroCreateWithoutTipoInput.schema.ts";
import { LibroUncheckedCreateWithoutTipoInputObjectSchema as LibroUncheckedCreateWithoutTipoInputObjectSchema } from "./LibroUncheckedCreateWithoutTipoInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroCreateWithoutTipoInputObjectSchema),
					z.lazy(() => LibroCreateWithoutTipoInputObjectSchema).array(),
					z.lazy(() => LibroUncheckedCreateWithoutTipoInputObjectSchema),
					z.lazy(() => LibroUncheckedCreateWithoutTipoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => LibroCreateOrConnectWithoutTipoInputObjectSchema), z.lazy(() => LibroCreateOrConnectWithoutTipoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => LibroCreateManyTipoInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => LibroWhereUniqueInputObjectSchema), z.lazy(() => LibroWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const LibroCreateNestedManyWithoutTipoInputObjectSchema: z.ZodType<Prisma.LibroCreateNestedManyWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateNestedManyWithoutTipoInput>;
export const LibroCreateNestedManyWithoutTipoInputObjectZodSchema = makeSchema();
