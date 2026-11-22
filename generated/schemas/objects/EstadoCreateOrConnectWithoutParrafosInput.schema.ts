import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutParrafosInputObjectSchema as EstadoCreateWithoutParrafosInputObjectSchema } from "./EstadoCreateWithoutParrafosInput.schema.ts";
import { EstadoUncheckedCreateWithoutParrafosInputObjectSchema as EstadoUncheckedCreateWithoutParrafosInputObjectSchema } from "./EstadoUncheckedCreateWithoutParrafosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutParrafosInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutParrafosInputObjectSchema),
			]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutParrafosInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutParrafosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutParrafosInput>;
export const EstadoCreateOrConnectWithoutParrafosInputObjectZodSchema =
	makeSchema();
