import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloCreateWithoutLibroInputObjectSchema as CapituloCreateWithoutLibroInputObjectSchema } from "./CapituloCreateWithoutLibroInput.schema.ts";
import { CapituloUncheckedCreateWithoutLibroInputObjectSchema as CapituloUncheckedCreateWithoutLibroInputObjectSchema } from "./CapituloUncheckedCreateWithoutLibroInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./CapituloWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CapituloWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => CapituloCreateWithoutLibroInputObjectSchema),
				z.lazy(() => CapituloUncheckedCreateWithoutLibroInputObjectSchema),
			]),
		})
		.strict();
export const CapituloCreateOrConnectWithoutLibroInputObjectSchema: z.ZodType<Prisma.CapituloCreateOrConnectWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloCreateOrConnectWithoutLibroInput>;
export const CapituloCreateOrConnectWithoutLibroInputObjectZodSchema =
	makeSchema();
