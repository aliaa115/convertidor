import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateWithoutTiposInputObjectSchema as EstadoCreateWithoutTiposInputObjectSchema } from "./EstadoCreateWithoutTiposInput.schema.ts";
import { EstadoUncheckedCreateWithoutTiposInputObjectSchema as EstadoUncheckedCreateWithoutTiposInputObjectSchema } from "./EstadoUncheckedCreateWithoutTiposInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EstadoCreateWithoutTiposInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutTiposInputObjectSchema)]),
		})
		.strict();
export const EstadoCreateOrConnectWithoutTiposInputObjectSchema: z.ZodType<Prisma.EstadoCreateOrConnectWithoutTiposInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoCreateOrConnectWithoutTiposInput>;
export const EstadoCreateOrConnectWithoutTiposInputObjectZodSchema = makeSchema();
