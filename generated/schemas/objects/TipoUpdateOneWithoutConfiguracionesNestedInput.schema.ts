import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { TipoCreateOrConnectWithoutConfiguracionesInputObjectSchema as TipoCreateOrConnectWithoutConfiguracionesInputObjectSchema } from "./TipoCreateOrConnectWithoutConfiguracionesInput.schema.ts";
import { TipoCreateWithoutConfiguracionesInputObjectSchema as TipoCreateWithoutConfiguracionesInputObjectSchema } from "./TipoCreateWithoutConfiguracionesInput.schema.ts";
import { TipoUncheckedCreateWithoutConfiguracionesInputObjectSchema as TipoUncheckedCreateWithoutConfiguracionesInputObjectSchema } from "./TipoUncheckedCreateWithoutConfiguracionesInput.schema.ts";
import { TipoUncheckedUpdateWithoutConfiguracionesInputObjectSchema as TipoUncheckedUpdateWithoutConfiguracionesInputObjectSchema } from "./TipoUncheckedUpdateWithoutConfiguracionesInput.schema.ts";
import { TipoUpdateToOneWithWhereWithoutConfiguracionesInputObjectSchema as TipoUpdateToOneWithWhereWithoutConfiguracionesInputObjectSchema } from "./TipoUpdateToOneWithWhereWithoutConfiguracionesInput.schema.ts";
import { TipoUpdateWithoutConfiguracionesInputObjectSchema as TipoUpdateWithoutConfiguracionesInputObjectSchema } from "./TipoUpdateWithoutConfiguracionesInput.schema.ts";
import { TipoUpsertWithoutConfiguracionesInputObjectSchema as TipoUpsertWithoutConfiguracionesInputObjectSchema } from "./TipoUpsertWithoutConfiguracionesInput.schema.ts";
import { TipoWhereInputObjectSchema as TipoWhereInputObjectSchema } from "./TipoWhereInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./TipoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => TipoCreateWithoutConfiguracionesInputObjectSchema), z.lazy(() => TipoUncheckedCreateWithoutConfiguracionesInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => TipoCreateOrConnectWithoutConfiguracionesInputObjectSchema).optional(),
			upsert: z.lazy(() => TipoUpsertWithoutConfiguracionesInputObjectSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => TipoWhereInputObjectSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => TipoWhereInputObjectSchema)]).optional(),
			connect: z.lazy(() => TipoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => TipoUpdateToOneWithWhereWithoutConfiguracionesInputObjectSchema),
					z.lazy(() => TipoUpdateWithoutConfiguracionesInputObjectSchema),
					z.lazy(() => TipoUncheckedUpdateWithoutConfiguracionesInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const TipoUpdateOneWithoutConfiguracionesNestedInputObjectSchema: z.ZodType<Prisma.TipoUpdateOneWithoutConfiguracionesNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoUpdateOneWithoutConfiguracionesNestedInput>;
export const TipoUpdateOneWithoutConfiguracionesNestedInputObjectZodSchema = makeSchema();
