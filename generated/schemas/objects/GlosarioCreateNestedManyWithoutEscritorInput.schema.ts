import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { GlosarioCreateManyEscritorInputEnvelopeObjectSchema as GlosarioCreateManyEscritorInputEnvelopeObjectSchema } from "./GlosarioCreateManyEscritorInputEnvelope.schema.ts";
import { GlosarioCreateOrConnectWithoutEscritorInputObjectSchema as GlosarioCreateOrConnectWithoutEscritorInputObjectSchema } from "./GlosarioCreateOrConnectWithoutEscritorInput.schema.ts";
import { GlosarioCreateWithoutEscritorInputObjectSchema as GlosarioCreateWithoutEscritorInputObjectSchema } from "./GlosarioCreateWithoutEscritorInput.schema.ts";
import { GlosarioUncheckedCreateWithoutEscritorInputObjectSchema as GlosarioUncheckedCreateWithoutEscritorInputObjectSchema } from "./GlosarioUncheckedCreateWithoutEscritorInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./GlosarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => GlosarioCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => GlosarioCreateWithoutEscritorInputObjectSchema).array(),
					z.lazy(() => GlosarioUncheckedCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => GlosarioUncheckedCreateWithoutEscritorInputObjectSchema).array(),
				])
				.optional(),
			connectOrCreate: z.union([z.lazy(() => GlosarioCreateOrConnectWithoutEscritorInputObjectSchema), z.lazy(() => GlosarioCreateOrConnectWithoutEscritorInputObjectSchema).array()]).optional(),
			createMany: z.lazy(() => GlosarioCreateManyEscritorInputEnvelopeObjectSchema).optional(),
			connect: z.union([z.lazy(() => GlosarioWhereUniqueInputObjectSchema), z.lazy(() => GlosarioWhereUniqueInputObjectSchema).array()]).optional(),
		})
		.strict();
export const GlosarioCreateNestedManyWithoutEscritorInputObjectSchema: z.ZodType<Prisma.GlosarioCreateNestedManyWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioCreateNestedManyWithoutEscritorInput>;
export const GlosarioCreateNestedManyWithoutEscritorInputObjectZodSchema = makeSchema();
