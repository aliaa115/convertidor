import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateOrConnectWithoutListaLibrosInputObjectSchema as LibroCreateOrConnectWithoutListaLibrosInputObjectSchema } from "./LibroCreateOrConnectWithoutListaLibrosInput.schema.ts";
import { LibroCreateWithoutListaLibrosInputObjectSchema as LibroCreateWithoutListaLibrosInputObjectSchema } from "./LibroCreateWithoutListaLibrosInput.schema.ts";
import { LibroUncheckedCreateWithoutListaLibrosInputObjectSchema as LibroUncheckedCreateWithoutListaLibrosInputObjectSchema } from "./LibroUncheckedCreateWithoutListaLibrosInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => LibroCreateWithoutListaLibrosInputObjectSchema), z.lazy(() => LibroUncheckedCreateWithoutListaLibrosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => LibroCreateOrConnectWithoutListaLibrosInputObjectSchema).optional(),
			connect: z.lazy(() => LibroWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const LibroCreateNestedOneWithoutListaLibrosInputObjectSchema: z.ZodType<Prisma.LibroCreateNestedOneWithoutListaLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateNestedOneWithoutListaLibrosInput>;
export const LibroCreateNestedOneWithoutListaLibrosInputObjectZodSchema = makeSchema();
