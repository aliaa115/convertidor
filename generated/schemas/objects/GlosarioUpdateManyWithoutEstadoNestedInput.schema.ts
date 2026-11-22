import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { GlosarioCreateManyEstadoInputEnvelopeObjectSchema as GlosarioCreateManyEstadoInputEnvelopeObjectSchema } from "./GlosarioCreateManyEstadoInputEnvelope.schema.ts";
import { GlosarioCreateOrConnectWithoutEstadoInputObjectSchema as GlosarioCreateOrConnectWithoutEstadoInputObjectSchema } from "./GlosarioCreateOrConnectWithoutEstadoInput.schema.ts";
import { GlosarioCreateWithoutEstadoInputObjectSchema as GlosarioCreateWithoutEstadoInputObjectSchema } from "./GlosarioCreateWithoutEstadoInput.schema.ts";
import { GlosarioScalarWhereInputObjectSchema as GlosarioScalarWhereInputObjectSchema } from "./GlosarioScalarWhereInput.schema.ts";
import { GlosarioUncheckedCreateWithoutEstadoInputObjectSchema as GlosarioUncheckedCreateWithoutEstadoInputObjectSchema } from "./GlosarioUncheckedCreateWithoutEstadoInput.schema.ts";
import { GlosarioUpdateManyWithWhereWithoutEstadoInputObjectSchema as GlosarioUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./GlosarioUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { GlosarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as GlosarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./GlosarioUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { GlosarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as GlosarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./GlosarioUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./GlosarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => GlosarioCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => GlosarioCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => GlosarioUncheckedCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => GlosarioUncheckedCreateWithoutEstadoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => GlosarioCreateOrConnectWithoutEstadoInputObjectSchema), z.lazy(() => GlosarioCreateOrConnectWithoutEstadoInputObjectSchema).array()]).optional(),
			upsert: z.union([z.lazy(() => GlosarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema), z.lazy(() => GlosarioUpsertWithWhereUniqueWithoutEstadoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => GlosarioCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => GlosarioWhereUniqueInputObjectSchema), z.lazy(() => GlosarioWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => GlosarioWhereUniqueInputObjectSchema), z.lazy(() => GlosarioWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => GlosarioWhereUniqueInputObjectSchema), z.lazy(() => GlosarioWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => GlosarioWhereUniqueInputObjectSchema), z.lazy(() => GlosarioWhereUniqueInputObjectSchema).array()]).optional(),
			update: z.union([z.lazy(() => GlosarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema), z.lazy(() => GlosarioUpdateWithWhereUniqueWithoutEstadoInputObjectSchema).array()]).optional(),
			updateMany: z.union([z.lazy(() => GlosarioUpdateManyWithWhereWithoutEstadoInputObjectSchema), z.lazy(() => GlosarioUpdateManyWithWhereWithoutEstadoInputObjectSchema).array()]).optional(),
			deleteMany: z.union([z.lazy(() => GlosarioScalarWhereInputObjectSchema), z.lazy(() => GlosarioScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const GlosarioUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.GlosarioUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioUpdateManyWithoutEstadoNestedInput>;
export const GlosarioUpdateManyWithoutEstadoNestedInputObjectZodSchema = makeSchema();
