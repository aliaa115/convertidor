import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutEscritoresInputObjectSchema as EstadoCreateWithoutEscritoresInputObjectSchema } from "./EstadoCreateWithoutEscritoresInput.schema.ts";
import { EstadoUncheckedCreateWithoutEscritoresInputObjectSchema as EstadoUncheckedCreateWithoutEscritoresInputObjectSchema } from "./EstadoUncheckedCreateWithoutEscritoresInput.schema.ts";
import { EstadoUncheckedUpdateWithoutEscritoresInputObjectSchema as EstadoUncheckedUpdateWithoutEscritoresInputObjectSchema } from "./EstadoUncheckedUpdateWithoutEscritoresInput.schema.ts";
import { EstadoUpdateWithoutEscritoresInputObjectSchema as EstadoUpdateWithoutEscritoresInputObjectSchema } from "./EstadoUpdateWithoutEscritoresInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EstadoUpdateWithoutEscritoresInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutEscritoresInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutEscritoresInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutEscritoresInputObjectSchema),
			]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutEscritoresInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutEscritoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutEscritoresInput>;
export const EstadoUpsertWithoutEscritoresInputObjectZodSchema = makeSchema();
