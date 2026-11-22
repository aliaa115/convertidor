import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutCapitulosInputObjectSchema as EstadoCreateWithoutCapitulosInputObjectSchema } from "./EstadoCreateWithoutCapitulosInput.schema.ts";
import { EstadoUncheckedCreateWithoutCapitulosInputObjectSchema as EstadoUncheckedCreateWithoutCapitulosInputObjectSchema } from "./EstadoUncheckedCreateWithoutCapitulosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutCapitulosInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutCapitulosInputObjectSchema),
			]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutCapitulosInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutCapitulosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutCapitulosInput>;
export const EstadoCreateOrConnectWithoutCapitulosInputObjectZodSchema =
	makeSchema();
