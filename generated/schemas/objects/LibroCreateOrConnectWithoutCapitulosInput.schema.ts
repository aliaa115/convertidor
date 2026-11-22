import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateWithoutCapitulosInputObjectSchema as LibroCreateWithoutCapitulosInputObjectSchema } from "./LibroCreateWithoutCapitulosInput.schema.ts";
import { LibroUncheckedCreateWithoutCapitulosInputObjectSchema as LibroUncheckedCreateWithoutCapitulosInputObjectSchema } from "./LibroUncheckedCreateWithoutCapitulosInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => LibroCreateWithoutCapitulosInputObjectSchema), z.lazy(() => LibroUncheckedCreateWithoutCapitulosInputObjectSchema)]),
		})
		.strict();
export const LibroCreateOrConnectWithoutCapitulosInputObjectSchema: z.ZodType<Prisma.LibroCreateOrConnectWithoutCapitulosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateOrConnectWithoutCapitulosInput>;
export const LibroCreateOrConnectWithoutCapitulosInputObjectZodSchema = makeSchema();
