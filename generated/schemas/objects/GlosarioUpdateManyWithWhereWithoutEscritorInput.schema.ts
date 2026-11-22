import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { GlosarioScalarWhereInputObjectSchema as GlosarioScalarWhereInputObjectSchema } from "./GlosarioScalarWhereInput.schema.ts";
import { GlosarioUncheckedUpdateManyWithoutEscritorInputObjectSchema as GlosarioUncheckedUpdateManyWithoutEscritorInputObjectSchema } from "./GlosarioUncheckedUpdateManyWithoutEscritorInput.schema.ts";
import { GlosarioUpdateManyMutationInputObjectSchema as GlosarioUpdateManyMutationInputObjectSchema } from "./GlosarioUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => GlosarioScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => GlosarioUpdateManyMutationInputObjectSchema), z.lazy(() => GlosarioUncheckedUpdateManyWithoutEscritorInputObjectSchema)]),
		})
		.strict();
export const GlosarioUpdateManyWithWhereWithoutEscritorInputObjectSchema: z.ZodType<Prisma.GlosarioUpdateManyWithWhereWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.GlosarioUpdateManyWithWhereWithoutEscritorInput>;
export const GlosarioUpdateManyWithWhereWithoutEscritorInputObjectZodSchema = makeSchema();
