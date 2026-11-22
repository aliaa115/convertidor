import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateOrConnectWithoutCapitulosInputObjectSchema as LibroCreateOrConnectWithoutCapitulosInputObjectSchema } from "./LibroCreateOrConnectWithoutCapitulosInput.schema.ts";
import { LibroCreateWithoutCapitulosInputObjectSchema as LibroCreateWithoutCapitulosInputObjectSchema } from "./LibroCreateWithoutCapitulosInput.schema.ts";
import { LibroUncheckedCreateWithoutCapitulosInputObjectSchema as LibroUncheckedCreateWithoutCapitulosInputObjectSchema } from "./LibroUncheckedCreateWithoutCapitulosInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => LibroCreateWithoutCapitulosInputObjectSchema),
					z.lazy(() => LibroUncheckedCreateWithoutCapitulosInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => LibroCreateOrConnectWithoutCapitulosInputObjectSchema)
				.optional(),
			connect: z.lazy(() => LibroWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const LibroCreateNestedOneWithoutCapitulosInputObjectSchema: z.ZodType<Prisma.LibroCreateNestedOneWithoutCapitulosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateNestedOneWithoutCapitulosInput>;
export const LibroCreateNestedOneWithoutCapitulosInputObjectZodSchema =
	makeSchema();
