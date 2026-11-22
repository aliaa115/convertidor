import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutLibrosInputObjectSchema as EstadoCreateOrConnectWithoutLibrosInputObjectSchema } from "./EstadoCreateOrConnectWithoutLibrosInput.schema.ts";
import { EstadoCreateWithoutLibrosInputObjectSchema as EstadoCreateWithoutLibrosInputObjectSchema } from "./EstadoCreateWithoutLibrosInput.schema.ts";
import { EstadoUncheckedCreateWithoutLibrosInputObjectSchema as EstadoUncheckedCreateWithoutLibrosInputObjectSchema } from "./EstadoUncheckedCreateWithoutLibrosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutLibrosInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutLibrosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutLibrosInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutLibrosInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutLibrosInput>;
export const EstadoCreateNestedOneWithoutLibrosInputObjectZodSchema = makeSchema();
