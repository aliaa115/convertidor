import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { GlosarioCreateManyEstadoInputEnvelopeObjectSchema as GlosarioCreateManyEstadoInputEnvelopeObjectSchema } from "./GlosarioCreateManyEstadoInputEnvelope.schema.ts";
import { GlosarioCreateOrConnectWithoutEstadoInputObjectSchema as GlosarioCreateOrConnectWithoutEstadoInputObjectSchema } from "./GlosarioCreateOrConnectWithoutEstadoInput.schema.ts";
import { GlosarioCreateWithoutEstadoInputObjectSchema as GlosarioCreateWithoutEstadoInputObjectSchema } from "./GlosarioCreateWithoutEstadoInput.schema.ts";
import { GlosarioUncheckedCreateWithoutEstadoInputObjectSchema as GlosarioUncheckedCreateWithoutEstadoInputObjectSchema } from "./GlosarioUncheckedCreateWithoutEstadoInput.schema.ts";
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
			createMany: z.lazy(() => GlosarioCreateManyEstadoInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => GlosarioWhereUniqueInputObjectSchema), z.lazy(() => GlosarioWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const GlosarioUncheckedCreateNestedManyWithoutEstadoInputObjectSchema: z.ZodType<Prisma.GlosarioUncheckedCreateNestedManyWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioUncheckedCreateNestedManyWithoutEstadoInput>;
export const GlosarioUncheckedCreateNestedManyWithoutEstadoInputObjectZodSchema = makeSchema();
