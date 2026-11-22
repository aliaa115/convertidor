import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutCapitulosInputObjectSchema as EstadoCreateOrConnectWithoutCapitulosInputObjectSchema } from "./EstadoCreateOrConnectWithoutCapitulosInput.schema.ts";
import { EstadoCreateWithoutCapitulosInputObjectSchema as EstadoCreateWithoutCapitulosInputObjectSchema } from "./EstadoCreateWithoutCapitulosInput.schema.ts";
import { EstadoUncheckedCreateWithoutCapitulosInputObjectSchema as EstadoUncheckedCreateWithoutCapitulosInputObjectSchema } from "./EstadoUncheckedCreateWithoutCapitulosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutCapitulosInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutCapitulosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutCapitulosInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutCapitulosInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutCapitulosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutCapitulosInput>;
export const EstadoCreateNestedOneWithoutCapitulosInputObjectZodSchema = makeSchema();
