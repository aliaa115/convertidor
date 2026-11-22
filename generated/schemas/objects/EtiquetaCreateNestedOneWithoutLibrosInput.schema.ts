import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EtiquetaCreateOrConnectWithoutLibrosInputObjectSchema as EtiquetaCreateOrConnectWithoutLibrosInputObjectSchema } from "./EtiquetaCreateOrConnectWithoutLibrosInput.schema.ts";
import { EtiquetaCreateWithoutLibrosInputObjectSchema as EtiquetaCreateWithoutLibrosInputObjectSchema } from "./EtiquetaCreateWithoutLibrosInput.schema.ts";
import { EtiquetaUncheckedCreateWithoutLibrosInputObjectSchema as EtiquetaUncheckedCreateWithoutLibrosInputObjectSchema } from "./EtiquetaUncheckedCreateWithoutLibrosInput.schema.ts";
import { EtiquetaWhereUniqueInputObjectSchema as EtiquetaWhereUniqueInputObjectSchema } from "./EtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => EtiquetaCreateWithoutLibrosInputObjectSchema), z.lazy(() => EtiquetaUncheckedCreateWithoutLibrosInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => EtiquetaCreateOrConnectWithoutLibrosInputObjectSchema).optional(),
			connect: z.lazy(() => EtiquetaWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const EtiquetaCreateNestedOneWithoutLibrosInputObjectSchema: z.ZodType<Prisma.EtiquetaCreateNestedOneWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaCreateNestedOneWithoutLibrosInput>;
export const EtiquetaCreateNestedOneWithoutLibrosInputObjectZodSchema = makeSchema();
