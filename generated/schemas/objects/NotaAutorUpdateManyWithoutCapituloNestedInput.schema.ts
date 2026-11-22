import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotaAutorCreateManyCapituloInputEnvelopeObjectSchema as NotaAutorCreateManyCapituloInputEnvelopeObjectSchema } from "./NotaAutorCreateManyCapituloInputEnvelope.schema.ts";
import { NotaAutorCreateOrConnectWithoutCapituloInputObjectSchema as NotaAutorCreateOrConnectWithoutCapituloInputObjectSchema } from "./NotaAutorCreateOrConnectWithoutCapituloInput.schema.ts";
import { NotaAutorCreateWithoutCapituloInputObjectSchema as NotaAutorCreateWithoutCapituloInputObjectSchema } from "./NotaAutorCreateWithoutCapituloInput.schema.ts";
import { NotaAutorScalarWhereInputObjectSchema as NotaAutorScalarWhereInputObjectSchema } from "./NotaAutorScalarWhereInput.schema.ts";
import { NotaAutorUncheckedCreateWithoutCapituloInputObjectSchema as NotaAutorUncheckedCreateWithoutCapituloInputObjectSchema } from "./NotaAutorUncheckedCreateWithoutCapituloInput.schema.ts";
import { NotaAutorUpdateManyWithWhereWithoutCapituloInputObjectSchema as NotaAutorUpdateManyWithWhereWithoutCapituloInputObjectSchema } from "./NotaAutorUpdateManyWithWhereWithoutCapituloInput.schema.ts";
import { NotaAutorUpdateWithWhereUniqueWithoutCapituloInputObjectSchema as NotaAutorUpdateWithWhereUniqueWithoutCapituloInputObjectSchema } from "./NotaAutorUpdateWithWhereUniqueWithoutCapituloInput.schema.ts";
import { NotaAutorUpsertWithWhereUniqueWithoutCapituloInputObjectSchema as NotaAutorUpsertWithWhereUniqueWithoutCapituloInputObjectSchema } from "./NotaAutorUpsertWithWhereUniqueWithoutCapituloInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./NotaAutorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => NotaAutorCreateWithoutCapituloInputObjectSchema),
					z.lazy(() => NotaAutorCreateWithoutCapituloInputObjectSchema).array(),
					z.lazy(() => NotaAutorUncheckedCreateWithoutCapituloInputObjectSchema),
					z.lazy(() => NotaAutorUncheckedCreateWithoutCapituloInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => NotaAutorCreateOrConnectWithoutCapituloInputObjectSchema), z.lazy(() => NotaAutorCreateOrConnectWithoutCapituloInputObjectSchema).array()]).optional(),
			upsert: z.union([z.lazy(() => NotaAutorUpsertWithWhereUniqueWithoutCapituloInputObjectSchema), z.lazy(() => NotaAutorUpsertWithWhereUniqueWithoutCapituloInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => NotaAutorCreateManyCapituloInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => NotaAutorWhereUniqueInputObjectSchema), z.lazy(() => NotaAutorWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => NotaAutorWhereUniqueInputObjectSchema), z.lazy(() => NotaAutorWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => NotaAutorWhereUniqueInputObjectSchema), z.lazy(() => NotaAutorWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => NotaAutorWhereUniqueInputObjectSchema), z.lazy(() => NotaAutorWhereUniqueInputObjectSchema).array()]).optional(),
			update: z.union([z.lazy(() => NotaAutorUpdateWithWhereUniqueWithoutCapituloInputObjectSchema), z.lazy(() => NotaAutorUpdateWithWhereUniqueWithoutCapituloInputObjectSchema).array()]).optional(),
			updateMany: z.union([z.lazy(() => NotaAutorUpdateManyWithWhereWithoutCapituloInputObjectSchema), z.lazy(() => NotaAutorUpdateManyWithWhereWithoutCapituloInputObjectSchema).array()]).optional(),
			deleteMany: z.union([z.lazy(() => NotaAutorScalarWhereInputObjectSchema), z.lazy(() => NotaAutorScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const NotaAutorUpdateManyWithoutCapituloNestedInputObjectSchema: z.ZodType<Prisma.NotaAutorUpdateManyWithoutCapituloNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorUpdateManyWithoutCapituloNestedInput>;
export const NotaAutorUpdateManyWithoutCapituloNestedInputObjectZodSchema = makeSchema();
