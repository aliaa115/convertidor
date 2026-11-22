import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateOrConnectWithoutGlosariosInputObjectSchema as EstadoCreateOrConnectWithoutGlosariosInputObjectSchema } from "./EstadoCreateOrConnectWithoutGlosariosInput.schema.ts";
import { EstadoCreateWithoutGlosariosInputObjectSchema as EstadoCreateWithoutGlosariosInputObjectSchema } from "./EstadoCreateWithoutGlosariosInput.schema.ts";
import { EstadoUncheckedCreateWithoutGlosariosInputObjectSchema as EstadoUncheckedCreateWithoutGlosariosInputObjectSchema } from "./EstadoUncheckedCreateWithoutGlosariosInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EstadoCreateWithoutGlosariosInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutGlosariosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EstadoCreateOrConnectWithoutGlosariosInputObjectSchema).optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EstadoCreateNestedOneWithoutGlosariosInputObjectSchema: z.ZodType<Prisma.EstadoCreateNestedOneWithoutGlosariosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateNestedOneWithoutGlosariosInput>;
export const EstadoCreateNestedOneWithoutGlosariosInputObjectZodSchema = makeSchema();
