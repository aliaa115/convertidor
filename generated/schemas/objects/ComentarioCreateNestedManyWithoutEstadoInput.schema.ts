import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateManyEstadoInputEnvelopeObjectSchema as ComentarioCreateManyEstadoInputEnvelopeObjectSchema } from "./ComentarioCreateManyEstadoInputEnvelope.schema.ts";
import { ComentarioCreateOrConnectWithoutEstadoInputObjectSchema as ComentarioCreateOrConnectWithoutEstadoInputObjectSchema } from "./ComentarioCreateOrConnectWithoutEstadoInput.schema.ts";
import { ComentarioCreateWithoutEstadoInputObjectSchema as ComentarioCreateWithoutEstadoInputObjectSchema } from "./ComentarioCreateWithoutEstadoInput.schema.ts";
import { ComentarioUncheckedCreateWithoutEstadoInputObjectSchema as ComentarioUncheckedCreateWithoutEstadoInputObjectSchema } from "./ComentarioUncheckedCreateWithoutEstadoInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ComentarioCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => ComentarioCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => ComentarioUncheckedCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => ComentarioUncheckedCreateWithoutEstadoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => ComentarioCreateOrConnectWithoutEstadoInputObjectSchema), z.lazy(() => ComentarioCreateOrConnectWithoutEstadoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => ComentarioCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => ComentarioWhereUniqueInputObjectSchema), z.lazy(() => ComentarioWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const ComentarioCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.ComentarioCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateNestedManyWithoutEstadoInput>;
export const ComentarioCreateNestedManyWithoutEstadoInputObjectZodSchema = makeSchema();
