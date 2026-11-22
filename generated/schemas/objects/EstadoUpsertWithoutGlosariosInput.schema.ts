import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutGlosariosInputObjectSchema as EstadoCreateWithoutGlosariosInputObjectSchema } from "./EstadoCreateWithoutGlosariosInput.schema.ts";
import { EstadoUncheckedCreateWithoutGlosariosInputObjectSchema as EstadoUncheckedCreateWithoutGlosariosInputObjectSchema } from "./EstadoUncheckedCreateWithoutGlosariosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutGlosariosInputObjectSchema as EstadoUncheckedUpdateWithoutGlosariosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutGlosariosInput.schema.ts";
import { EstadoUpdateWithoutGlosariosInputObjectSchema as EstadoUpdateWithoutGlosariosInputObjectSchema } from "./EstadoUpdateWithoutGlosariosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EstadoUpdateWithoutGlosariosInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutGlosariosInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutGlosariosInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutGlosariosInputObjectSchema),
			]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutGlosariosInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutGlosariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutGlosariosInput>;
export const EstadoUpsertWithoutGlosariosInputObjectZodSchema = makeSchema();
