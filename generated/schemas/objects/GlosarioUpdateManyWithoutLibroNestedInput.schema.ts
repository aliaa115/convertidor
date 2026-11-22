import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { GlosarioCreateManyLibroInputEnvelopeObjectSchema as GlosarioCreateManyLibroInputEnvelopeObjectSchema } from "./GlosarioCreateManyLibroInputEnvelope.schema.ts";
import { GlosarioCreateOrConnectWithoutLibroInputObjectSchema as GlosarioCreateOrConnectWithoutLibroInputObjectSchema } from "./GlosarioCreateOrConnectWithoutLibroInput.schema.ts";
import { GlosarioCreateWithoutLibroInputObjectSchema as GlosarioCreateWithoutLibroInputObjectSchema } from "./GlosarioCreateWithoutLibroInput.schema.ts";
import { GlosarioScalarWhereInputObjectSchema as GlosarioScalarWhereInputObjectSchema } from "./GlosarioScalarWhereInput.schema.ts";
import { GlosarioUncheckedCreateWithoutLibroInputObjectSchema as GlosarioUncheckedCreateWithoutLibroInputObjectSchema } from "./GlosarioUncheckedCreateWithoutLibroInput.schema.ts";
import { GlosarioUpdateManyWithWhereWithoutLibroInputObjectSchema as GlosarioUpdateManyWithWhereWithoutLibroInputObjectSchema } from "./GlosarioUpdateManyWithWhereWithoutLibroInput.schema.ts";
import { GlosarioUpdateWithWhereUniqueWithoutLibroInputObjectSchema as GlosarioUpdateWithWhereUniqueWithoutLibroInputObjectSchema } from "./GlosarioUpdateWithWhereUniqueWithoutLibroInput.schema.ts";
import { GlosarioUpsertWithWhereUniqueWithoutLibroInputObjectSchema as GlosarioUpsertWithWhereUniqueWithoutLibroInputObjectSchema } from "./GlosarioUpsertWithWhereUniqueWithoutLibroInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./GlosarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => GlosarioCreateWithoutLibroInputObjectSchema),
					z.lazy(() => GlosarioCreateWithoutLibroInputObjectSchema).array(),
					z.lazy(() => GlosarioUncheckedCreateWithoutLibroInputObjectSchema),
					z.lazy(() => GlosarioUncheckedCreateWithoutLibroInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => GlosarioCreateOrConnectWithoutLibroInputObjectSchema), z.lazy(() => GlosarioCreateOrConnectWithoutLibroInputObjectSchema).array()]).optional(),
			upsert: z.union([z.lazy(() => GlosarioUpsertWithWhereUniqueWithoutLibroInputObjectSchema), z.lazy(() => GlosarioUpsertWithWhereUniqueWithoutLibroInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => GlosarioCreateManyLibroInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => GlosarioWhereUniqueInputObjectSchema), z.lazy(() => GlosarioWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => GlosarioWhereUniqueInputObjectSchema), z.lazy(() => GlosarioWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => GlosarioWhereUniqueInputObjectSchema), z.lazy(() => GlosarioWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => GlosarioWhereUniqueInputObjectSchema), z.lazy(() => GlosarioWhereUniqueInputObjectSchema).array()]).optional(),
			update: z.union([z.lazy(() => GlosarioUpdateWithWhereUniqueWithoutLibroInputObjectSchema), z.lazy(() => GlosarioUpdateWithWhereUniqueWithoutLibroInputObjectSchema).array()]).optional(),
			updateMany: z.union([z.lazy(() => GlosarioUpdateManyWithWhereWithoutLibroInputObjectSchema), z.lazy(() => GlosarioUpdateManyWithWhereWithoutLibroInputObjectSchema).array()]).optional(),
			deleteMany: z.union([z.lazy(() => GlosarioScalarWhereInputObjectSchema), z.lazy(() => GlosarioScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const GlosarioUpdateManyWithoutLibroNestedInputObjectSchema: z.ZodType<Prisma.GlosarioUpdateManyWithoutLibroNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioUpdateManyWithoutLibroNestedInput>;
export const GlosarioUpdateManyWithoutLibroNestedInputObjectZodSchema = makeSchema();
