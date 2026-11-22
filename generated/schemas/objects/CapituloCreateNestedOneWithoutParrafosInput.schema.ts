import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateOrConnectWithoutParrafosInputObjectSchema as CapituloCreateOrConnectWithoutParrafosInputObjectSchema } from "./CapituloCreateOrConnectWithoutParrafosInput.schema.ts";
import { CapituloCreateWithoutParrafosInputObjectSchema as CapituloCreateWithoutParrafosInputObjectSchema } from "./CapituloCreateWithoutParrafosInput.schema.ts";
import { CapituloUncheckedCreateWithoutParrafosInputObjectSchema as CapituloUncheckedCreateWithoutParrafosInputObjectSchema } from "./CapituloUncheckedCreateWithoutParrafosInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./CapituloWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => CapituloCreateWithoutParrafosInputObjectSchema),
					z.lazy(() => CapituloUncheckedCreateWithoutParrafosInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => CapituloCreateOrConnectWithoutParrafosInputObjectSchema)
				.optional(),
			connect: z.lazy(() => CapituloWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const CapituloCreateNestedOneWithoutParrafosInputObjectSchema: z.ZodType<Prisma.CapituloCreateNestedOneWithoutParrafosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloCreateNestedOneWithoutParrafosInput>;
export const CapituloCreateNestedOneWithoutParrafosInputObjectZodSchema =
	makeSchema();
