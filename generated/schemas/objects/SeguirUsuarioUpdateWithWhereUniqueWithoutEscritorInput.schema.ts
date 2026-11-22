import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SeguirUsuarioUncheckedUpdateWithoutEscritorInputObjectSchema as SeguirUsuarioUncheckedUpdateWithoutEscritorInputObjectSchema } from "./SeguirUsuarioUncheckedUpdateWithoutEscritorInput.schema.ts";
import { SeguirUsuarioUpdateWithoutEscritorInputObjectSchema as SeguirUsuarioUpdateWithoutEscritorInputObjectSchema } from "./SeguirUsuarioUpdateWithoutEscritorInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./SeguirUsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema),
			data: z.union([z.lazy(() => SeguirUsuarioUpdateWithoutEscritorInputObjectSchema), z.lazy(() => SeguirUsuarioUncheckedUpdateWithoutEscritorInputObjectSchema)]),
		})
		.strict();
export const SeguirUsuarioUpdateWithWhereUniqueWithoutEscritorInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUpdateWithWhereUniqueWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUpdateWithWhereUniqueWithoutEscritorInput>;
export const SeguirUsuarioUpdateWithWhereUniqueWithoutEscritorInputObjectZodSchema = makeSchema();
