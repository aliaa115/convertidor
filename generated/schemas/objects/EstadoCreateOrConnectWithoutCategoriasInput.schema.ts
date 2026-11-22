import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutCategoriasInputObjectSchema as EstadoCreateWithoutCategoriasInputObjectSchema } from "./EstadoCreateWithoutCategoriasInput.schema.ts";
import { EstadoUncheckedCreateWithoutCategoriasInputObjectSchema as EstadoUncheckedCreateWithoutCategoriasInputObjectSchema } from "./EstadoUncheckedCreateWithoutCategoriasInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutCategoriasInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutCategoriasInputObjectSchema),
			]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutCategoriasInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutCategoriasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutCategoriasInput>;
export const EstadoCreateOrConnectWithoutCategoriasInputObjectZodSchema =
	makeSchema();
