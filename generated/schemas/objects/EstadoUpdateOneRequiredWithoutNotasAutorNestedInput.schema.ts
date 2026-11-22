import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { EstadoCreateOrConnectWithoutNotasAutorInputObjectSchema as EstadoCreateOrConnectWithoutNotasAutorInputObjectSchema } from "./EstadoCreateOrConnectWithoutNotasAutorInput.schema.ts";
import { EstadoCreateWithoutNotasAutorInputObjectSchema as EstadoCreateWithoutNotasAutorInputObjectSchema } from "./EstadoCreateWithoutNotasAutorInput.schema.ts";
import { EstadoUncheckedCreateWithoutNotasAutorInputObjectSchema as EstadoUncheckedCreateWithoutNotasAutorInputObjectSchema } from "./EstadoUncheckedCreateWithoutNotasAutorInput.schema.ts";
import { EstadoUncheckedUpdateWithoutNotasAutorInputObjectSchema as EstadoUncheckedUpdateWithoutNotasAutorInputObjectSchema } from "./EstadoUncheckedUpdateWithoutNotasAutorInput.schema.ts";
import { EstadoUpdateToOneWithWhereWithoutNotasAutorInputObjectSchema as EstadoUpdateToOneWithWhereWithoutNotasAutorInputObjectSchema } from "./EstadoUpdateToOneWithWhereWithoutNotasAutorInput.schema.ts";
import { EstadoUpdateWithoutNotasAutorInputObjectSchema as EstadoUpdateWithoutNotasAutorInputObjectSchema } from "./EstadoUpdateWithoutNotasAutorInput.schema.ts";
import { EstadoUpsertWithoutNotasAutorInputObjectSchema as EstadoUpsertWithoutNotasAutorInputObjectSchema } from "./EstadoUpsertWithoutNotasAutorInput.schema.ts";
import { EstadoWhereUniqueInputObjectSchema as EstadoWhereUniqueInputObjectSchema } from "./EstadoWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => EstadoCreateWithoutNotasAutorInputObjectSchema),
					z.lazy(() => EstadoUncheckedCreateWithoutNotasAutorInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => EstadoCreateOrConnectWithoutNotasAutorInputObjectSchema)
				.optional(),
			upsert: z
				.lazy(() => EstadoUpsertWithoutNotasAutorInputObjectSchema)
				.optional(),
			connect: z.lazy(() => EstadoWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(
						() => EstadoUpdateToOneWithWhereWithoutNotasAutorInputObjectSchema,
					),
					z.lazy(() => EstadoUpdateWithoutNotasAutorInputObjectSchema),
					z.lazy(() => EstadoUncheckedUpdateWithoutNotasAutorInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const EstadoUpdateOneRequiredWithoutNotasAutorNestedInputObjectSchema: z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutNotasAutorNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.EstadoUpdateOneRequiredWithoutNotasAutorNestedInput>;
export const EstadoUpdateOneRequiredWithoutNotasAutorNestedInputObjectZodSchema =
	makeSchema();
