import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotaAutorUncheckedUpdateWithoutEscritorInputObjectSchema as NotaAutorUncheckedUpdateWithoutEscritorInputObjectSchema } from "./NotaAutorUncheckedUpdateWithoutEscritorInput.schema.ts";
import { NotaAutorUpdateWithoutEscritorInputObjectSchema as NotaAutorUpdateWithoutEscritorInputObjectSchema } from "./NotaAutorUpdateWithoutEscritorInput.schema.ts";
import { NotaAutorWhereUniqueInputObjectSchema as NotaAutorWhereUniqueInputObjectSchema } from "./NotaAutorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotaAutorWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => NotaAutorUpdateWithoutEscritorInputObjectSchema),
				z.lazy(() => NotaAutorUncheckedUpdateWithoutEscritorInputObjectSchema),
			]),
		})
		.strict();
export const NotaAutorUpdateWithWhereUniqueWithoutEscritorInputObjectSchema: z.ZodType<Prisma.NotaAutorUpdateWithWhereUniqueWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorUpdateWithWhereUniqueWithoutEscritorInput>;
export const NotaAutorUpdateWithWhereUniqueWithoutEscritorInputObjectZodSchema =
	makeSchema();
