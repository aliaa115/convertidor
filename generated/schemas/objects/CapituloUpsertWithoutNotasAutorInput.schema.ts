import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateWithoutNotasAutorInputObjectSchema as CapituloCreateWithoutNotasAutorInputObjectSchema } from "./CapituloCreateWithoutNotasAutorInput.schema.ts";
import { CapituloUncheckedCreateWithoutNotasAutorInputObjectSchema as CapituloUncheckedCreateWithoutNotasAutorInputObjectSchema } from "./CapituloUncheckedCreateWithoutNotasAutorInput.schema.ts";
import { CapituloUncheckedUpdateWithoutNotasAutorInputObjectSchema as CapituloUncheckedUpdateWithoutNotasAutorInputObjectSchema } from "./CapituloUncheckedUpdateWithoutNotasAutorInput.schema.ts";
import { CapituloUpdateWithoutNotasAutorInputObjectSchema as CapituloUpdateWithoutNotasAutorInputObjectSchema } from "./CapituloUpdateWithoutNotasAutorInput.schema.ts";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./CapituloWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => CapituloUpdateWithoutNotasAutorInputObjectSchema),
				z.lazy(() => CapituloUncheckedUpdateWithoutNotasAutorInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => CapituloCreateWithoutNotasAutorInputObjectSchema),
				z.lazy(() => CapituloUncheckedCreateWithoutNotasAutorInputObjectSchema),
			]),
			where: z.lazy(() => CapituloWhereInputObjectSchema).optional(),
		})
		.strict();
export const CapituloUpsertWithoutNotasAutorInputObjectSchema: z.ZodType<Prisma.CapituloUpsertWithoutNotasAutorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUpsertWithoutNotasAutorInput>;
export const CapituloUpsertWithoutNotasAutorInputObjectZodSchema = makeSchema();
