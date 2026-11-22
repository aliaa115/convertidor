import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCategoriaCreateWithoutCategoriaInputObjectSchema as LibroCategoriaCreateWithoutCategoriaInputObjectSchema } from "./LibroCategoriaCreateWithoutCategoriaInput.schema.ts";
import { LibroCategoriaUncheckedCreateWithoutCategoriaInputObjectSchema as LibroCategoriaUncheckedCreateWithoutCategoriaInputObjectSchema } from "./LibroCategoriaUncheckedCreateWithoutCategoriaInput.schema.ts";
import { LibroCategoriaWhereUniqueInputObjectSchema as LibroCategoriaWhereUniqueInputObjectSchema } from "./LibroCategoriaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroCategoriaWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => LibroCategoriaCreateWithoutCategoriaInputObjectSchema), z.lazy(() => LibroCategoriaUncheckedCreateWithoutCategoriaInputObjectSchema)]),
		})
		.strict();
export const LibroCategoriaCreateOrConnectWithoutCategoriaInputObjectSchema: z.ZodType<Prisma.LibroCategoriaCreateOrConnectWithoutCategoriaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCategoriaCreateOrConnectWithoutCategoriaInput>;
export const LibroCategoriaCreateOrConnectWithoutCategoriaInputObjectZodSchema = makeSchema();
