import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoUncheckedUpdateWithoutParrafosInputObjectSchema as EstadoUncheckedUpdateWithoutParrafosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutParrafosInput.schema.ts";
import { EstadoUpdateWithoutParrafosInputObjectSchema as EstadoUpdateWithoutParrafosInputObjectSchema } from "./EstadoUpdateWithoutParrafosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => EstadoUpdateWithoutParrafosInputObjectSchema), z.lazy(() => EstadoUncheckedUpdateWithoutParrafosInputObjectSchema)]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutParrafosInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutParrafosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutParrafosInput>;
export const EstadoUpdateToOneWithWhereWithoutParrafosInputObjectZodSchema = makeSchema();
