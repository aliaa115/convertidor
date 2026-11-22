import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutListasInputObjectSchema as EstadoCreateWithoutListasInputObjectSchema } from "./EstadoCreateWithoutListasInput.schema.ts";
import { EstadoUncheckedCreateWithoutListasInputObjectSchema as EstadoUncheckedCreateWithoutListasInputObjectSchema } from "./EstadoUncheckedCreateWithoutListasInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutListasInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutListasInputObjectSchema),
			]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutListasInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutListasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutListasInput>;
export const EstadoCreateOrConnectWithoutListasInputObjectZodSchema =
	makeSchema();
