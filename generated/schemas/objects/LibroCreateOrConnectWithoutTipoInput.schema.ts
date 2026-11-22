import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { LibroCreateWithoutTipoInputObjectSchema as LibroCreateWithoutTipoInputObjectSchema } from "./LibroCreateWithoutTipoInput.schema.ts";
import { LibroUncheckedCreateWithoutTipoInputObjectSchema as LibroUncheckedCreateWithoutTipoInputObjectSchema } from "./LibroUncheckedCreateWithoutTipoInput.schema.ts";
import { LibroWhereUniqueInputObjectSchema as LibroWhereUniqueInputObjectSchema } from "./LibroWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => LibroWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => LibroCreateWithoutTipoInputObjectSchema),
				z.lazy(() => LibroUncheckedCreateWithoutTipoInputObjectSchema),
			]),
		})
		.strict();
export const LibroCreateOrConnectWithoutTipoInputObjectSchema: z.ZodType<Prisma.LibroCreateOrConnectWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.LibroCreateOrConnectWithoutTipoInput>;
export const LibroCreateOrConnectWithoutTipoInputObjectZodSchema = makeSchema();
