import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { TipoCreateManyEstadoInputEnvelopeObjectSchema as TipoCreateManyEstadoInputEnvelopeObjectSchema } from "./TipoCreateManyEstadoInputEnvelope.schema.ts";
import { TipoCreateOrConnectWithoutEstadoInputObjectSchema as TipoCreateOrConnectWithoutEstadoInputObjectSchema } from "./TipoCreateOrConnectWithoutEstadoInput.schema.ts";
import { TipoCreateWithoutEstadoInputObjectSchema as TipoCreateWithoutEstadoInputObjectSchema } from "./TipoCreateWithoutEstadoInput.schema.ts";
import { TipoUncheckedCreateWithoutEstadoInputObjectSchema as TipoUncheckedCreateWithoutEstadoInputObjectSchema } from "./TipoUncheckedCreateWithoutEstadoInput.schema.ts";
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
			createMany: z.lazy(() => TipoCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => TipoWhereUniqueInputObjectSchema), z.lazy(() => TipoWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const TipoUncheckedCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.TipoUncheckedCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUncheckedCreateNestedManyWithoutEstadoInput>;
export const TipoUncheckedCreateNestedManyWithoutEstadoInputObjectZodSchema = makeSchema();
