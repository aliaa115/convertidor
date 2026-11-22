import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EscritorCreateOrConnectWithoutUsuarioInputObjectSchema as EscritorCreateOrConnectWithoutUsuarioInputObjectSchema } from "./EscritorCreateOrConnectWithoutUsuarioInput.schema.ts";
import { EscritorCreateWithoutUsuarioInputObjectSchema as EscritorCreateWithoutUsuarioInputObjectSchema } from "./EscritorCreateWithoutUsuarioInput.schema.ts";
import { EscritorUncheckedCreateWithoutUsuarioInputObjectSchema as EscritorUncheckedCreateWithoutUsuarioInputObjectSchema } from "./EscritorUncheckedCreateWithoutUsuarioInput.schema.ts";
import { EscritorUncheckedUpdateWithoutUsuarioInputObjectSchema as EscritorUncheckedUpdateWithoutUsuarioInputObjectSchema } from "./EscritorUncheckedUpdateWithoutUsuarioInput.schema.ts";
import { EscritorUpdateToOneWithWhereWithoutUsuarioInputObjectSchema as EscritorUpdateToOneWithWhereWithoutUsuarioInputObjectSchema } from "./EscritorUpdateToOneWithWhereWithoutUsuarioInput.schema.ts";
import { EscritorUpdateWithoutUsuarioInputObjectSchema as EscritorUpdateWithoutUsuarioInputObjectSchema } from "./EscritorUpdateWithoutUsuarioInput.schema.ts";
import { EscritorUpsertWithoutUsuarioInputObjectSchema as EscritorUpsertWithoutUsuarioInputObjectSchema } from "./EscritorUpsertWithoutUsuarioInput.schema.ts";
import { EscritorWhereInputObjectSchema as EscritorWhereInputObjectSchema } from "./EscritorWhereInput.schema.ts";
import { EscritorWhereUniqueInputObjectSchema as EscritorWhereUniqueInputObjectSchema } from "./EscritorWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EscritorCreateWithoutUsuarioInputObjectSchema), z.lazy(() => EscritorUncheckedCreateWithoutUsuarioInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EscritorCreateOrConnectWithoutUsuarioInputObjectSchema).optional(),
			upsert: z.lazy(() => EscritorUpsertWithoutUsuarioInputObjectSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => EscritorWhereInputObjectSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => EscritorWhereInputObjectSchema)]).optional(),
			connect: z.lazy(() => EscritorWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => EscritorUpdateToOneWithWhereWithoutUsuarioInputObjectSchema),
					z.lazy(() => EscritorUpdateWithoutUsuarioInputObjectSchema),
					z.lazy(() => EscritorUncheckedUpdateWithoutUsuarioInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EscritorUncheckedUpdateOneWithoutUsuarioNestedInputObjectSchema: z.ZodType<Prisma.EscritorUncheckedUpdateOneWithoutUsuarioNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EscritorUncheckedUpdateOneWithoutUsuarioNestedInput>;
export const EscritorUncheckedUpdateOneWithoutUsuarioNestedInputObjectZodSchema = makeSchema();
