import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { SeguirUsuarioScalarWhereInputObjectSchema as SeguirUsuarioScalarWhereInputObjectSchema } from "./SeguirUsuarioScalarWhereInput.schema.ts";
import { SeguirUsuarioUncheckedUpdateManyWithoutSeguidoInputObjectSchema as SeguirUsuarioUncheckedUpdateManyWithoutSeguidoInputObjectSchema } from "./SeguirUsuarioUncheckedUpdateManyWithoutSeguidoInput.schema.ts";
import { SeguirUsuarioUpdateManyMutationInputObjectSchema as SeguirUsuarioUpdateManyMutationInputObjectSchema } from "./SeguirUsuarioUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => SeguirUsuarioScalarWhereInputObjectSchema),
			data: z.union([z.lazy(() => SeguirUsuarioUpdateManyMutationInputObjectSchema), z.lazy(() => SeguirUsuarioUncheckedUpdateManyWithoutSeguidoInputObjectSchema)]),
		})
		.strict();
export const SeguirUsuarioUpdateManyWithWhereWithoutSeguidoInputObjectSchema: z.ZodType<Prisma.SeguirUsuarioUpdateManyWithWhereWithoutSeguidoInput> =
	makeSchema() as unknown as z.ZodType<Prisma.SeguirUsuarioUpdateManyWithWhereWithoutSeguidoInput>;
export const SeguirUsuarioUpdateManyWithWhereWithoutSeguidoInputObjectZodSchema = makeSchema();
