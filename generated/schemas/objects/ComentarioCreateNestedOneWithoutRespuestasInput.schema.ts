import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { ComentarioCreateOrConnectWithoutRespuestasInputObjectSchema as ComentarioCreateOrConnectWithoutRespuestasInputObjectSchema } from "./ComentarioCreateOrConnectWithoutRespuestasInput.schema.ts";
import { ComentarioCreateWithoutRespuestasInputObjectSchema as ComentarioCreateWithoutRespuestasInputObjectSchema } from "./ComentarioCreateWithoutRespuestasInput.schema.ts";
import { ComentarioUncheckedCreateWithoutRespuestasInputObjectSchema as ComentarioUncheckedCreateWithoutRespuestasInputObjectSchema } from "./ComentarioUncheckedCreateWithoutRespuestasInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => ComentarioCreateWithoutRespuestasInputObjectSchema),
					z.lazy(
						() => ComentarioUncheckedCreateWithoutRespuestasInputObjectSchema,
					),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => ComentarioCreateOrConnectWithoutRespuestasInputObjectSchema)
				.optional(),
			connect: z.lazy(() => ComentarioWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const ComentarioCreateNestedOneWithoutRespuestasInputObjectSchema: z.ZodType<Prisma.ComentarioCreateNestedOneWithoutRespuestasInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateNestedOneWithoutRespuestasInput>;
export const ComentarioCreateNestedOneWithoutRespuestasInputObjectZodSchema =
	makeSchema();
