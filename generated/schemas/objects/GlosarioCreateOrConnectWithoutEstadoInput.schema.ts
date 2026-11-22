import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { GlosarioCreateWithoutEstadoInputObjectSchema as GlosarioCreateWithoutEstadoInputObjectSchema } from "./GlosarioCreateWithoutEstadoInput.schema.ts";
import { GlosarioUncheckedCreateWithoutEstadoInputObjectSchema as GlosarioUncheckedCreateWithoutEstadoInputObjectSchema } from "./GlosarioUncheckedCreateWithoutEstadoInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./GlosarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => GlosarioWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => GlosarioCreateWithoutEstadoInputObjectSchema),
				z.lazy(() => GlosarioUncheckedCreateWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const GlosarioCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.GlosarioCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioCreateOrConnectWithoutEstadoInput>;
export const GlosarioCreateOrConnectWithoutEstadoInputObjectZodSchema =
	makeSchema();
