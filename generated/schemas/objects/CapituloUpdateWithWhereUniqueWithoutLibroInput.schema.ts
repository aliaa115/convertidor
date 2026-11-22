import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloUncheckedUpdateWithoutLibroInputObjectSchema as CapituloUncheckedUpdateWithoutLibroInputObjectSchema } from "./CapituloUncheckedUpdateWithoutLibroInput.schema.ts";
import { CapituloUpdateWithoutLibroInputObjectSchema as CapituloUpdateWithoutLibroInputObjectSchema } from "./CapituloUpdateWithoutLibroInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./CapituloWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CapituloWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => CapituloUpdateWithoutLibroInputObjectSchema),
				z.lazy(() => CapituloUncheckedUpdateWithoutLibroInputObjectSchema),
			]),
		})
		.strict();
export const CapituloUpdateWithWhereUniqueWithoutLibroInputObjectSchema: z.ZodType<Prisma.CapituloUpdateWithWhereUniqueWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUpdateWithWhereUniqueWithoutLibroInput>;
export const CapituloUpdateWithWhereUniqueWithoutLibroInputObjectZodSchema =
	makeSchema();
