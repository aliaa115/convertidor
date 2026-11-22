import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { EtiquetaCreateWithoutLibrosInputObjectSchema as EtiquetaCreateWithoutLibrosInputObjectSchema } from "./EtiquetaCreateWithoutLibrosInput.schema.ts";
import { EtiquetaUncheckedCreateWithoutLibrosInputObjectSchema as EtiquetaUncheckedCreateWithoutLibrosInputObjectSchema } from "./EtiquetaUncheckedCreateWithoutLibrosInput.schema.ts";
import { EtiquetaWhereUniqueInputObjectSchema as EtiquetaWhereUniqueInputObjectSchema } from "./EtiquetaWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			where: z.lazy(() => EtiquetaWhereUniqueInputObjectSchema),
			create: z.union([z.lazy(() => EtiquetaCreateWithoutLibrosInputObjectSchema), z.lazy(() => EtiquetaUncheckedCreateWithoutLibrosInputObjectSchema)]),
		})
		.strict();
export const EtiquetaCreateOrConnectWithoutLibrosInputObjectSchema: z.ZodType<Prisma.EtiquetaCreateOrConnectWithoutLibrosInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EtiquetaCreateOrConnectWithoutLibrosInput>;
export const EtiquetaCreateOrConnectWithoutLibrosInputObjectZodSchema = makeSchema();
