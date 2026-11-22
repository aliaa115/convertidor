import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateWithoutParrafosInputObjectSchema as EstadoCreateWithoutParrafosInputObjectSchema } from "./EstadoCreateWithoutParrafosInput.schema.ts";
import { EstadoUncheckedCreateWithoutParrafosInputObjectSchema as EstadoUncheckedCreateWithoutParrafosInputObjectSchema } from "./EstadoUncheckedCreateWithoutParrafosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutParrafosInputObjectSchema as EstadoUncheckedUpdateWithoutParrafosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutParrafosInput.schema.ts";
import { EstadoUpdateWithoutParrafosInputObjectSchema as EstadoUpdateWithoutParrafosInputObjectSchema } from "./EstadoUpdateWithoutParrafosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => EstadoUpdateWithoutParrafosInputObjectSchema), z.lazy(() => EstadoUncheckedUpdateWithoutParrafosInputObjectSchema)]),
			create: z.union([z.lazy(() => EstadoCreateWithoutParrafosInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutParrafosInputObjectSchema)]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutParrafosInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutParrafosInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutParrafosInput>;
export const EstadoUpsertWithoutParrafosInputObjectZodSchema = makeSchema();
