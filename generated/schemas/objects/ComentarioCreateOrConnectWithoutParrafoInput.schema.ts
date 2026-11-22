import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateWithoutParrafoInputObjectSchema as ComentarioCreateWithoutParrafoInputObjectSchema } from "./ComentarioCreateWithoutParrafoInput.schema.ts";
import { ComentarioUncheckedCreateWithoutParrafoInputObjectSchema as ComentarioUncheckedCreateWithoutParrafoInputObjectSchema } from "./ComentarioUncheckedCreateWithoutParrafoInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => ComentarioCreateWithoutParrafoInputObjectSchema), z.lazy(() => ComentarioUncheckedCreateWithoutParrafoInputObjectSchema)]),
		})
		.strict();
export const ComentarioCreateOrConnectWithoutParrafoInputObjectSchema: z.ZodType<Prisma.ComentarioCreateOrConnectWithoutParrafoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateOrConnectWithoutParrafoInput>;
export const ComentarioCreateOrConnectWithoutParrafoInputObjectZodSchema = makeSchema();
