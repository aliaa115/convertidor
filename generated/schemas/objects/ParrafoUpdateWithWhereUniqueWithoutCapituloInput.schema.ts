import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ParrafoUncheckedUpdateWithoutCapituloInputObjectSchema as ParrafoUncheckedUpdateWithoutCapituloInputObjectSchema } from "./ParrafoUncheckedUpdateWithoutCapituloInput.schema.ts";
import { ParrafoUpdateWithoutCapituloInputObjectSchema as ParrafoUpdateWithoutCapituloInputObjectSchema } from "./ParrafoUpdateWithoutCapituloInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./ParrafoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ParrafoWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => ParrafoUpdateWithoutCapituloInputObjectSchema), z.lazy(() => ParrafoUncheckedUpdateWithoutCapituloInputObjectSchema)]),
		})
		.strict();
export const ParrafoUpdateWithWhereUniqueWithoutCapituloInputObjectSchema: z.ZodType<Prisma.ParrafoUpdateWithWhereUniqueWithoutCapituloInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUpdateWithWhereUniqueWithoutCapituloInput>;
export const ParrafoUpdateWithWhereUniqueWithoutCapituloInputObjectZodSchema = makeSchema();
