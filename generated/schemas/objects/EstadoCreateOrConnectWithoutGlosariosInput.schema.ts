import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutGlosariosInputObjectSchema as EstadoCreateWithoutGlosariosInputObjectSchema } from "./EstadoCreateWithoutGlosariosInput.schema.ts";
import { EstadoUncheckedCreateWithoutGlosariosInputObjectSchema as EstadoUncheckedCreateWithoutGlosariosInputObjectSchema } from "./EstadoUncheckedCreateWithoutGlosariosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutGlosariosInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutGlosariosInputObjectSchema),
			]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutGlosariosInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutGlosariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutGlosariosInput>;
export const EstadoCreateOrConnectWithoutGlosariosInputObjectZodSchema =
	makeSchema();
