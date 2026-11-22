import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateOrConnectWithoutCapitulosInputObjectSchema as LibroCreateOrConnectWithoutCapitulosInputObjectSchema } from "./LibroCreateOrConnectWithoutCapitulosInput.schema.ts";
import { LibroCreateWithoutCapitulosInputObjectSchema as LibroCreateWithoutCapitulosInputObjectSchema } from "./LibroCreateWithoutCapitulosInput.schema.ts";
import { LibroUncheckedCreateWithoutCapitulosInputObjectSchema as LibroUncheckedCreateWithoutCapitulosInputObjectSchema } from "./LibroUncheckedCreateWithoutCapitulosInput.schema.ts";
import { LibroUncheckedUpdateWithoutCapitulosInputObjectSchema as LibroUncheckedUpdateWithoutCapitulosInputObjectSchema } from "./LibroUncheckedUpdateWithoutCapitulosInput.schema.ts";
import { LibroUpdateToOneWithWhereWithoutCapitulosInputObjectSchema as LibroUpdateToOneWithWhereWithoutCapitulosInputObjectSchema } from "./LibroUpdateToOneWithWhereWithoutCapitulosInput.schema.ts";
import { LibroUpdateWithoutCapitulosInputObjectSchema as LibroUpdateWithoutCapitulosInputObjectSchema } from "./LibroUpdateWithoutCapitulosInput.schema.ts";
import { LibroUpsertWithoutCapitulosInputObjectSchema as LibroUpsertWithoutCapitulosInputObjectSchema } from "./LibroUpsertWithoutCapitulosInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => LibroCreateWithoutCapitulosInputObjectSchema), z.lazy(() => LibroUncheckedCreateWithoutCapitulosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => LibroCreateOrConnectWithoutCapitulosInputObjectSchema).optional(),
			upsert: z.lazy(() => LibroUpsertWithoutCapitulosInputObjectSchema).optional(),
			connect: z.lazy(() => LibroWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => LibroUpdateToOneWithWhereWithoutCapitulosInputObjectSchema),
					z.lazy(() => LibroUpdateWithoutCapitulosInputObjectSchema),
					z.lazy(() => LibroUncheckedUpdateWithoutCapitulosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const LibroUpdateOneRequiredWithoutCapitulosNestedInputObjectSchema: z.ZodType<Prisma.LibroUpdateOneRequiredWithoutCapitulosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateOneRequiredWithoutCapitulosNestedInput>;
export const LibroUpdateOneRequiredWithoutCapitulosNestedInputObjectZodSchema = makeSchema();
