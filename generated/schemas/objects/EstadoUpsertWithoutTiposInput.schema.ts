import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateWithoutTiposInputObjectSchema as EstadoCreateWithoutTiposInputObjectSchema } from "./EstadoCreateWithoutTiposInput.schema.ts";
import { EstadoUncheckedCreateWithoutTiposInputObjectSchema as EstadoUncheckedCreateWithoutTiposInputObjectSchema } from "./EstadoUncheckedCreateWithoutTiposInput.schema.ts";
import { EstadoUncheckedUpdateWithoutTiposInputObjectSchema as EstadoUncheckedUpdateWithoutTiposInputObjectSchema } from "./EstadoUncheckedUpdateWithoutTiposInput.schema.ts";
import { EstadoUpdateWithoutTiposInputObjectSchema as EstadoUpdateWithoutTiposInputObjectSchema } from "./EstadoUpdateWithoutTiposInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => EstadoUpdateWithoutTiposInputObjectSchema), z.lazy(() => EstadoUncheckedUpdateWithoutTiposInputObjectSchema)]),
			create: z.union([z.lazy(() => EstadoCreateWithoutTiposInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutTiposInputObjectSchema)]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutTiposInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutTiposInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutTiposInput>;
export const EstadoUpsertWithoutTiposInputObjectZodSchema = makeSchema();
