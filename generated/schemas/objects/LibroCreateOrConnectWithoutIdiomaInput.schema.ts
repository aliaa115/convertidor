import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateWithoutIdiomaInputObjectSchema as LibroCreateWithoutIdiomaInputObjectSchema } from "./LibroCreateWithoutIdiomaInput.schema.ts";
import { LibroUncheckedCreateWithoutIdiomaInputObjectSchema as LibroUncheckedCreateWithoutIdiomaInputObjectSchema } from "./LibroUncheckedCreateWithoutIdiomaInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => LibroCreateWithoutIdiomaInputObjectSchema),
				z.lazy(() => LibroUncheckedCreateWithoutIdiomaInputObjectSchema),
			]),
		})
		.strict();
export const LibroCreateOrConnectWithoutIdiomaInputObjectSchema: z.ZodType<Prisma.LibroCreateOrConnectWithoutIdiomaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateOrConnectWithoutIdiomaInput>;
export const LibroCreateOrConnectWithoutIdiomaInputObjectZodSchema =
	makeSchema();
