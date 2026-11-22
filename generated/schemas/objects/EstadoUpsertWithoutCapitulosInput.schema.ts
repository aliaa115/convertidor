import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutCapitulosInputObjectSchema as EstadoCreateWithoutCapitulosInputObjectSchema } from "./EstadoCreateWithoutCapitulosInput.schema.ts";
import { EstadoUncheckedCreateWithoutCapitulosInputObjectSchema as EstadoUncheckedCreateWithoutCapitulosInputObjectSchema } from "./EstadoUncheckedCreateWithoutCapitulosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutCapitulosInputObjectSchema as EstadoUncheckedUpdateWithoutCapitulosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutCapitulosInput.schema.ts";
import { EstadoUpdateWithoutCapitulosInputObjectSchema as EstadoUpdateWithoutCapitulosInputObjectSchema } from "./EstadoUpdateWithoutCapitulosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EstadoUpdateWithoutCapitulosInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutCapitulosInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutCapitulosInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutCapitulosInputObjectSchema),
			]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutCapitulosInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutCapitulosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutCapitulosInput>;
export const EstadoUpsertWithoutCapitulosInputObjectZodSchema = makeSchema();
