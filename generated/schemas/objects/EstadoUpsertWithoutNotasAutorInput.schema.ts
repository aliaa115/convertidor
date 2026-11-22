import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EstadoCreateWithoutNotasAutorInputObjectSchema as EstadoCreateWithoutNotasAutorInputObjectSchema } from "./EstadoCreateWithoutNotasAutorInput.schema.ts";
import { EstadoUncheckedCreateWithoutNotasAutorInputObjectSchema as EstadoUncheckedCreateWithoutNotasAutorInputObjectSchema } from "./EstadoUncheckedCreateWithoutNotasAutorInput.schema.ts";
import { EstadoUncheckedUpdateWithoutNotasAutorInputObjectSchema as EstadoUncheckedUpdateWithoutNotasAutorInputObjectSchema } from "./EstadoUncheckedUpdateWithoutNotasAutorInput.schema.ts";
import { EstadoUpdateWithoutNotasAutorInputObjectSchema as EstadoUpdateWithoutNotasAutorInputObjectSchema } from "./EstadoUpdateWithoutNotasAutorInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			update: z.union([z.lazy(() => EstadoUpdateWithoutNotasAutorInputObjectSchema), z.lazy(() => EstadoUncheckedUpdateWithoutNotasAutorInputObjectSchema)]),
			create: z.union([z.lazy(() => EstadoCreateWithoutNotasAutorInputObjectSchema), z.lazy(() => EstadoUncheckedCreateWithoutNotasAutorInputObjectSchema)]),
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
		})
		.strict();
export const EstadoUpsertWithoutNotasAutorInputObjectSchema: z.ZodType<Prisma.EstadoUpsertWithoutNotasAutorInput> = makeSchema() as unknown as z.ZodType<Prisma.EstadoUpsertWithoutNotasAutorInput>;
export const EstadoUpsertWithoutNotasAutorInputObjectZodSchema = makeSchema();
