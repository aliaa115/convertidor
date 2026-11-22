import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateWithoutLibrosInputObjectSchema as EscritorCreateWithoutLibrosInputObjectSchema } from "./EscritorCreateWithoutLibrosInput.schema.ts";
import { EscritorUncheckedCreateWithoutLibrosInputObjectSchema as EscritorUncheckedCreateWithoutLibrosInputObjectSchema } from "./EscritorUncheckedCreateWithoutLibrosInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EscritorWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EscritorCreateWithoutLibrosInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutLibrosInputObjectSchema)]),
		})
		.strict();
export const EscritorCreateOrConnectWithoutLibrosInputObjectSchema: z.ZodType<Prisma.EscritorCreateOrConnectWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorCreateOrConnectWithoutLibrosInput>;
export const EscritorCreateOrConnectWithoutLibrosInputObjectZodSchema = makeSchema();
