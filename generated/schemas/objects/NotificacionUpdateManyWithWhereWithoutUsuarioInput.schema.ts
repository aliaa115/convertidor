import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { NotificacionScalarWhereInputObjectSchema as NotificacionScalarWhereInputObjectSchema } from "./NotificacionScalarWhereInput.schema.ts";
import { NotificacionUncheckedUpdateManyWithoutUsuarioInputObjectSchema as NotificacionUncheckedUpdateManyWithoutUsuarioInputObjectSchema } from "./NotificacionUncheckedUpdateManyWithoutUsuarioInput.schema.ts";
import { NotificacionUpdateManyMutationInputObjectSchema as NotificacionUpdateManyMutationInputObjectSchema } from "./NotificacionUpdateManyMutationInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => NotificacionScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => NotificacionUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => NotificacionUncheckedUpdateManyWithoutUsuarioInputObjectSchema,
				),
			]),
		})
		.strict();
export const NotificacionUpdateManyWithWhereWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.NotificacionUpdateManyWithWhereWithoutUsuarioInput> =
	makeSchema() as unknown as z.ZodType<Prisma.NotificacionUpdateManyWithWhereWithoutUsuarioInput>;
export const NotificacionUpdateManyWithWhereWithoutUsuarioInputObjectZodSchema =
	makeSchema();
