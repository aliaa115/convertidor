import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloUncheckedUpdateWithoutParrafosInputObjectSchema as CapituloUncheckedUpdateWithoutParrafosInputObjectSchema } from "./CapituloUncheckedUpdateWithoutParrafosInput.schema.ts";
import { CapituloUpdateWithoutParrafosInputObjectSchema as CapituloUpdateWithoutParrafosInputObjectSchema } from "./CapituloUpdateWithoutParrafosInput.schema.ts";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./CapituloWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CapituloWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => CapituloUpdateWithoutParrafosInputObjectSchema),
				z.lazy(() => CapituloUncheckedUpdateWithoutParrafosInputObjectSchema),
			]),
		})
		.strict();
export const CapituloUpdateToOneWithWhereWithoutParrafosInputObjectSchema: z.ZodType<Prisma.CapituloUpdateToOneWithWhereWithoutParrafosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUpdateToOneWithWhereWithoutParrafosInput>;
export const CapituloUpdateToOneWithWhereWithoutParrafosInputObjectZodSchema =
	makeSchema();
