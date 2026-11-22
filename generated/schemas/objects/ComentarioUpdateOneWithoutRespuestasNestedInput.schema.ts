import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateOrConnectWithoutRespuestasInputObjectSchema as ComentarioCreateOrConnectWithoutRespuestasInputObjectSchema } from "./ComentarioCreateOrConnectWithoutRespuestasInput.schema.ts";
import { ComentarioCreateWithoutRespuestasInputObjectSchema as ComentarioCreateWithoutRespuestasInputObjectSchema } from "./ComentarioCreateWithoutRespuestasInput.schema.ts";
import { ComentarioUncheckedCreateWithoutRespuestasInputObjectSchema as ComentarioUncheckedCreateWithoutRespuestasInputObjectSchema } from "./ComentarioUncheckedCreateWithoutRespuestasInput.schema.ts";
import { ComentarioUncheckedUpdateWithoutRespuestasInputObjectSchema as ComentarioUncheckedUpdateWithoutRespuestasInputObjectSchema } from "./ComentarioUncheckedUpdateWithoutRespuestasInput.schema.ts";
import { ComentarioUpdateToOneWithWhereWithoutRespuestasInputObjectSchema as ComentarioUpdateToOneWithWhereWithoutRespuestasInputObjectSchema } from "./ComentarioUpdateToOneWithWhereWithoutRespuestasInput.schema.ts";
import { ComentarioUpdateWithoutRespuestasInputObjectSchema as ComentarioUpdateWithoutRespuestasInputObjectSchema } from "./ComentarioUpdateWithoutRespuestasInput.schema.ts";
import { ComentarioUpsertWithoutRespuestasInputObjectSchema as ComentarioUpsertWithoutRespuestasInputObjectSchema } from "./ComentarioUpsertWithoutRespuestasInput.schema.ts";
import { ComentarioWhereInputObjectSchema as ComentarioWhereInputObjectSchema } from "./ComentarioWhereInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => ComentarioCreateWithoutRespuestasInputObjectSchema), z.lazy(() => ComentarioUncheckedCreateWithoutRespuestasInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => ComentarioCreateOrConnectWithoutRespuestasInputObjectSchema).optional(),
			upsert: z.lazy(() => ComentarioUpsertWithoutRespuestasInputObjectSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => ComentarioWhereInputObjectSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => ComentarioWhereInputObjectSchema)]).optional(),
			connect: z.lazy(() => ComentarioWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => ComentarioUpdateToOneWithWhereWithoutRespuestasInputObjectSchema),
					z.lazy(() => ComentarioUpdateWithoutRespuestasInputObjectSchema),
					z.lazy(() => ComentarioUncheckedUpdateWithoutRespuestasInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const ComentarioUpdateOneWithoutRespuestasNestedInputObjectSchema: z.ZodType<Prisma.ComentarioUpdateOneWithoutRespuestasNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioUpdateOneWithoutRespuestasNestedInput>;
export const ComentarioUpdateOneWithoutRespuestasNestedInputObjectZodSchema = makeSchema();
