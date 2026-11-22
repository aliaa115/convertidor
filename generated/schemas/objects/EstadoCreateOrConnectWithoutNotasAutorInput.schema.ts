import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateWithoutNotasAutorInputObjectSchema as EstadoCreateWithoutNotasAutorInputObjectSchema } from "./EstadoCreateWithoutNotasAutorInput.schema.ts";
import { EstadoUncheckedCreateWithoutNotasAutorInputObjectSchema as EstadoUncheckedCreateWithoutNotasAutorInputObjectSchema } from "./EstadoUncheckedCreateWithoutNotasAutorInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => EstadoCreateWithoutNotasAutorInputObjectSchema),
				z.lazy(() => EstadoUncheckedCreateWithoutNotasAutorInputObjectSchema),
			]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutNotasAutorInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutNotasAutorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutNotasAutorInput>;
export const EstadoCreateOrConnectWithoutNotasAutorInputObjectZodSchema =
	makeSchema();
