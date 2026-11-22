import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { MarcadorCreateWithoutParrafoInputObjectSchema as MarcadorCreateWithoutParrafoInputObjectSchema } from "./MarcadorCreateWithoutParrafoInput.schema.ts";
import { MarcadorUncheckedCreateWithoutParrafoInputObjectSchema as MarcadorUncheckedCreateWithoutParrafoInputObjectSchema } from "./MarcadorUncheckedCreateWithoutParrafoInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./MarcadorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => MarcadorWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => MarcadorCreateWithoutParrafoInputObjectSchema), z.lazy(() => MarcadorUncheckedCreateWithoutParrafoInputObjectSchema)]),
		})
		.strict();
export const MarcadorCreateOrConnectWithoutParrafoInputObjectSchema: z.ZodType<Prisma.MarcadorCreateOrConnectWithoutParrafoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorCreateOrConnectWithoutParrafoInput>;
export const MarcadorCreateOrConnectWithoutParrafoInputObjectZodSchema = makeSchema();
