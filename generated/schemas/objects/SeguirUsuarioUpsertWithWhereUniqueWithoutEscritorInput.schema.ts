import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SeguirUsuarioCreateWithoutEscritorInputObjectSchema as SeguirUsuarioCreateWithoutEscritorInputObjectSchema } from "./SeguirUsuarioCreateWithoutEscritorInput.schema.ts";
import { SeguirUsuarioUncheckedCreateWithoutEscritorInputObjectSchema as SeguirUsuarioUncheckedCreateWithoutEscritorInputObjectSchema } from "./SeguirUsuarioUncheckedCreateWithoutEscritorInput.schema.ts";
import { SeguirUsuarioUncheckedUpdateWithoutEscritorInputObjectSchema as SeguirUsuarioUncheckedUpdateWithoutEscritorInputObjectSchema } from "./SeguirUsuarioUncheckedUpdateWithoutEscritorInput.schema.ts";
import { SeguirUsuarioUpdateWithoutEscritorInputObjectSchema as SeguirUsuarioUpdateWithoutEscritorInputObjectSchema } from "./SeguirUsuarioUpdateWithoutEscritorInput.schema.ts";
import { SeguirUsuarioWhereUniqueInputObjectSchema as SeguirUsuarioWhereUniqueInputObjectSchema } from "./SeguirUsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => SeguirUsuarioWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => SeguirUsuarioUpdateWithoutEscritorInputObjectSchema), z.lazy(() => SeguirUsuarioUncheckedUpdateWithoutEscritorInputObjectSchema)]),
			create: z.union([z.lazy(() => SeguirUsuarioCreateWithoutEscritorInputObjectSchema), z.lazy(() => SeguirUsuarioUncheckedCreateWithoutEscritorInputObjectSchema)]),
		})
		.strict();
export const SeguirUsuarioUpsertWithWhereUniqueWithoutEscritorInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUpsertWithWhereUniqueWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUpsertWithWhereUniqueWithoutEscritorInput>;
export const SeguirUsuarioUpsertWithWhereUniqueWithoutEscritorInputObjectZodSchema = makeSchema();
