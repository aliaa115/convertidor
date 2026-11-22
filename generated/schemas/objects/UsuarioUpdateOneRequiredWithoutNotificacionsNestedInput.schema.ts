import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioCreateOrConnectWithoutNotificacionsInputObjectSchema as UsuarioCreateOrConnectWithoutNotificacionsInputObjectSchema } from "./UsuarioCreateOrConnectWithoutNotificacionsInput.schema.ts";
import { UsuarioCreateWithoutNotificacionsInputObjectSchema as UsuarioCreateWithoutNotificacionsInputObjectSchema } from "./UsuarioCreateWithoutNotificacionsInput.schema.ts";
import { UsuarioUncheckedCreateWithoutNotificacionsInputObjectSchema as UsuarioUncheckedCreateWithoutNotificacionsInputObjectSchema } from "./UsuarioUncheckedCreateWithoutNotificacionsInput.schema.ts";
import { UsuarioUncheckedUpdateWithoutNotificacionsInputObjectSchema as UsuarioUncheckedUpdateWithoutNotificacionsInputObjectSchema } from "./UsuarioUncheckedUpdateWithoutNotificacionsInput.schema.ts";
import { UsuarioUpdateToOneWithWhereWithoutNotificacionsInputObjectSchema as UsuarioUpdateToOneWithWhereWithoutNotificacionsInputObjectSchema } from "./UsuarioUpdateToOneWithWhereWithoutNotificacionsInput.schema.ts";
import { UsuarioUpdateWithoutNotificacionsInputObjectSchema as UsuarioUpdateWithoutNotificacionsInputObjectSchema } from "./UsuarioUpdateWithoutNotificacionsInput.schema.ts";
import { UsuarioUpsertWithoutNotificacionsInputObjectSchema as UsuarioUpsertWithoutNotificacionsInputObjectSchema } from "./UsuarioUpsertWithoutNotificacionsInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./UsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => UsuarioCreateWithoutNotificacionsInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutNotificacionsInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => UsuarioCreateOrConnectWithoutNotificacionsInputObjectSchema).optional(),
			upsert: z.lazy(() => UsuarioUpsertWithoutNotificacionsInputObjectSchema).optional(),
			connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => UsuarioUpdateToOneWithWhereWithoutNotificacionsInputObjectSchema),
					z.lazy(() => UsuarioUpdateWithoutNotificacionsInputObjectSchema),
					z.lazy(() => UsuarioUncheckedUpdateWithoutNotificacionsInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const UsuarioUpdateOneRequiredWithoutNotificacionsNestedInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutNotificacionsNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutNotificacionsNestedInput>;
export const UsuarioUpdateOneRequiredWithoutNotificacionsNestedInputObjectZodSchema = makeSchema();
