import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateWithoutEscritoresInputObjectSchema as EstadoCreateWithoutEscritoresInputObjectSchema } from "./EstadoCreateWithoutEscritoresInput.schema.ts";
import { EstadoUncheckedCreateWithoutEscritoresInputObjectSchema as EstadoUncheckedCreateWithoutEscritoresInputObjectSchema } from "./EstadoUncheckedCreateWithoutEscritoresInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EstadoCreateWithoutEscritoresInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutEscritoresInputObjectSchema)]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutEscritoresInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutEscritoresInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutEscritoresInput>;
export const EstadoCreateOrConnectWithoutEscritoresInputObjectZodSchema = makeSchema();
