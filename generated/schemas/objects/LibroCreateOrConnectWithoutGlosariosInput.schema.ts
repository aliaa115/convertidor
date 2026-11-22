import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateWithoutGlosariosInputObjectSchema as LibroCreateWithoutGlosariosInputObjectSchema } from "./LibroCreateWithoutGlosariosInput.schema.ts";
import { LibroUncheckedCreateWithoutGlosariosInputObjectSchema as LibroUncheckedCreateWithoutGlosariosInputObjectSchema } from "./LibroUncheckedCreateWithoutGlosariosInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => LibroCreateWithoutGlosariosInputObjectSchema), z.lazy(() => LibroUncheckedCreateWithoutGlosariosInputObjectSchema)]),
		})
		.strict();
export const LibroCreateOrConnectWithoutGlosariosInputObjectSchema: z.ZodType<Prisma.LibroCreateOrConnectWithoutGlosariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateOrConnectWithoutGlosariosInput>;
export const LibroCreateOrConnectWithoutGlosariosInputObjectZodSchema = makeSchema();
