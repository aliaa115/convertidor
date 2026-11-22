import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CategoriaCreateOrConnectWithoutLibrosInputObjectSchema as CategoriaCreateOrConnectWithoutLibrosInputObjectSchema } from "./CategoriaCreateOrConnectWithoutLibrosInput.schema.ts";
import { CategoriaCreateWithoutLibrosInputObjectSchema as CategoriaCreateWithoutLibrosInputObjectSchema } from "./CategoriaCreateWithoutLibrosInput.schema.ts";
import { CategoriaUncheckedCreateWithoutLibrosInputObjectSchema as CategoriaUncheckedCreateWithoutLibrosInputObjectSchema } from "./CategoriaUncheckedCreateWithoutLibrosInput.schema.ts";
import { CategoriaWhereUniqueInputObjectSchema as CategoriaWhereUniqueInputObjectSchema } from "./CategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => CategoriaCreateWithoutLibrosInputObjectSchema), z.lazy(() => CategoriaUncheckedCreateWithoutLibrosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => CategoriaCreateOrConnectWithoutLibrosInputObjectSchema).optional(),
			connect: z.lazy(() => CategoriaWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const CategoriaCreateNestedOneWithoutLibrosInputObjectSchema: z.ZodType<Prisma.CategoriaCreateNestedOneWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CategoriaCreateNestedOneWithoutLibrosInput>;
export const CategoriaCreateNestedOneWithoutLibrosInputObjectZodSchema = makeSchema();
