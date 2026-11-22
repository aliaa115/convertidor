import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { MarcadorCreateWithoutEscritorInputObjectSchema as MarcadorCreateWithoutEscritorInputObjectSchema } from "./MarcadorCreateWithoutEscritorInput.schema.ts";
import { MarcadorUncheckedCreateWithoutEscritorInputObjectSchema as MarcadorUncheckedCreateWithoutEscritorInputObjectSchema } from "./MarcadorUncheckedCreateWithoutEscritorInput.schema.ts";
import { MarcadorWhereUniqueInputObjectSchema as MarcadorWhereUniqueInputObjectSchema } from "./MarcadorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => MarcadorWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => MarcadorCreateWithoutEscritorInputObjectSchema), z.lazy(() => MarcadorUncheckedCreateWithoutEscritorInputObjectSchema)]),
		})
		.strict();
export const MarcadorCreateOrConnectWithoutEscritorInputObjectSchema: z.ZodType<Prisma.MarcadorCreateOrConnectWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorCreateOrConnectWithoutEscritorInput>;
export const MarcadorCreateOrConnectWithoutEscritorInputObjectZodSchema = makeSchema();
