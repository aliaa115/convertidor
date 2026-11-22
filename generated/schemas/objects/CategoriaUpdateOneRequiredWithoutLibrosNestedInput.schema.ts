import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CategoriaCreateOrConnectWithoutLibrosInputObjectSchema as CategoriaCreateOrConnectWithoutLibrosInputObjectSchema } from "./CategoriaCreateOrConnectWithoutLibrosInput.schema.ts";
import { CategoriaCreateWithoutLibrosInputObjectSchema as CategoriaCreateWithoutLibrosInputObjectSchema } from "./CategoriaCreateWithoutLibrosInput.schema.ts";
import { CategoriaUncheckedCreateWithoutLibrosInputObjectSchema as CategoriaUncheckedCreateWithoutLibrosInputObjectSchema } from "./CategoriaUncheckedCreateWithoutLibrosInput.schema.ts";
import { CategoriaUncheckedUpdateWithoutLibrosInputObjectSchema as CategoriaUncheckedUpdateWithoutLibrosInputObjectSchema } from "./CategoriaUncheckedUpdateWithoutLibrosInput.schema.ts";
import { CategoriaUpdateToOneWithWhereWithoutLibrosInputObjectSchema as CategoriaUpdateToOneWithWhereWithoutLibrosInputObjectSchema } from "./CategoriaUpdateToOneWithWhereWithoutLibrosInput.schema.ts";
import { CategoriaUpdateWithoutLibrosInputObjectSchema as CategoriaUpdateWithoutLibrosInputObjectSchema } from "./CategoriaUpdateWithoutLibrosInput.schema.ts";
import { CategoriaUpsertWithoutLibrosInputObjectSchema as CategoriaUpsertWithoutLibrosInputObjectSchema } from "./CategoriaUpsertWithoutLibrosInput.schema.ts";
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from "./CategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => CategoriaCreateWithoutLibrosInputObjectSchema), z.lazy(() => CategoriaUncheckedCreateWithoutLibrosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => CategoriaCreateOrConnectWithoutLibrosInputObjectSchema).optional(),
			upsert: z.lazy(() => CategoriaUpsertWithoutLibrosInputObjectSchema).optional(),
			connect: z.lazy(() => CategoriaWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => CategoriaUpdateToOneWithWhereWithoutLibrosInputObjectSchema),
					z.lazy(() => CategoriaUpdateWithoutLibrosInputObjectSchema),
					z.lazy(() => CategoriaUncheckedUpdateWithoutLibrosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const CategoriaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema: z.ZodType<Prisma.CategoriaUpdateOneRequiredWithoutLibrosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaUpdateOneRequiredWithoutLibrosNestedInput>;
export const CategoriaUpdateOneRequiredWithoutLibrosNestedInputObjectZodSchema = makeSchema();
