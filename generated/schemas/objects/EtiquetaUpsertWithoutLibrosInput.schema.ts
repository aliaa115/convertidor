import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EtiquetaCreateWithoutLibrosInputObjectSchema as EtiquetaCreateWithoutLibrosInputObjectSchema } from "./EtiquetaCreateWithoutLibrosInput.schema.ts";
import { EtiquetaUncheckedCreateWithoutLibrosInputObjectSchema as EtiquetaUncheckedCreateWithoutLibrosInputObjectSchema } from "./EtiquetaUncheckedCreateWithoutLibrosInput.schema.ts";
import { EtiquetaUncheckedUpdateWithoutLibrosInputObjectSchema as EtiquetaUncheckedUpdateWithoutLibrosInputObjectSchema } from "./EtiquetaUncheckedUpdateWithoutLibrosInput.schema.ts";
import { EtiquetaUpdateWithoutLibrosInputObjectSchema as EtiquetaUpdateWithoutLibrosInputObjectSchema } from "./EtiquetaUpdateWithoutLibrosInput.schema.ts";
import { EtiquetaWhereInputObjectSchema as EtiquetaWhereInputObjectSchema } from "./EtiquetaWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EtiquetaUpdateWithoutLibrosInputObjectSchema),
				z.lazy(() => EtiquetaUncheckedUpdateWithoutLibrosInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EtiquetaCreateWithoutLibrosInputObjectSchema),
				z.lazy(() => EtiquetaUncheckedCreateWithoutLibrosInputObjectSchema),
			]),
			where: z.lazy(() => EtiquetaWhereInputObjectSchema).optional(),
		})
		.strict();
export const EtiquetaUpsertWithoutLibrosInputObjectSchema: z.ZodType<Prisma.EtiquetaUpsertWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaUpsertWithoutLibrosInput>;
export const EtiquetaUpsertWithoutLibrosInputObjectZodSchema = makeSchema();
