import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateWithoutIdiomaInputObjectSchema as EstadoCreateWithoutIdiomaInputObjectSchema } from "./EstadoCreateWithoutIdiomaInput.schema.ts";
import { EstadoUncheckedCreateWithoutIdiomaInputObjectSchema as EstadoUncheckedCreateWithoutIdiomaInputObjectSchema } from "./EstadoUncheckedCreateWithoutIdiomaInput.schema.ts";
import { EstadoUncheckedUpdateWithoutIdiomaInputObjectSchema as EstadoUncheckedUpdateWithoutIdiomaInputObjectSchema } from "./EstadoUncheckedUpdateWithoutIdiomaInput.schema.ts";
import { EstadoUpdateWithoutIdiomaInputObjectSchema as EstadoUpdateWithoutIdiomaInputObjectSchema } from "./EstadoUpdateWithoutIdiomaInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => EstadoUpdateWithoutIdiomaInputObjectSchema), z.lazy(() => EstadoUncheckedUpdateWithoutIdiomaInputObjectSchema)]),
			create: z.union([z.lazy(() => EstadoCreateWithoutIdiomaInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutIdiomaInputObjectSchema)]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutIdiomaInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutIdiomaInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutIdiomaInput>;
export const EstadoUpsertWithoutIdiomaInputObjectZodSchema = makeSchema();
