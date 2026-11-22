import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CapituloCreateWithoutParrafosInputObjectSchema as CapituloCreateWithoutParrafosInputObjectSchema } from "./CapituloCreateWithoutParrafosInput.schema.ts";
import { CapituloUncheckedCreateWithoutParrafosInputObjectSchema as CapituloUncheckedCreateWithoutParrafosInputObjectSchema } from "./CapituloUncheckedCreateWithoutParrafosInput.schema.ts";
import { CapituloUncheckedUpdateWithoutParrafosInputObjectSchema as CapituloUncheckedUpdateWithoutParrafosInputObjectSchema } from "./CapituloUncheckedUpdateWithoutParrafosInput.schema.ts";
import { CapituloUpdateWithoutParrafosInputObjectSchema as CapituloUpdateWithoutParrafosInputObjectSchema } from "./CapituloUpdateWithoutParrafosInput.schema.ts";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./CapituloWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => CapituloUpdateWithoutParrafosInputObjectSchema), z.lazy(() => CapituloUncheckedUpdateWithoutParrafosInputObjectSchema)]),
			create: z.union([z.lazy(() => CapituloCreateWithoutParrafosInputObjectSchema), z.lazy(() => CapituloUncheckedCreateWithoutParrafosInputObjectSchema)]),
			where: z.lazy(() => CapituloWhereInputObjectSchema).optional(),
		})
		.strict();
export const CapituloUpsertWithoutParrafosInputObjectSchema: z.ZodType<Prisma.CapituloUpsertWithoutParrafosInput> = makeSchema() as unknown as z.ZodType<Prisma.CapituloUpsertWithoutParrafosInput>;
export const CapituloUpsertWithoutParrafosInputObjectZodSchema = makeSchema();
