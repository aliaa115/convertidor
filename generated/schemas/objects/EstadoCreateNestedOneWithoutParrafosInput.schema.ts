import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutParrafosInputObjectSchema as EstadoCreateOrConnectWithoutParrafosInputObjectSchema } from "./EstadoCreateOrConnectWithoutParrafosInput.schema.ts";
import { EstadoCreateWithoutParrafosInputObjectSchema as EstadoCreateWithoutParrafosInputObjectSchema } from "./EstadoCreateWithoutParrafosInput.schema.ts";
import { EstadoUncheckedCreateWithoutParrafosInputObjectSchema as EstadoUncheckedCreateWithoutParrafosInputObjectSchema } from "./EstadoUncheckedCreateWithoutParrafosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutParrafosInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutParrafosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutParrafosInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutParrafosInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutParrafosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutParrafosInput>;
export const EstadoCreateNestedOneWithoutParrafosInputObjectZodSchema = makeSchema();
