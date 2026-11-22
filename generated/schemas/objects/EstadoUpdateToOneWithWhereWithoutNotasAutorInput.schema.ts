import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoUncheckedUpdateWithoutNotasAutorInputObjectSchema as EstadoUncheckedUpdateWithoutNotasAutorInputObjectSchema } from "./EstadoUncheckedUpdateWithoutNotasAutorInput.schema.ts";
import { EstadoUpdateWithoutNotasAutorInputObjectSchema as EstadoUpdateWithoutNotasAutorInputObjectSchema } from "./EstadoUpdateWithoutNotasAutorInput.schema.ts";
import { EstadoWhereInputObjectSchema as EstadoWhereInputObjectSchema } from "./EstadoWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EstadoWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => EstadoUpdateWithoutNotasAutorInputObjectSchema),
				z.lazy(() => EstadoUncheckedUpdateWithoutNotasAutorInputObjectSchema),
			]),
		})
		.strict();
export const EstadoUpdateToOneWithWhereWithoutNotasAutorInputObjectSchema: z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutNotasAutorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateToOneWithWhereWithoutNotasAutorInput>;
export const EstadoUpdateToOneWithWhereWithoutNotasAutorInputObjectZodSchema =
	makeSchema();
