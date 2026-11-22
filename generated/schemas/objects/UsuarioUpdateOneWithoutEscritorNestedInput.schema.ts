import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { UsuarioCreateOrConnectWithoutEscritorInputObjectSchema as UsuarioCreateOrConnectWithoutEscritorInputObjectSchema } from "./UsuarioCreateOrConnectWithoutEscritorInput.schema.ts";
import { UsuarioCreateWithoutEscritorInputObjectSchema as UsuarioCreateWithoutEscritorInputObjectSchema } from "./UsuarioCreateWithoutEscritorInput.schema.ts";
import { UsuarioUncheckedCreateWithoutEscritorInputObjectSchema as UsuarioUncheckedCreateWithoutEscritorInputObjectSchema } from "./UsuarioUncheckedCreateWithoutEscritorInput.schema.ts";
import { UsuarioUncheckedUpdateWithoutEscritorInputObjectSchema as UsuarioUncheckedUpdateWithoutEscritorInputObjectSchema } from "./UsuarioUncheckedUpdateWithoutEscritorInput.schema.ts";
import { UsuarioUpdateToOneWithWhereWithoutEscritorInputObjectSchema as UsuarioUpdateToOneWithWhereWithoutEscritorInputObjectSchema } from "./UsuarioUpdateToOneWithWhereWithoutEscritorInput.schema.ts";
import { UsuarioUpdateWithoutEscritorInputObjectSchema as UsuarioUpdateWithoutEscritorInputObjectSchema } from "./UsuarioUpdateWithoutEscritorInput.schema.ts";
import { UsuarioUpsertWithoutEscritorInputObjectSchema as UsuarioUpsertWithoutEscritorInputObjectSchema } from "./UsuarioUpsertWithoutEscritorInput.schema.ts";
import { UsuarioWhereInputObjectSchema as UsuarioWhereInputObjectSchema } from "./UsuarioWhereInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./UsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => UsuarioCreateWithoutEscritorInputObjectSchema), z.lazy(() => UsuarioUncheckedCreateWithoutEscritorInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => UsuarioCreateOrConnectWithoutEscritorInputObjectSchema).optional(),
			upsert: z.lazy(() => UsuarioUpsertWithoutEscritorInputObjectSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => UsuarioWhereInputObjectSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => UsuarioWhereInputObjectSchema)]).optional(),
			connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => UsuarioUpdateToOneWithWhereWithoutEscritorInputObjectSchema),
					z.lazy(() => UsuarioUpdateWithoutEscritorInputObjectSchema),
					z.lazy(() => UsuarioUncheckedUpdateWithoutEscritorInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const UsuarioUpdateOneWithoutEscritorNestedInputObjectSchema: z.ZodType<Prisma.UsuarioUpdateOneWithoutEscritorNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioUpdateOneWithoutEscritorNestedInput>;
export const UsuarioUpdateOneWithoutEscritorNestedInputObjectZodSchema = makeSchema();
