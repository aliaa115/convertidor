import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateWithoutEscritorInputObjectSchema as LibroCreateWithoutEscritorInputObjectSchema } from "./LibroCreateWithoutEscritorInput.schema.ts";
import { LibroUncheckedCreateWithoutEscritorInputObjectSchema as LibroUncheckedCreateWithoutEscritorInputObjectSchema } from "./LibroUncheckedCreateWithoutEscritorInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => LibroCreateWithoutEscritorInputObjectSchema),
				z.lazy(() => LibroUncheckedCreateWithoutEscritorInputObjectSchema),
			]),
		})
		.strict();
export const LibroCreateOrConnectWithoutEscritorInputObjectSchema: z.ZodType<Prisma.LibroCreateOrConnectWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateOrConnectWithoutEscritorInput>;
export const LibroCreateOrConnectWithoutEscritorInputObjectZodSchema =
	makeSchema();
