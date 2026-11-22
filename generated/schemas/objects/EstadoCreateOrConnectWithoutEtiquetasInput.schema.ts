import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutEtiquetasInputObjectSchema as EstadoCreateWithoutEtiquetasInputObjectSchema } from "./EstadoCreateWithoutEtiquetasInput.schema.ts";
import { EstadoUncheckedCreateWithoutEtiquetasInputObjectSchema as EstadoUncheckedCreateWithoutEtiquetasInputObjectSchema } from "./EstadoUncheckedCreateWithoutEtiquetasInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutEtiquetasInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutEtiquetasInputObjectSchema),
			]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutEtiquetasInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutEtiquetasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutEtiquetasInput>;
export const EstadoCreateOrConnectWithoutEtiquetasInputObjectZodSchema =
	makeSchema();
