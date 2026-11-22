import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ParrafoCreateWithoutCapituloInputObjectSchema as ParrafoCreateWithoutCapituloInputObjectSchema } from "./ParrafoCreateWithoutCapituloInput.schema.ts";
import { ParrafoUncheckedCreateWithoutCapituloInputObjectSchema as ParrafoUncheckedCreateWithoutCapituloInputObjectSchema } from "./ParrafoUncheckedCreateWithoutCapituloInput.schema.ts";
import { ParrafoUncheckedUpdateWithoutCapituloInputObjectSchema as ParrafoUncheckedUpdateWithoutCapituloInputObjectSchema } from "./ParrafoUncheckedUpdateWithoutCapituloInput.schema.ts";
import { ParrafoUpdateWithoutCapituloInputObjectSchema as ParrafoUpdateWithoutCapituloInputObjectSchema } from "./ParrafoUpdateWithoutCapituloInput.schema.ts";
import { ParrafoWhereUniqueInputObjectSchema as ParrafoWhereUniqueInputObjectSchema } from "./ParrafoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ParrafoWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => ParrafoUpdateWithoutCapituloInputObjectSchema), z.lazy(() => ParrafoUncheckedUpdateWithoutCapituloInputObjectSchema)]),
			create: z.union([z.lazy(() => ParrafoCreateWithoutCapituloInputObjectSchema), z.lazy(() => ParrafoUncheckedCreateWithoutCapituloInputObjectSchema)]),
		})
		.strict();
export const ParrafoUpsertWithWhereUniqueWithoutCapituloInputObjectSchema: z.ZodType<Prisma.ParrafoUpsertWithWhereUniqueWithoutCapituloInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ParrafoUpsertWithWhereUniqueWithoutCapituloInput>;
export const ParrafoUpsertWithWhereUniqueWithoutCapituloInputObjectZodSchema = makeSchema();
