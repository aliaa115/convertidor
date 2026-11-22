import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateWithoutRespuestasInputObjectSchema as ComentarioCreateWithoutRespuestasInputObjectSchema } from "./ComentarioCreateWithoutRespuestasInput.schema.ts";
import { ComentarioUncheckedCreateWithoutRespuestasInputObjectSchema as ComentarioUncheckedCreateWithoutRespuestasInputObjectSchema } from "./ComentarioUncheckedCreateWithoutRespuestasInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => ComentarioCreateWithoutRespuestasInputObjectSchema), z.lazy(() => ComentarioUncheckedCreateWithoutRespuestasInputObjectSchema)]),
		})
		.strict();
export const ComentarioCreateOrConnectWithoutRespuestasInputObjectSchema: z.ZodType<Prisma.ComentarioCreateOrConnectWithoutRespuestasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateOrConnectWithoutRespuestasInput>;
export const ComentarioCreateOrConnectWithoutRespuestasInputObjectZodSchema = makeSchema();
