import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateWithoutListaLibrosInputObjectSchema as LibroCreateWithoutListaLibrosInputObjectSchema } from "./LibroCreateWithoutListaLibrosInput.schema.ts";
import { LibroUncheckedCreateWithoutListaLibrosInputObjectSchema as LibroUncheckedCreateWithoutListaLibrosInputObjectSchema } from "./LibroUncheckedCreateWithoutListaLibrosInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => LibroCreateWithoutListaLibrosInputObjectSchema), z.lazy(() => LibroUncheckedCreateWithoutListaLibrosInputObjectSchema)]),
		})
		.strict();
export const LibroCreateOrConnectWithoutListaLibrosInputObjectSchema: z.ZodType<Prisma.LibroCreateOrConnectWithoutListaLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateOrConnectWithoutListaLibrosInput>;
export const LibroCreateOrConnectWithoutListaLibrosInputObjectZodSchema = makeSchema();
