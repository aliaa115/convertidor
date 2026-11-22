import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateWithoutLibroInputObjectSchema as CapituloCreateWithoutLibroInputObjectSchema } from "./CapituloCreateWithoutLibroInput.schema.ts";
import { CapituloUncheckedCreateWithoutLibroInputObjectSchema as CapituloUncheckedCreateWithoutLibroInputObjectSchema } from "./CapituloUncheckedCreateWithoutLibroInput.schema.ts";
import { CapituloUncheckedUpdateWithoutLibroInputObjectSchema as CapituloUncheckedUpdateWithoutLibroInputObjectSchema } from "./CapituloUncheckedUpdateWithoutLibroInput.schema.ts";
import { CapituloUpdateWithoutLibroInputObjectSchema as CapituloUpdateWithoutLibroInputObjectSchema } from "./CapituloUpdateWithoutLibroInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./CapituloWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CapituloWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => CapituloUpdateWithoutLibroInputObjectSchema),
				z.lazy(() => CapituloUncheckedUpdateWithoutLibroInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => CapituloCreateWithoutLibroInputObjectSchema),
				z.lazy(() => CapituloUncheckedCreateWithoutLibroInputObjectSchema),
			]),
		})
		.strict();
export const CapituloUpsertWithWhereUniqueWithoutLibroInputObjectSchema: z.ZodType<Prisma.CapituloUpsertWithWhereUniqueWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUpsertWithWhereUniqueWithoutLibroInput>;
export const CapituloUpsertWithWhereUniqueWithoutLibroInputObjectZodSchema =
	makeSchema();
