import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CapituloScalarWhereInputObjectSchema as CapituloScalarWhereInputObjectSchema } from "./CapituloScalarWhereInput.schema.ts";
import { CapituloUncheckedUpdateManyWithoutLibroInputObjectSchema as CapituloUncheckedUpdateManyWithoutLibroInputObjectSchema } from "./CapituloUncheckedUpdateManyWithoutLibroInput.schema.ts";
import { CapituloUpdateManyMutationInputObjectSchema as CapituloUpdateManyMutationInputObjectSchema } from "./CapituloUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CapituloScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => CapituloUpdateManyMutationInputObjectSchema), z.lazy(() => CapituloUncheckedUpdateManyWithoutLibroInputObjectSchema)]),
		})
		.strict();
export const CapituloUpdateManyWithWhereWithoutLibroInputObjectSchema: z.ZodType<Prisma.CapituloUpdateManyWithWhereWithoutLibroInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUpdateManyWithWhereWithoutLibroInput>;
export const CapituloUpdateManyWithWhereWithoutLibroInputObjectZodSchema = makeSchema();
