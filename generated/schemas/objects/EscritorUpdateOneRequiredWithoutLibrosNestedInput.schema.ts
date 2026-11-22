import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateOrConnectWithoutLibrosInputObjectSchema as EscritorCreateOrConnectWithoutLibrosInputObjectSchema } from "./EscritorCreateOrConnectWithoutLibrosInput.schema.ts";
import { EscritorCreateWithoutLibrosInputObjectSchema as EscritorCreateWithoutLibrosInputObjectSchema } from "./EscritorCreateWithoutLibrosInput.schema.ts";
import { EscritorUncheckedCreateWithoutLibrosInputObjectSchema as EscritorUncheckedCreateWithoutLibrosInputObjectSchema } from "./EscritorUncheckedCreateWithoutLibrosInput.schema.ts";
import { EscritorUncheckedUpdateWithoutLibrosInputObjectSchema as EscritorUncheckedUpdateWithoutLibrosInputObjectSchema } from "./EscritorUncheckedUpdateWithoutLibrosInput.schema.ts";
import { EscritorUpdateToOneWithWhereWithoutLibrosInputObjectSchema as EscritorUpdateToOneWithWhereWithoutLibrosInputObjectSchema } from "./EscritorUpdateToOneWithWhereWithoutLibrosInput.schema.ts";
import { EscritorUpdateWithoutLibrosInputObjectSchema as EscritorUpdateWithoutLibrosInputObjectSchema } from "./EscritorUpdateWithoutLibrosInput.schema.ts";
import { EscritorUpsertWithoutLibrosInputObjectSchema as EscritorUpsertWithoutLibrosInputObjectSchema } from "./EscritorUpsertWithoutLibrosInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EscritorCreateWithoutLibrosInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutLibrosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EscritorCreateOrConnectWithoutLibrosInputObjectSchema).optional(),
			upsert: z.lazy(() => EscritorUpsertWithoutLibrosInputObjectSchema).optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => EscritorUpdateToOneWithWhereWithoutLibrosInputObjectSchema),
					z.lazy(() => EscritorUpdateWithoutLibrosInputObjectSchema),
					z.lazy(() => EscritorUncheckedUpdateWithoutLibrosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EscritorUpdateOneRequiredWithoutLibrosNestedInputObjectSchema: z.ZodType<Prisma.EscritorUpdateOneRequiredWithoutLibrosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUpdateOneRequiredWithoutLibrosNestedInput>;
export const EscritorUpdateOneRequiredWithoutLibrosNestedInputObjectZodSchema = makeSchema();
