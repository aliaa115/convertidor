import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotaAutorCreateWithoutEscritorInputObjectSchema as NotaAutorCreateWithoutEscritorInputObjectSchema } from "./NotaAutorCreateWithoutEscritorInput.schema.ts";
import { NotaAutorUncheckedCreateWithoutEscritorInputObjectSchema as NotaAutorUncheckedCreateWithoutEscritorInputObjectSchema } from "./NotaAutorUncheckedCreateWithoutEscritorInput.schema.ts";
import { NotaAutorUncheckedUpdateWithoutEscritorInputObjectSchema as NotaAutorUncheckedUpdateWithoutEscritorInputObjectSchema } from "./NotaAutorUncheckedUpdateWithoutEscritorInput.schema.ts";
import { NotaAutorUpdateWithoutEscritorInputObjectSchema as NotaAutorUpdateWithoutEscritorInputObjectSchema } from "./NotaAutorUpdateWithoutEscritorInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./NotaAutorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotaAutorWhereUniqueInputObjectSchema),
			update: z.union([z.lazy(() => NotaAutorUpdateWithoutEscritorInputObjectSchema), z.lazy(() => NotaAutorUncheckedUpdateWithoutEscritorInputObjectSchema)]),
			create: z.union([z.lazy(() => NotaAutorCreateWithoutEscritorInputObjectSchema), z.lazy(() => NotaAutorUncheckedCreateWithoutEscritorInputObjectSchema)]),
		})
		.strict();
export const NotaAutorUpsertWithWhereUniqueWithoutEscritorInputObjectSchema: z.ZodType<Prisma.NotaAutorUpsertWithWhereUniqueWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorUpsertWithWhereUniqueWithoutEscritorInput>;
export const NotaAutorUpsertWithWhereUniqueWithoutEscritorInputObjectZodSchema = makeSchema();
