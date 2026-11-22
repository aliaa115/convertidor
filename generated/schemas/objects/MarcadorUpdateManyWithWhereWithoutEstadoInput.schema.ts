import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { MarcadorScalarWhereInputObjectSchema as MarcadorScalarWhereInputObjectSchema } from "./MarcadorScalarWhereInput.schema.ts";
import { MarcadorUncheckedUpdateManyWithoutEstadoInputObjectSchema as MarcadorUncheckedUpdateManyWithoutEstadoInputObjectSchema } from "./MarcadorUncheckedUpdateManyWithoutEstadoInput.schema.ts";
import { MarcadorUpdateManyMutationInputObjectSchema as MarcadorUpdateManyMutationInputObjectSchema } from "./MarcadorUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => MarcadorScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => MarcadorUpdateManyMutationInputObjectSchema), z.lazy(() => MarcadorUncheckedUpdateManyWithoutEstadoInputObjectSchema)]),
		})
		.strict();
export const MarcadorUpdateManyWithWhereWithoutEstadoInputObjectSchema: z.ZodType<Prisma.MarcadorUpdateManyWithWhereWithoutEstadoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorUpdateManyWithWhereWithoutEstadoInput>;
export const MarcadorUpdateManyWithWhereWithoutEstadoInputObjectZodSchema = makeSchema();
