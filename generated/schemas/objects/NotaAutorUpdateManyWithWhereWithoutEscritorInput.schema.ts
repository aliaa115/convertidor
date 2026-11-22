import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { NotaAutorScalarWhereInputObjectSchema as NotaAutorScalarWhereInputObjectSchema } from "./NotaAutorScalarWhereInput.schema.ts";
import { NotaAutorUncheckedUpdateManyWithoutEscritorInputObjectSchema as NotaAutorUncheckedUpdateManyWithoutEscritorInputObjectSchema } from "./NotaAutorUncheckedUpdateManyWithoutEscritorInput.schema.ts";
import { NotaAutorUpdateManyMutationInputObjectSchema as NotaAutorUpdateManyMutationInputObjectSchema } from "./NotaAutorUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotaAutorScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => NotaAutorUpdateManyMutationInputObjectSchema), z.lazy(() => NotaAutorUncheckedUpdateManyWithoutEscritorInputObjectSchema)]),
		})
		.strict();
export const NotaAutorUpdateManyWithWhereWithoutEscritorInputObjectSchema: z.ZodType<Prisma.NotaAutorUpdateManyWithWhereWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotaAutorUpdateManyWithWhereWithoutEscritorInput>;
export const NotaAutorUpdateManyWithWhereWithoutEscritorInputObjectZodSchema = makeSchema();
