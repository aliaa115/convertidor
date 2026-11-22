import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateWithoutLibrosInputObjectSchema as EstadoCreateWithoutLibrosInputObjectSchema } from "./EstadoCreateWithoutLibrosInput.schema.ts";
import { EstadoUncheckedCreateWithoutLibrosInputObjectSchema as EstadoUncheckedCreateWithoutLibrosInputObjectSchema } from "./EstadoUncheckedCreateWithoutLibrosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutLibrosInputObjectSchema as EstadoUncheckedUpdateWithoutLibrosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutLibrosInput.schema.ts";
import { EstadoUpdateWithoutLibrosInputObjectSchema as EstadoUpdateWithoutLibrosInputObjectSchema } from "./EstadoUpdateWithoutLibrosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => EstadoUpdateWithoutLibrosInputObjectSchema), z.lazy(() => EstadoUncheckedUpdateWithoutLibrosInputObjectSchema)]),
			create: z.union([z.lazy(() => EstadoCreateWithoutLibrosInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutLibrosInputObjectSchema)]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutLibrosInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutLibrosInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutLibrosInput>;
export const EstadoUpsertWithoutLibrosInputObjectZodSchema = makeSchema();
