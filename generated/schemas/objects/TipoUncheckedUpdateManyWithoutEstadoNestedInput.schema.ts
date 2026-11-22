import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { TipoCreateManyEstadoInputEnvelopeObjectSchema as TipoCreateManyEstadoInputEnvelopeObjectSchema } from "./TipoCreateManyEstadoInputEnvelope.schema.ts";
import { TipoCreateOrConnectWithoutEstadoInputObjectSchema as TipoCreateOrConnectWithoutEstadoInputObjectSchema } from "./TipoCreateOrConnectWithoutEstadoInput.schema.ts";
import { TipoCreateWithoutEstadoInputObjectSchema as TipoCreateWithoutEstadoInputObjectSchema } from "./TipoCreateWithoutEstadoInput.schema.ts";
import { TipoScalarWhereInputObjectSchema as TipoScalarWhereInputObjectSchema } from "./TipoScalarWhereInput.schema.ts";
import { TipoUncheckedCreateWithoutEstadoInputObjectSchema as TipoUncheckedCreateWithoutEstadoInputObjectSchema } from "./TipoUncheckedCreateWithoutEstadoInput.schema.ts";
import { TipoUpdateManyWithWhereWithoutEstadoInputObjectSchema as TipoUpdateManyWithWhereWithoutEstadoInputObjectSchema } from "./TipoUpdateManyWithWhereWithoutEstadoInput.schema.ts";
import { TipoUpdateWithWhereUniqueWithoutEstadoInputObjectSchema as TipoUpdateWithWhereUniqueWithoutEstadoInputObjectSchema } from "./TipoUpdateWithWhereUniqueWithoutEstadoInput.schema.ts";
import { TipoUpsertWithWhereUniqueWithoutEstadoInputObjectSchema as TipoUpsertWithWhereUniqueWithoutEstadoInputObjectSchema } from "./TipoUpsertWithWhereUniqueWithoutEstadoInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./TipoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => TipoCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => TipoCreateWithoutEstadoInputObjectSchema).array(),
					z.lazy(() => TipoUncheckedCreateWithoutEstadoInputObjectSchema),
					z.lazy(() => TipoUncheckedCreateWithoutEstadoInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => TipoCreateOrConnectWithoutEstadoInputObjectSchema), z.lazy(() => TipoCreateOrConnectWithoutEstadoInputObjectSchema).array()]).optional(),
			upsert: z.union([z.lazy(() => TipoUpsertWithWhereUniqueWithoutEstadoInputObjectSchema), z.lazy(() => TipoUpsertWithWhereUniqueWithoutEstadoInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => TipoCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			set: z.union([z.lazy(() => TipoWhereUniqueInputObjectSchema), z.lazy(() => TipoWhereUniqueInputObjectSchema).array()]).optional(),
			disconnect: z.union([z.lazy(() => TipoWhereUniqueInputObjectSchema), z.lazy(() => TipoWhereUniqueInputObjectSchema).array()]).optional(),
			delete: z.union([z.lazy(() => TipoWhereUniqueInputObjectSchema), z.lazy(() => TipoWhereUniqueInputObjectSchema).array()]).optional(),
			connect: z.union([z.lazy(() => TipoWhereUniqueInputObjectSchema), z.lazy(() => TipoWhereUniqueInputObjectSchema).array()]).optional(),
			update: z.union([z.lazy(() => TipoUpdateWithWhereUniqueWithoutEstadoInputObjectSchema), z.lazy(() => TipoUpdateWithWhereUniqueWithoutEstadoInputObjectSchema).array()]).optional(),
			updateMany: z.union([z.lazy(() => TipoUpdateManyWithWhereWithoutEstadoInputObjectSchema), z.lazy(() => TipoUpdateManyWithWhereWithoutEstadoInputObjectSchema).array()]).optional(),
			deleteMany: z.union([z.lazy(() => TipoScalarWhereInputObjectSchema), z.lazy(() => TipoScalarWhereInputObjectSchema).array()]).optional(),
		})
		.strict();
export const TipoUncheckedUpdateManyWithoutEstadoNestedInputObjectSchema: z.ZodType<Prisma.TipoUncheckedUpdateManyWithoutEstadoNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUncheckedUpdateManyWithoutEstadoNestedInput>;
export const TipoUncheckedUpdateManyWithoutEstadoNestedInputObjectZodSchema = makeSchema();
