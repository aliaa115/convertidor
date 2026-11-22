import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateWithoutEstadoInputObjectSchema as CapituloCreateWithoutEstadoInputObjectSchema } from "./CapituloCreateWithoutEstadoInput.schema.ts";
import { CapituloUncheckedCreateWithoutEstadoInputObjectSchema as CapituloUncheckedCreateWithoutEstadoInputObjectSchema } from "./CapituloUncheckedCreateWithoutEstadoInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./CapituloWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CapituloWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => CapituloCreateWithoutEstadoInputObjectSchema),
				z.lazy(() => CapituloUncheckedCreateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const CapituloCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.CapituloCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloCreateOrConnectWithoutEstadoInput>;
export const CapituloCreateOrConnectWithoutEstadoInputObjectZodSchema =
	makeSchema();
