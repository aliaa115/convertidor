import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutUsuariosInputObjectSchema as EstadoCreateWithoutUsuariosInputObjectSchema } from "./EstadoCreateWithoutUsuariosInput.schema.ts";
import { EstadoUncheckedCreateWithoutUsuariosInputObjectSchema as EstadoUncheckedCreateWithoutUsuariosInputObjectSchema } from "./EstadoUncheckedCreateWithoutUsuariosInput.schema.ts";
import { EstadoUncheckedUpdateWithoutUsuariosInputObjectSchema as EstadoUncheckedUpdateWithoutUsuariosInputObjectSchema } from "./EstadoUncheckedUpdateWithoutUsuariosInput.schema.ts";
import { EstadoUpdateWithoutUsuariosInputObjectSchema as EstadoUpdateWithoutUsuariosInputObjectSchema } from "./EstadoUpdateWithoutUsuariosInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([
				z.lazy(() => EstadoUpdateWithoutUsuariosInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutUsuariosInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutUsuariosInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutUsuariosInputObjectSchema),
			]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutUsuariosInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutUsuariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutUsuariosInput>;
export const EstadoUpsertWithoutUsuariosInputObjectZodSchema = makeSchema();
