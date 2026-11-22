import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { IdiomaCreateOrConnectWithoutLibrosInputObjectSchema as IdiomaCreateOrConnectWithoutLibrosInputObjectSchema } from "./IdiomaCreateOrConnectWithoutLibrosInput.schema.ts";
import { IdiomaCreateWithoutLibrosInputObjectSchema as IdiomaCreateWithoutLibrosInputObjectSchema } from "./IdiomaCreateWithoutLibrosInput.schema.ts";
import { IdiomaUncheckedCreateWithoutLibrosInputObjectSchema as IdiomaUncheckedCreateWithoutLibrosInputObjectSchema } from "./IdiomaUncheckedCreateWithoutLibrosInput.schema.ts";
import { IdiomaUncheckedUpdateWithoutLibrosInputObjectSchema as IdiomaUncheckedUpdateWithoutLibrosInputObjectSchema } from "./IdiomaUncheckedUpdateWithoutLibrosInput.schema.ts";
import { IdiomaUpdateToOneWithWhereWithoutLibrosInputObjectSchema as IdiomaUpdateToOneWithWhereWithoutLibrosInputObjectSchema } from "./IdiomaUpdateToOneWithWhereWithoutLibrosInput.schema.ts";
import { IdiomaUpdateWithoutLibrosInputObjectSchema as IdiomaUpdateWithoutLibrosInputObjectSchema } from "./IdiomaUpdateWithoutLibrosInput.schema.ts";
import { IdiomaUpsertWithoutLibrosInputObjectSchema as IdiomaUpsertWithoutLibrosInputObjectSchema } from "./IdiomaUpsertWithoutLibrosInput.schema.ts";
import { IdiomaWhereUniqueInputObjectSchema as IdiomaWhereUniqueInputObjectSchema } from "./IdiomaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => IdiomaCreateWithoutLibrosInputObjectSchema),
					z.lazy(() => IdiomaUncheckedCreateWithoutLibrosInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => IdiomaCreateOrConnectWithoutLibrosInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => IdiomaUpsertWithoutLibrosInputObjectSchema)
				.optional(),
			connect: z.lazy(() => IdiomaWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() => IdiomaUpdateToOneWithWhereWithoutLibrosInputObjectSchema,
					),
					z.lazy(() => IdiomaUpdateWithoutLibrosInputObjectSchema),
					z.lazy(() => IdiomaUncheckedUpdateWithoutLibrosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const IdiomaUpdateOneRequiredWithoutLibrosNestedInputObjectSchema: z.ZodType<Prisma.IdiomaUpdateOneRequiredWithoutLibrosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.IdiomaUpdateOneRequiredWithoutLibrosNestedInput>;
export const IdiomaUpdateOneRequiredWithoutLibrosNestedInputObjectZodSchema =
	makeSchema();
