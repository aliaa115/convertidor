import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateWithoutMarcadoresInputObjectSchema as EstadoCreateWithoutMarcadoresInputObjectSchema } from "./EstadoCreateWithoutMarcadoresInput.schema.ts";
import { EstadoUncheckedCreateWithoutMarcadoresInputObjectSchema as EstadoUncheckedCreateWithoutMarcadoresInputObjectSchema } from "./EstadoUncheckedCreateWithoutMarcadoresInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EstadoCreateWithoutMarcadoresInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutMarcadoresInputObjectSchema)]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutMarcadoresInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutMarcadoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutMarcadoresInput>;
export const EstadoCreateOrConnectWithoutMarcadoresInputObjectZodSchema = makeSchema();
