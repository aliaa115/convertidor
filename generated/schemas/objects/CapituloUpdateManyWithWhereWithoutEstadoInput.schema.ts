import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { CapituloScalarWhereInputObjectSchema as CapituloScalarWhereInputObjectSchema } from "./CapituloScalarWhereInput.schema.ts";
import { CapituloUncheckedUpdateManyWithoutEstadoInputObjectSchema as CapituloUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./CapituloUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { CapituloUpdateManyMutationInputObjectSchema as CapituloUpdateManyMutationInputObjectSchema } from "./CapituloUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => CapituloScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => CapituloUpdateManyMutationInputObjectSchema),
				z.lazy(() => CapituloUncheckedUpdateManyWithoutEstadoInputObjectSchema),
			]),
		})
		.strict();
export const CapituloUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.CapituloUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUpdateManyWithWhereWithoutEstadoInput>;
export const CapituloUpdateManyWithWhereWithoutEstadoInputObjectZodSchema =
	makeSchema();
