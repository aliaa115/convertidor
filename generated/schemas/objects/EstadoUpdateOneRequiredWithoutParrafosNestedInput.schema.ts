import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutParrafosInputObjectSchema as EstadoCreateOrConnectWithoutParrafosInputObjectSchema } from "./EstadoCreateOrConnectWithoutParrafosInput.schema.ts";
import { EstadoCreateWithoutParrafosInputObjectSchema as EstadoCreateWithoutParrafosInputObjectSchema } from "./EstadoCreateWithoutParrafosInput.schema.ts";
import { EstadoUncheckedCreateWithoutParrafosInputObjectSchema as EstadoUncheckedCreateWithoutParrafosInputObjectSchema } from "./EstadoUncheckedCreateWithoutParrafosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutParrafosInputObjectSchema as EstadoUncheckedUpdateWithoutParrafosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutParrafosInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutParrafosInputObjectSchema as EstadoUpdateToOneWithWhereWithoutParrafosInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutParrafosInput.schema.ts";
import { EstadoUpdateWithoutParrafosInputObjectSchema as EstadoUpdateWithoutParrafosInputObjectSchema } from "./EstadoUpdateWithoutParrafosInput.schema.ts";
import { EstadoUpsertWithoutParrafosInputObjectSchema as EstadoUpsertWithoutParrafosInputObjectSchema } from "./EstadoUpsertWithoutParrafosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutParrafosInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutParrafosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutParrafosInputObjectSchema).optional(),
			upsert: z.lazy(() => EstadoUpsertWithoutParrafosInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => EstadoUpdateToOneWithWhereWithoutParrafosInputObjectSchema),
					z.lazy(() => EstadoUpdateWithoutParrafosInputObjectSchema),
					z.lazy(() => EstadoUncheckedUpdateWithoutParrafosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutParrafosNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutParrafosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutParrafosNestedInput>;
export const EstadoUpdateOneRequiredWithoutParrafosNestedInputObjectZodSchema = makeSchema();
