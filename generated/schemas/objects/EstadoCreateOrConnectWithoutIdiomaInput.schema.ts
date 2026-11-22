import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateWithoutIdiomaInputObjectSchema as EstadoCreateWithoutIdiomaInputObjectSchema } from "./EstadoCreateWithoutIdiomaInput.schema.ts";
import { EstadoUncheckedCreateWithoutIdiomaInputObjectSchema as EstadoUncheckedCreateWithoutIdiomaInputObjectSchema } from "./EstadoUncheckedCreateWithoutIdiomaInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EstadoCreateWithoutIdiomaInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutIdiomaInputObjectSchema)]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutIdiomaInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutIdiomaInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutIdiomaInput>;
export const EstadoCreateOrConnectWithoutIdiomaInputObjectZodSchema = makeSchema();
