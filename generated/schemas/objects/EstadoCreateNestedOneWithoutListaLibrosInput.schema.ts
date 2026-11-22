import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutListaLibrosInputObjectSchema as EstadoCreateOrConnectWithoutListaLibrosInputObjectSchema } from "./EstadoCreateOrConnectWithoutListaLibrosInput.schema.ts";
import { EstadoCreateWithoutListaLibrosInputObjectSchema as EstadoCreateWithoutListaLibrosInputObjectSchema } from "./EstadoCreateWithoutListaLibrosInput.schema.ts";
import { EstadoUncheckedCreateWithoutListaLibrosInputObjectSchema as EstadoUncheckedCreateWithoutListaLibrosInputObjectSchema } from "./EstadoUncheckedCreateWithoutListaLibrosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutListaLibrosInputObjectSchema),
					z.lazy(
						() => EstadoUncheckedCreateWithoutListaLibrosInputObjectSchema,
					),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutListaLibrosInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutListaLibrosInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutListaLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutListaLibrosInput>;
export const EstadoCreateNestedOneWithoutListaLibrosInputObjectZodSchema =
	makeSchema();
