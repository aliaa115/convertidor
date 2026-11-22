import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutMarcadoresInputObjectSchema as EstadoCreateWithoutMarcadoresInputObjectSchema } from "./EstadoCreateWithoutMarcadoresInput.schema.ts";
import { EstadoUncheckedCreateWithoutMarcadoresInputObjectSchema as EstadoUncheckedCreateWithoutMarcadoresInputObjectSchema } from "./EstadoUncheckedCreateWithoutMarcadoresInput.schema.ts";
import { EstadoUncheckedUpdateWithoutMarcadoresInputObjectSchema as EstadoUncheckedUpdateWithoutMarcadoresInputObjectSchema } from "./EstadoUncheckedUpdateWithoutMarcadoresInput.schema.ts";
import { EstadoUpdateWithoutMarcadoresInputObjectSchema as EstadoUpdateWithoutMarcadoresInputObjectSchema } from "./EstadoUpdateWithoutMarcadoresInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EstadoUpdateWithoutMarcadoresInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutMarcadoresInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutMarcadoresInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutMarcadoresInputObjectSchema),
			]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutMarcadoresInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutMarcadoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutMarcadoresInput>;
export const EstadoUpsertWithoutMarcadoresInputObjectZodSchema = makeSchema();
