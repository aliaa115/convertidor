import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotaAutorCreateManyEstadoInputEnvelopeObjectSchema as NotaAutorCreateManyEstadoInputEnvelopeObjectSchema } from "./NotaAutorCreateManyEstadoInputEnvelope.schema.ts";
import { NotaAutorCreateOrConnectWithoutEstadoInputObjectSchema as NotaAutorCreateOrConnectWithoutEstadoInputObjectSchema } from "./NotaAutorCreateOrConnectWithoutEstadoInput.schema.ts";
import { NotaAutorCreateWithoutEstadoInputObjectSchema as NotaAutorCreateWithoutEstadoInputObjectSchema } from "./NotaAutorCreateWithoutEstadoInput.schema.ts";
import { NotaAutorScalarWhereInputObjectSchema as NotaAutorScalarWhereInputObjectSchema } from "./NotaAutorScalarWhereInput.schema.ts";
import { NotaAutorUncheckedCreateWithoutEstadoInputObjectSchema as NotaAutorUncheckedCreateWithoutEstadoInputObjectSchema } from "./NotaAutorUncheckedCreateWithoutEstadoInput.schema.ts";
import { NotaAutorUpdateManyWithWhereWithoutEstadoInputObjectSchema as NotaAutorUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./NotaAutorUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { NotaAutorUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as NotaAutorUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./NotaAutorUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { NotaAutorUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as NotaAutorUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./NotaAutorUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./NotaAutorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => NotaAutorCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => NotaAutorCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => NotaAutorUncheckedCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => NotaAutorUncheckedCreateWithoutEstadoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => NotaAutorCreateOrConnectWithoutEstadoInputObjectSchema), z.lazy(() => NotaAutorCreateOrConnectWithoutEstadoInputObjectSchema).array()]).optional(),
			upsert: z.union([z.lazy(() => NotaAutorUpsertWithWhereUniqueWithoutEstadoInputObjectSchema), z.lazy(() => NotaAutorUpsertWithWhereUniqueWithoutEstadoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => NotaAutorCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => NotaAutorWhereUniqueInputObjectSchema), z.lazy(() => NotaAutorWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => NotaAutorWhereUniqueInputObjectSchema), z.lazy(() => NotaAutorWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => NotaAutorWhereUniqueInputObjectSchema), z.lazy(() => NotaAutorWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => NotaAutorWhereUniqueInputObjectSchema), z.lazy(() => NotaAutorWhereUniqueInputObjectSchema).array()]).optional(),
			update: z.union([z.lazy(() => NotaAutorUpdateWithWhereUniqueWithoutEstadoInputObjectSchema), z.lazy(() => NotaAutorUpdateWithWhereUniqueWithoutEstadoInputObjectSchema).array()]).optional(),
			updateMany: z.union([z.lazy(() => NotaAutorUpdateManyWithWhereWithoutEstadoInputObjectSchema), z.lazy(() => NotaAutorUpdateManyWithWhereWithoutEstadoInputObjectSchema).array()]).optional(),
			deleteMany: z.union([z.lazy(() => NotaAutorScalarWhereInputObjectSchema), z.lazy(() => NotaAutorScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const NotaAutorUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.NotaAutorUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorUpdateManyWithoutEstadoNestedInput>;
export const NotaAutorUpdateManyWithoutEstadoNestedInputObjectZodSchema = makeSchema();
