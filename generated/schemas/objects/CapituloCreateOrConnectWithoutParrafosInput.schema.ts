import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateWithoutParrafosInputObjectSchema as CapituloCreateWithoutParrafosInputObjectSchema } from "./CapituloCreateWithoutParrafosInput.schema.ts";
import { CapituloUncheckedCreateWithoutParrafosInputObjectSchema as CapituloUncheckedCreateWithoutParrafosInputObjectSchema } from "./CapituloUncheckedCreateWithoutParrafosInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./CapituloWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CapituloWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => CapituloCreateWithoutParrafosInputObjectSchema),
				z.lazy(() => CapituloUncheckedCreateWithoutParrafosInputObjectSchema),
			]),
		})
		.strict();
export const CapituloCreateOrConnectWithoutParrafosInputObjectSchema: z.ZodType<Prisma.CapituloCreateOrConnectWithoutParrafosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloCreateOrConnectWithoutParrafosInput>;
export const CapituloCreateOrConnectWithoutParrafosInputObjectZodSchema =
	makeSchema();
