import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroUncheckedUpdateWithoutTipoInputObjectSchema as LibroUncheckedUpdateWithoutTipoInputObjectSchema } from "./LibroUncheckedUpdateWithoutTipoInput.schema.ts";
import { LibroUpdateWithoutTipoInputObjectSchema as LibroUpdateWithoutTipoInputObjectSchema } from "./LibroUpdateWithoutTipoInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => LibroUpdateWithoutTipoInputObjectSchema), z.lazy(() => LibroUncheckedUpdateWithoutTipoInputObjectSchema)]),
		})
		.strict();
export const LibroUpdateWithWhereUniqueWithoutTipoInputObjectSchema: z.ZodType<Prisma.LibroUpdateWithWhereUniqueWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateWithWhereUniqueWithoutTipoInput>;
export const LibroUpdateWithWhereUniqueWithoutTipoInputObjectZodSchema = makeSchema();
