import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ParrafoCreateWithoutMarcadoresInputObjectSchema as ParrafoCreateWithoutMarcadoresInputObjectSchema } from "./ParrafoCreateWithoutMarcadoresInput.schema.ts";
import { ParrafoUncheckedCreateWithoutMarcadoresInputObjectSchema as ParrafoUncheckedCreateWithoutMarcadoresInputObjectSchema } from "./ParrafoUncheckedCreateWithoutMarcadoresInput.schema.ts";
import { ParrafoUncheckedUpdateWithoutMarcadoresInputObjectSchema as ParrafoUncheckedUpdateWithoutMarcadoresInputObjectSchema } from "./ParrafoUncheckedUpdateWithoutMarcadoresInput.schema.ts";
import { ParrafoUpdateWithoutMarcadoresInputObjectSchema as ParrafoUpdateWithoutMarcadoresInputObjectSchema } from "./ParrafoUpdateWithoutMarcadoresInput.schema.ts";
import { ParrafoWhereInputObjectSchema as ParrafoWhereInputObjectSchema } from "./ParrafoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => ParrafoUpdateWithoutMarcadoresInputObjectSchema),
				z.lazy(() => ParrafoUncheckedUpdateWithoutMarcadoresInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => ParrafoCreateWithoutMarcadoresInputObjectSchema),
				z.lazy(() => ParrafoUncheckedCreateWithoutMarcadoresInputObjectSchema),
			]),
			where: z.lazy(() => ParrafoWhereInputObjectSchema).optional(),
		})
		.strict();
export const ParrafoUpsertWithoutMarcadoresInputObjectSchema: z.ZodType<Prisma.ParrafoUpsertWithoutMarcadoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUpsertWithoutMarcadoresInput>;
export const ParrafoUpsertWithoutMarcadoresInputObjectZodSchema = makeSchema();
