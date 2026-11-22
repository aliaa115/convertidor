import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { MarcadorCreateWithoutEstadoInputObjectSchema as MarcadorCreateWithoutEstadoInputObjectSchema } from "./MarcadorCreateWithoutEstadoInput.schema.ts";
import { MarcadorUncheckedCreateWithoutEstadoInputObjectSchema as MarcadorUncheckedCreateWithoutEstadoInputObjectSchema } from "./MarcadorUncheckedCreateWithoutEstadoInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./MarcadorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => MarcadorWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => MarcadorCreateWithoutEstadoInputObjectSchema), z.lazy(() => MarcadorUncheckedCreateWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const MarcadorCreateOrConnectWithoutEstadoInputObjectSchema: z.ZodType<Prisma.MarcadorCreateOrConnectWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorCreateOrConnectWithoutEstadoInput>;
export const MarcadorCreateOrConnectWithoutEstadoInputObjectZodSchema = makeSchema();
