import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutLibrosInputObjectSchema as EstadoCreateWithoutLibrosInputObjectSchema } from "./EstadoCreateWithoutLibrosInput.schema.ts";
import { EstadoUncheckedCreateWithoutLibrosInputObjectSchema as EstadoUncheckedCreateWithoutLibrosInputObjectSchema } from "./EstadoUncheckedCreateWithoutLibrosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutLibrosInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutLibrosInputObjectSchema),
			]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutLibrosInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutLibrosInput>;
export const EstadoCreateOrConnectWithoutLibrosInputObjectZodSchema =
	makeSchema();
