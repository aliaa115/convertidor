import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { TipoCreateWithoutConfiguracionesInputObjectSchema as TipoCreateWithoutConfiguracionesInputObjectSchema } from "./TipoCreateWithoutConfiguracionesInput.schema.ts";
import { TipoUncheckedCreateWithoutConfiguracionesInputObjectSchema as TipoUncheckedCreateWithoutConfiguracionesInputObjectSchema } from "./TipoUncheckedCreateWithoutConfiguracionesInput.schema.ts";
import { TipoWhereUniqueInputObjectSchema as TipoWhereUniqueInputObjectSchema } from "./TipoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => TipoWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => TipoCreateWithoutConfiguracionesInputObjectSchema), z.lazy(() => TipoUncheckedCreateWithoutConfiguracionesInputObjectSchema)]),
		})
		.strict();
export const TipoCreateOrConnectWithoutConfiguracionesInputObjectSchema: z.ZodType<Prisma.TipoCreateOrConnectWithoutConfiguracionesInput> =
	makeSchema() as unknown as z.ZodType<Prisma.TipoCreateOrConnectWithoutConfiguracionesInput>;
export const TipoCreateOrConnectWithoutConfiguracionesInputObjectZodSchema = makeSchema();
