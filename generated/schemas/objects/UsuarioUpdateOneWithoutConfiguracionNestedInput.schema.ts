import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { UsuarioCreateOrConnectWithoutConfiguracionInputObjectSchema as UsuarioCreateOrConnectWithoutConfiguracionInputObjectSchema } from "./UsuarioCreateOrConnectWithoutConfiguracionInput.schema.ts";
import { UsuarioCreateWithoutConfiguracionInputObjectSchema as UsuarioCreateWithoutConfiguracionInputObjectSchema } from "./UsuarioCreateWithoutConfiguracionInput.schema.ts";
import { UsuarioUncheckedCreateWithoutConfiguracionInputObjectSchema as UsuarioUncheckedCreateWithoutConfiguracionInputObjectSchema } from "./UsuarioUncheckedCreateWithoutConfiguracionInput.schema.ts";
import { UsuarioUncheckedUpdateWithoutConfiguracionInputObjectSchema as UsuarioUncheckedUpdateWithoutConfiguracionInputObjectSchema } from "./UsuarioUncheckedUpdateWithoutConfiguracionInput.schema.ts";
import { UsuarioUpdateToOneWithWhereWithoutConfiguracionInputObjectSchema as UsuarioUpdateToOneWithWhereWithoutConfiguracionInputObjectSchema } from "./UsuarioUpdateToOneWithWhereWithoutConfiguracionInput.schema.ts";
import { UsuarioUpdateWithoutConfiguracionInputObjectSchema as UsuarioUpdateWithoutConfiguracionInputObjectSchema } from "./UsuarioUpdateWithoutConfiguracionInput.schema.ts";
import { UsuarioUpsertWithoutConfiguracionInputObjectSchema as UsuarioUpsertWithoutConfiguracionInputObjectSchema } from "./UsuarioUpsertWithoutConfiguracionInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./UsuarioWhereInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./UsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => UsuarioCreateWithoutConfiguracionInputObjectSchema),
					z.lazy(
						() => UsuarioUncheckedCreateWithoutConfiguracionInputObjectSchema,
					),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => UsuarioCreateOrConnectWithoutConfiguracionInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => UsuarioUpsertWithoutConfiguracionInputObjectSchema)
				.optional(),
			disconnect: z
				.union([z.boolean(), z.lazy(() => UsuarioWhereInputObjectSchema)])
				.optional(),
			delete: z
				.union([z.boolean(), z.lazy(() => UsuarioWhereInputObjectSchema)])
				.optional(),
			connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() =>
							UsuarioUpdateToOneWithWhereWithoutConfiguracionInputObjectSchema,
					),
					z.lazy(() => UsuarioUpdateWithoutConfiguracionInputObjectSchema),
					z.lazy(
						() => UsuarioUncheckedUpdateWithoutConfiguracionInputObjectSchema,
					),
				])
				.optional(),
		})
		.strict();
export const UsuarioUpdateOneWithoutConfiguracionNestedInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateOneWithoutConfiguracionNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateOneWithoutConfiguracionNestedInput>;
export const UsuarioUpdateOneWithoutConfiguracionNestedInputObjectZodSchema =
	makeSchema();
