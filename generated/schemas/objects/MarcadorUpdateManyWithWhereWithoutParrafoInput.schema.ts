import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { MarcadorScalarWhereInputObjectSchema as MarcadorScalarWhereInputObjectSchema } from "./MarcadorScalarWhereInput.schema.ts";
import { MarcadorUncheckedUpdateManyWithoutParrafoInputObjectSchema as MarcadorUncheckedUpdateManyWithoutParrafoInputObjectSchema } from "./MarcadorUncheckedUpdateManyWithoutParrafoInput.schema.ts";
import { MarcadorUpdateManyMutationInputObjectSchema as MarcadorUpdateManyMutationInputObjectSchema } from "./MarcadorUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => MarcadorScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => MarcadorUpdateManyMutationInputObjectSchema), z.lazy(() => MarcadorUncheckedUpdateManyWithoutParrafoInputObjectSchema)]),
		})
		.strict();
export const MarcadorUpdateManyWithWhereWithoutParrafoInputObjectSchema: z.ZodType<Prisma.MarcadorUpdateManyWithWhereWithoutParrafoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorUpdateManyWithWhereWithoutParrafoInput>;
export const MarcadorUpdateManyWithWhereWithoutParrafoInputObjectZodSchema = makeSchema();
