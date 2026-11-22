import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutListasInputObjectSchema as EstadoCreateWithoutListasInputObjectSchema } from "./EstadoCreateWithoutListasInput.schema.ts";
import { EstadoUncheckedCreateWithoutListasInputObjectSchema as EstadoUncheckedCreateWithoutListasInputObjectSchema } from "./EstadoUncheckedCreateWithoutListasInput.schema.ts";
import { EstadoUncheckedUpdateWithoutListasInputObjectSchema as EstadoUncheckedUpdateWithoutListasInputObjectSchema } from "./EstadoUncheckedUpdateWithoutListasInput.schema.ts";
import { EstadoUpdateWithoutListasInputObjectSchema as EstadoUpdateWithoutListasInputObjectSchema } from "./EstadoUpdateWithoutListasInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EstadoUpdateWithoutListasInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutListasInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutListasInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutListasInputObjectSchema),
			]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutListasInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutListasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutListasInput>;
export const EstadoUpsertWithoutListasInputObjectZodSchema = makeSchema();
