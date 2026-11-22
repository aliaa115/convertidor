import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateWithoutListaLibrosInputObjectSchema as EstadoCreateWithoutListaLibrosInputObjectSchema } from "./EstadoCreateWithoutListaLibrosInput.schema.ts";
import { EstadoUncheckedCreateWithoutListaLibrosInputObjectSchema as EstadoUncheckedCreateWithoutListaLibrosInputObjectSchema } from "./EstadoUncheckedCreateWithoutListaLibrosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EstadoCreateWithoutListaLibrosInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutListaLibrosInputObjectSchema)]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutListaLibrosInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutListaLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutListaLibrosInput>;
export const EstadoCreateOrConnectWithoutListaLibrosInputObjectZodSchema = makeSchema();
