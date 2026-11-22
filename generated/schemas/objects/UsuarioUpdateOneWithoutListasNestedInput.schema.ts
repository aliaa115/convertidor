import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioCreateOrConnectWithoutListasInputObjectSchema as UsuarioCreateOrConnectWithoutListasInputObjectSchema } from "./UsuarioCreateOrConnectWithoutListasInput.schema.ts";
import { UsuarioCreateWithoutListasInputObjectSchema as UsuarioCreateWithoutListasInputObjectSchema } from "./UsuarioCreateWithoutListasInput.schema.ts";
import { UsuarioUncheckedCreateWithoutListasInputObjectSchema as UsuarioUncheckedCreateWithoutListasInputObjectSchema } from "./UsuarioUncheckedCreateWithoutListasInput.schema.ts";
import { UsuarioUncheckedUpdateWithoutListasInputObjectSchema as UsuarioUncheckedUpdateWithoutListasInputObjectSchema } from "./UsuarioUncheckedUpdateWithoutListasInput.schema.ts";
import { UsuarioUpdateToOneWithWhereWithoutListasInputObjectSchema as UsuarioUpdateToOneWithWhereWithoutListasInputObjectSchema } from "./UsuarioUpdateToOneWithWhereWithoutListasInput.schema.ts";
import { UsuarioUpdateWithoutListasInputObjectSchema as UsuarioUpdateWithoutListasInputObjectSchema } from "./UsuarioUpdateWithoutListasInput.schema.ts";
import { UsuarioUpsertWithoutListasInputObjectSchema as UsuarioUpsertWithoutListasInputObjectSchema } from "./UsuarioUpsertWithoutListasInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./UsuarioWhereInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./UsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => UsuarioCreateWithoutListasInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutListasInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => UsuarioCreateOrConnectWithoutListasInputObjectSchema).optional(),
			upsert: z.lazy(() => UsuarioUpsertWithoutListasInputObjectSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => UsuarioWhereInputObjectSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => UsuarioWhereInputObjectSchema)]).optional(),
			connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => UsuarioUpdateToOneWithWhereWithoutListasInputObjectSchema),
					z.lazy(() => UsuarioUpdateWithoutListasInputObjectSchema),
					z.lazy(() => UsuarioUncheckedUpdateWithoutListasInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const UsuarioUpdateOneWithoutListasNestedInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateOneWithoutListasNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateOneWithoutListasNestedInput>;
export const UsuarioUpdateOneWithoutListasNestedInputObjectZodSchema = makeSchema();
