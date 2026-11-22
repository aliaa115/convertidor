import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { GlosarioCreateWithoutEscritorInputObjectSchema as GlosarioCreateWithoutEscritorInputObjectSchema } from "./GlosarioCreateWithoutEscritorInput.schema.ts";
import { GlosarioUncheckedCreateWithoutEscritorInputObjectSchema as GlosarioUncheckedCreateWithoutEscritorInputObjectSchema } from "./GlosarioUncheckedCreateWithoutEscritorInput.schema.ts";
import { GlosarioWhereUniqueInputObjectSchema as GlosarioWhereUniqueInputObjectSchema } from "./GlosarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => GlosarioWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => GlosarioCreateWithoutEscritorInputObjectSchema),
				z.lazy(() => GlosarioUncheckedCreateWithoutEscritorInputObjectSchema),
			]),
		})
		.strict();
export const GlosarioCreateOrConnectWithoutEscritorInputObjectSchema: z.ZodType<Prisma.GlosarioCreateOrConnectWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioCreateOrConnectWithoutEscritorInput>;
export const GlosarioCreateOrConnectWithoutEscritorInputObjectZodSchema =
	makeSchema();
