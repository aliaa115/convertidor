import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { LibroCreateOrConnectWithoutListaLibrosInputObjectSchema as LibroCreateOrConnectWithoutListaLibrosInputObjectSchema } from "./LibroCreateOrConnectWithoutListaLibrosInput.schema.ts";
import { LibroCreateWithoutListaLibrosInputObjectSchema as LibroCreateWithoutListaLibrosInputObjectSchema } from "./LibroCreateWithoutListaLibrosInput.schema.ts";
import { LibroUncheckedCreateWithoutListaLibrosInputObjectSchema as LibroUncheckedCreateWithoutListaLibrosInputObjectSchema } from "./LibroUncheckedCreateWithoutListaLibrosInput.schema.ts";
import { LibroUncheckedUpdateWithoutListaLibrosInputObjectSchema as LibroUncheckedUpdateWithoutListaLibrosInputObjectSchema } from "./LibroUncheckedUpdateWithoutListaLibrosInput.schema.ts";
import { LibroUpdateToOneWithWhereWithoutListaLibrosInputObjectSchema as LibroUpdateToOneWithWhereWithoutListaLibrosInputObjectSchema } from "./LibroUpdateToOneWithWhereWithoutListaLibrosInput.schema.ts";
import { LibroUpdateWithoutListaLibrosInputObjectSchema as LibroUpdateWithoutListaLibrosInputObjectSchema } from "./LibroUpdateWithoutListaLibrosInput.schema.ts";
import { LibroUpsertWithoutListaLibrosInputObjectSchema as LibroUpsertWithoutListaLibrosInputObjectSchema } from "./LibroUpsertWithoutListaLibrosInput.schema.ts";
import { LibroWhereInputObjectSchema as LibroWhereInputObjectSchema } from "./LibroWhereInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => LibroCreateWithoutListaLibrosInputObjectSchema), z.lazy(() => LibroUncheckedCreateWithoutListaLibrosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => LibroCreateOrConnectWithoutListaLibrosInputObjectSchema).optional(),
			upsert: z.lazy(() => LibroUpsertWithoutListaLibrosInputObjectSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => LibroWhereInputObjectSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => LibroWhereInputObjectSchema)]).optional(),
			connect: z.lazy(() => LibroWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => LibroUpdateToOneWithWhereWithoutListaLibrosInputObjectSchema),
					z.lazy(() => LibroUpdateWithoutListaLibrosInputObjectSchema),
					z.lazy(() => LibroUncheckedUpdateWithoutListaLibrosInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const LibroUpdateOneWithoutListaLibrosNestedInputObjectSchema: z.ZodType<Prisma.LibroUpdateOneWithoutListaLibrosNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroUpdateOneWithoutListaLibrosNestedInput>;
export const LibroUpdateOneWithoutListaLibrosNestedInputObjectZodSchema = makeSchema();
