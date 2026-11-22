import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateWithoutTipoInputObjectSchema as LibroCreateWithoutTipoInputObjectSchema } from "./LibroCreateWithoutTipoInput.schema.ts";
import { LibroUncheckedCreateWithoutTipoInputObjectSchema as LibroUncheckedCreateWithoutTipoInputObjectSchema } from "./LibroUncheckedCreateWithoutTipoInput.schema.ts";
import { LibroUncheckedUpdateWithoutTipoInputObjectSchema as LibroUncheckedUpdateWithoutTipoInputObjectSchema } from "./LibroUncheckedUpdateWithoutTipoInput.schema.ts";
import { LibroUpdateWithoutTipoInputObjectSchema as LibroUpdateWithoutTipoInputObjectSchema } from "./LibroUpdateWithoutTipoInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => LibroUpdateWithoutTipoInputObjectSchema), z.lazy(() => LibroUncheckedUpdateWithoutTipoInputObjectSchema)]),
			create: z.union([z.lazy(() => LibroCreateWithoutTipoInputObjectSchema), z.lazy(() => LibroUncheckedCreateWithoutTipoInputObjectSchema)]),
		})
		.strict();
export const LibroUpsertWithWhereUniqueWithoutTipoInputObjectSchema: z.ZodType<Prisma.LibroUpsertWithWhereUniqueWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpsertWithWhereUniqueWithoutTipoInput>;
export const LibroUpsertWithWhereUniqueWithoutTipoInputObjectZodSchema = makeSchema();
