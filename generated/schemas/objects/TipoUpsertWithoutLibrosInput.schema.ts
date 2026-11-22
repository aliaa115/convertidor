import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { TipoCreateWithoutLibrosInputObjectSchema as TipoCreateWithoutLibrosInputObjectSchema } from "./TipoCreateWithoutLibrosInput.schema.ts";
import { TipoUncheckedCreateWithoutLibrosInputObjectSchema as TipoUncheckedCreateWithoutLibrosInputObjectSchema } from "./TipoUncheckedCreateWithoutLibrosInput.schema.ts";
import { TipoUncheckedUpdateWithoutLibrosInputObjectSchema as TipoUncheckedUpdateWithoutLibrosInputObjectSchema } from "./TipoUncheckedUpdateWithoutLibrosInput.schema.ts";
import { TipoUpdateWithoutLibrosInputObjectSchema as TipoUpdateWithoutLibrosInputObjectSchema } from "./TipoUpdateWithoutLibrosInput.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./TipoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => TipoUpdateWithoutLibrosInputObjectSchema), z.lazy(() => TipoUncheckedUpdateWithoutLibrosInputObjectSchema)]),
			create: z.union([z.lazy(() => TipoCreateWithoutLibrosInputObjectSchema), z.lazy(() => TipoUncheckedCreateWithoutLibrosInputObjectSchema)]),
			where: z.lazy(() => TipoWhereInputObjectSchema).optional(),
		})
		.strict();
export const TipoUpsertWithoutLibrosInputObjectSchema: z.ZodType<Prisma.TipoUpsertWithoutLibrosInput> = makeSchema() as unknown as z.ZodType<Prisma.TipoUpsertWithoutLibrosInput>;
export const TipoUpsertWithoutLibrosInputObjectZodSchema = makeSchema();
