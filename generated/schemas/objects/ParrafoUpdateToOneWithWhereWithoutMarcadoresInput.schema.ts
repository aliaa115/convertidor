import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ParrafoUncheckedUpdateWithoutMarcadoresInputObjectSchema as ParrafoUncheckedUpdateWithoutMarcadoresInputObjectSchema } from "./ParrafoUncheckedUpdateWithoutMarcadoresInput.schema.ts";
import { ParrafoUpdateWithoutMarcadoresInputObjectSchema as ParrafoUpdateWithoutMarcadoresInputObjectSchema } from "./ParrafoUpdateWithoutMarcadoresInput.schema.ts";
import { ParrafoWhereInputObjectSchema as ParrafoWhereInputObjectSchema } from "./ParrafoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ParrafoWhereInputObjectSchema).optional(),
			data: z.union([z.lazy(() => ParrafoUpdateWithoutMarcadoresInputObjectSchema), z.lazy(() => ParrafoUncheckedUpdateWithoutMarcadoresInputObjectSchema)]),
		})
		.strict();
export const ParrafoUpdateToOneWithWhereWithoutMarcadoresInputObjectSchema: z.ZodType<Prisma.ParrafoUpdateToOneWithWhereWithoutMarcadoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUpdateToOneWithWhereWithoutMarcadoresInput>;
export const ParrafoUpdateToOneWithWhereWithoutMarcadoresInputObjectZodSchema = makeSchema();
