import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutNotasAutorInputObjectSchema as EstadoCreateOrConnectWithoutNotasAutorInputObjectSchema } from "./EstadoCreateOrConnectWithoutNotasAutorInput.schema.ts";
import { EstadoCreateWithoutNotasAutorInputObjectSchema as EstadoCreateWithoutNotasAutorInputObjectSchema } from "./EstadoCreateWithoutNotasAutorInput.schema.ts";
import { EstadoUncheckedCreateWithoutNotasAutorInputObjectSchema as EstadoUncheckedCreateWithoutNotasAutorInputObjectSchema } from "./EstadoUncheckedCreateWithoutNotasAutorInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutNotasAutorInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutNotasAutorInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutNotasAutorInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutNotasAutorInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutNotasAutorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutNotasAutorInput>;
export const EstadoCreateNestedOneWithoutNotasAutorInputObjectZodSchema = makeSchema();
