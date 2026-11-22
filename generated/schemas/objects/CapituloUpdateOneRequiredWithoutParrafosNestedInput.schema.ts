import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateOrConnectWithoutParrafosInputObjectSchema as CapituloCreateOrConnectWithoutParrafosInputObjectSchema } from "./CapituloCreateOrConnectWithoutParrafosInput.schema.ts";
import { CapituloCreateWithoutParrafosInputObjectSchema as CapituloCreateWithoutParrafosInputObjectSchema } from "./CapituloCreateWithoutParrafosInput.schema.ts";
import { CapituloUncheckedCreateWithoutParrafosInputObjectSchema as CapituloUncheckedCreateWithoutParrafosInputObjectSchema } from "./CapituloUncheckedCreateWithoutParrafosInput.schema.ts";
import { CapituloUncheckedUpdateWithoutParrafosInputObjectSchema as CapituloUncheckedUpdateWithoutParrafosInputObjectSchema } from "./CapituloUncheckedUpdateWithoutParrafosInput.schema.ts";
import { CapituloUpdateToOneWithWhereWithoutParrafosInputObjectSchema as CapituloUpdateToOneWithWhereWithoutParrafosInputObjectSchema } from "./CapituloUpdateToOneWithWhereWithoutParrafosInput.schema.ts";
import { CapituloUpdateWithoutParrafosInputObjectSchema as CapituloUpdateWithoutParrafosInputObjectSchema } from "./CapituloUpdateWithoutParrafosInput.schema.ts";
import { CapituloUpsertWithoutParrafosInputObjectSchema as CapituloUpsertWithoutParrafosInputObjectSchema } from "./CapituloUpsertWithoutParrafosInput.schema.ts";
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
			upsert: z
				.lazy(() => CapituloUpsertWithoutParrafosInputObjectSchema)
				.optional(),
			connect: z.lazy(() => CapituloWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() => CapituloUpdateToOneWithWhereWithoutParrafosInputObjectSchema,
					),
					z.lazy(() => CapituloUpdateWithoutParrafosInputObjectSchema),
					z.lazy(() => CapituloUncheckedUpdateWithoutParrafosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const CapituloUpdateOneRequiredWithoutParrafosNestedInputObjectSchema: z.ZodType<Prisma.CapituloUpdateOneRequiredWithoutParrafosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUpdateOneRequiredWithoutParrafosNestedInput>;
export const CapituloUpdateOneRequiredWithoutParrafosNestedInputObjectZodSchema =
	makeSchema();
