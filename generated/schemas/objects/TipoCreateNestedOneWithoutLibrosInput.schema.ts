import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { TipoCreateOrConnectWithoutLibrosInputObjectSchema as TipoCreateOrConnectWithoutLibrosInputObjectSchema } from "./TipoCreateOrConnectWithoutLibrosInput.schema.ts";
import { TipoCreateWithoutLibrosInputObjectSchema as TipoCreateWithoutLibrosInputObjectSchema } from "./TipoCreateWithoutLibrosInput.schema.ts";
import { TipoUncheckedCreateWithoutLibrosInputObjectSchema as TipoUncheckedCreateWithoutLibrosInputObjectSchema } from "./TipoUncheckedCreateWithoutLibrosInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./TipoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => TipoCreateWithoutLibrosInputObjectSchema), z.lazy(() => TipoUncheckedCreateWithoutLibrosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => TipoCreateOrConnectWithoutLibrosInputObjectSchema).optional(),
			connect: z.lazy(() => TipoWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const TipoCreateNestedOneWithoutLibrosInputObjectSchema: z.ZodType<Prisma.TipoCreateNestedOneWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoCreateNestedOneWithoutLibrosInput>;
export const TipoCreateNestedOneWithoutLibrosInputObjectZodSchema = makeSchema();
