import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { IdiomaCreateOrConnectWithoutLibrosInputObjectSchema as IdiomaCreateOrConnectWithoutLibrosInputObjectSchema } from "./IdiomaCreateOrConnectWithoutLibrosInput.schema.ts";
import { IdiomaCreateWithoutLibrosInputObjectSchema as IdiomaCreateWithoutLibrosInputObjectSchema } from "./IdiomaCreateWithoutLibrosInput.schema.ts";
import { IdiomaUncheckedCreateWithoutLibrosInputObjectSchema as IdiomaUncheckedCreateWithoutLibrosInputObjectSchema } from "./IdiomaUncheckedCreateWithoutLibrosInput.schema.ts";
import { IdiomaWhereUniqueInputObjectSchema as IdiomaWhereUniqueInputObjectSchema } from "./IdiomaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => IdiomaCreateWithoutLibrosInputObjectSchema), z.lazy(() => IdiomaUncheckedCreateWithoutLibrosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => IdiomaCreateOrConnectWithoutLibrosInputObjectSchema).optional(),
			connect: z.lazy(() => IdiomaWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const IdiomaCreateNestedOneWithoutLibrosInputObjectSchema: z.ZodType<Prisma.IdiomaCreateNestedOneWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaCreateNestedOneWithoutLibrosInput>;
export const IdiomaCreateNestedOneWithoutLibrosInputObjectZodSchema = makeSchema();
