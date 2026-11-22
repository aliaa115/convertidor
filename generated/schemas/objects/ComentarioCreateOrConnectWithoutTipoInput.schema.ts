import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { ComentarioCreateWithoutTipoInputObjectSchema as ComentarioCreateWithoutTipoInputObjectSchema } from "./ComentarioCreateWithoutTipoInput.schema.ts";
import { ComentarioUncheckedCreateWithoutTipoInputObjectSchema as ComentarioUncheckedCreateWithoutTipoInputObjectSchema } from "./ComentarioUncheckedCreateWithoutTipoInput.schema.ts";
import { ComentarioWhereUniqueInputObjectSchema as ComentarioWhereUniqueInputObjectSchema } from "./ComentarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => ComentarioWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => ComentarioCreateWithoutTipoInputObjectSchema), z.lazy(() => ComentarioUncheckedCreateWithoutTipoInputObjectSchema)]),
		})
		.strict();
export const ComentarioCreateOrConnectWithoutTipoInputObjectSchema: z.ZodType<Prisma.ComentarioCreateOrConnectWithoutTipoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.ComentarioCreateOrConnectWithoutTipoInput>;
export const ComentarioCreateOrConnectWithoutTipoInputObjectZodSchema = makeSchema();
