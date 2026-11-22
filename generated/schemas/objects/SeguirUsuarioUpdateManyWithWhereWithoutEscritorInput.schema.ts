import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SeguirUsuarioScalarWhereInputObjectSchema as SeguirUsuarioScalarWhereInputObjectSchema } from "./SeguirUsuarioScalarWhereInput.schema.ts";
import { SeguirUsuarioUncheckedUpdateManyWithoutEscritorInputObjectSchema as SeguirUsuarioUncheckedUpdateManyWithoutEscritorInputObjectSchema } from "./SeguirUsuarioUncheckedUpdateManyWithoutEscritorInput.schema.ts";
import { SeguirUsuarioUpdateManyMutationInputObjectSchema as SeguirUsuarioUpdateManyMutationInputObjectSchema } from "./SeguirUsuarioUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => SeguirUsuarioScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => SeguirUsuarioUpdateManyMutationInputObjectSchema), z.lazy(() => SeguirUsuarioUncheckedUpdateManyWithoutEscritorInputObjectSchema)]),
		})
		.strict();
export const SeguirUsuarioUpdateManyWithWhereWithoutEscritorInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUpdateManyWithWhereWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUpdateManyWithWhereWithoutEscritorInput>;
export const SeguirUsuarioUpdateManyWithWhereWithoutEscritorInputObjectZodSchema = makeSchema();
