import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { GlosarioCreateWithoutLibroInputObjectSchema as GlosarioCreateWithoutLibroInputObjectSchema } from "./GlosarioCreateWithoutLibroInput.schema.ts";
import { GlosarioUncheckedCreateWithoutLibroInputObjectSchema as GlosarioUncheckedCreateWithoutLibroInputObjectSchema } from "./GlosarioUncheckedCreateWithoutLibroInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./GlosarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => GlosarioWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => GlosarioCreateWithoutLibroInputObjectSchema), z.lazy(() => GlosarioUncheckedCreateWithoutLibroInputObjectSchema)]),
		})
		.strict();
export const GlosarioCreateOrConnectWithoutLibroInputObjectSchema: z.ZodType<Prisma.GlosarioCreateOrConnectWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioCreateOrConnectWithoutLibroInput>;
export const GlosarioCreateOrConnectWithoutLibroInputObjectZodSchema = makeSchema();
