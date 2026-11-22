import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { TipoCreateWithoutLibrosInputObjectSchema as TipoCreateWithoutLibrosInputObjectSchema } from "./TipoCreateWithoutLibrosInput.schema.ts";
import { TipoUncheckedCreateWithoutLibrosInputObjectSchema as TipoUncheckedCreateWithoutLibrosInputObjectSchema } from "./TipoUncheckedCreateWithoutLibrosInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./TipoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => TipoWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => TipoCreateWithoutLibrosInputObjectSchema), z.lazy(() => TipoUncheckedCreateWithoutLibrosInputObjectSchema)]),
		})
		.strict();
export const TipoCreateOrConnectWithoutLibrosInputObjectSchema: z.ZodType<Prisma.TipoCreateOrConnectWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoCreateOrConnectWithoutLibrosInput>;
export const TipoCreateOrConnectWithoutLibrosInputObjectZodSchema = makeSchema();
