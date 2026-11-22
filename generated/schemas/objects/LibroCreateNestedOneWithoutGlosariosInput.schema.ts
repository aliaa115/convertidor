import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateOrConnectWithoutGlosariosInputObjectSchema as LibroCreateOrConnectWithoutGlosariosInputObjectSchema } from "./LibroCreateOrConnectWithoutGlosariosInput.schema.ts";
import { LibroCreateWithoutGlosariosInputObjectSchema as LibroCreateWithoutGlosariosInputObjectSchema } from "./LibroCreateWithoutGlosariosInput.schema.ts";
import { LibroUncheckedCreateWithoutGlosariosInputObjectSchema as LibroUncheckedCreateWithoutGlosariosInputObjectSchema } from "./LibroUncheckedCreateWithoutGlosariosInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => LibroCreateWithoutGlosariosInputObjectSchema), z.lazy(() => LibroUncheckedCreateWithoutGlosariosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => LibroCreateOrConnectWithoutGlosariosInputObjectSchema).optional(),
			connect: z.lazy(() => LibroWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const LibroCreateNestedOneWithoutGlosariosInputObjectSchema: z.ZodType<Prisma.LibroCreateNestedOneWithoutGlosariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateNestedOneWithoutGlosariosInput>;
export const LibroCreateNestedOneWithoutGlosariosInputObjectZodSchema = makeSchema();
