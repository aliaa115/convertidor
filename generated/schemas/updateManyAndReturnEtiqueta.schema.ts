import * as z from "zod";
import type { Prisma } from "../prisma/client.ts";
import { EtiquetaSelectObjectSchema as EtiquetaSelectObjectSchema } from "./objects/EtiquetaSelect.schema.ts";
import { EtiquetaUpdateManyMutationInputObjectSchema as EtiquetaUpdateManyMutationInputObjectSchema } from "./objects/EtiquetaUpdateManyMutationInput.schema.ts";
import { EtiquetaWhereInputObjectSchema as EtiquetaWhereInputObjectSchema } from "./objects/EtiquetaWhereInput.schema.ts";

export const EtiquetaUpdateManyAndReturnSchema: z.ZodType<Prisma.EtiquetaUpdateManyAndReturnArgs> =
	z
		.object({
			select: EtiquetaSelectObjectSchema.optional(),
			data: EtiquetaUpdateManyMutationInputObjectSchema,
			where: EtiquetaWhereInputObjectSchema.optional(),
		})
		.strict() as unknown as z.ZodType<Prisma.EtiquetaUpdateManyAndReturnArgs>;

export const EtiquetaUpdateManyAndReturnZodSchema = z
	.object({
		select: EtiquetaSelectObjectSchema.optional(),
		data: EtiquetaUpdateManyMutationInputObjectSchema,
		where: EtiquetaWhereInputObjectSchema.optional(),
	})
	.strict();
