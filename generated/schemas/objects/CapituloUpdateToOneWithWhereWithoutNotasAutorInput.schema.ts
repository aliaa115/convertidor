import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloUncheckedUpdateWithoutNotasAutorInputObjectSchema as CapituloUncheckedUpdateWithoutNotasAutorInputObjectSchema } from "./CapituloUncheckedUpdateWithoutNotasAutorInput.schema.ts";
import { CapituloUpdateWithoutNotasAutorInputObjectSchema as CapituloUpdateWithoutNotasAutorInputObjectSchema } from "./CapituloUpdateWithoutNotasAutorInput.schema.ts";
import { CapituloWhereInputObjectSchema as CapituloWhereInputObjectSchema } from "./CapituloWhereInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CapituloWhereInputObjectSchema).optional(),
			data: z.union([
				z.lazy(() => CapituloUpdateWithoutNotasAutorInputObjectSchema),
				z.lazy(() => CapituloUncheckedUpdateWithoutNotasAutorInputObjectSchema),
			]),
		})
		.strict();
export const CapituloUpdateToOneWithWhereWithoutNotasAutorInputObjectSchema: z.ZodType<Prisma.CapituloUpdateToOneWithWhereWithoutNotasAutorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUpdateToOneWithWhereWithoutNotasAutorInput>;
export const CapituloUpdateToOneWithWhereWithoutNotasAutorInputObjectZodSchema =
	makeSchema();
