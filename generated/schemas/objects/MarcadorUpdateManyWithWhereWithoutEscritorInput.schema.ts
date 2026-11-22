import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { MarcadorScalarWhereInputObjectSchema as MarcadorScalarWhereInputObjectSchema } from "./MarcadorScalarWhereInput.schema.ts";
import { MarcadorUncheckedUpdateManyWithoutEscritorInputObjectSchema as MarcadorUncheckedUpdateManyWithoutEscritorInputObjectSchema } from "./MarcadorUncheckedUpdateManyWithoutEscritorInput.schema.ts";
import { MarcadorUpdateManyMutationInputObjectSchema as MarcadorUpdateManyMutationInputObjectSchema } from "./MarcadorUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => MarcadorScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => MarcadorUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => MarcadorUncheckedUpdateManyWithoutEscritorInputObjectSchema,
				),
			]),
		})
		.strict();
export const MarcadorUpdateManyWithWhereWithoutEscritorInputObjectSchema: z.ZodType<Prisma.MarcadorUpdateManyWithWhereWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.MarcadorUpdateManyWithWhereWithoutEscritorInput>;
export const MarcadorUpdateManyWithWhereWithoutEscritorInputObjectZodSchema =
	makeSchema();
