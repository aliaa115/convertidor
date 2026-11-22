import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EscritorCreateOrConnectWithoutLibrosInputObjectSchema as EscritorCreateOrConnectWithoutLibrosInputObjectSchema } from "./EscritorCreateOrConnectWithoutLibrosInput.schema.ts";
import { EscritorCreateWithoutLibrosInputObjectSchema as EscritorCreateWithoutLibrosInputObjectSchema } from "./EscritorCreateWithoutLibrosInput.schema.ts";
import { EscritorUncheckedCreateWithoutLibrosInputObjectSchema as EscritorUncheckedCreateWithoutLibrosInputObjectSchema } from "./EscritorUncheckedCreateWithoutLibrosInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EscritorCreateWithoutLibrosInputObjectSchema),
					z.lazy(() => EscritorUncheckedCreateWithoutLibrosInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EscritorCreateOrConnectWithoutLibrosInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EscritorCreateNestedOneWithoutLibrosInputObjectSchema: z.ZodType<Prisma.EscritorCreateNestedOneWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateNestedOneWithoutLibrosInput>;
export const EscritorCreateNestedOneWithoutLibrosInputObjectZodSchema =
	makeSchema();
