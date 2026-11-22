import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CapituloCreateOrConnectWithoutNotasAutorInputObjectSchema as CapituloCreateOrConnectWithoutNotasAutorInputObjectSchema } from "./CapituloCreateOrConnectWithoutNotasAutorInput.schema.ts";
import { CapituloCreateWithoutNotasAutorInputObjectSchema as CapituloCreateWithoutNotasAutorInputObjectSchema } from "./CapituloCreateWithoutNotasAutorInput.schema.ts";
import { CapituloUncheckedCreateWithoutNotasAutorInputObjectSchema as CapituloUncheckedCreateWithoutNotasAutorInputObjectSchema } from "./CapituloUncheckedCreateWithoutNotasAutorInput.schema.ts";
import { CapituloUncheckedUpdateWithoutNotasAutorInputObjectSchema as CapituloUncheckedUpdateWithoutNotasAutorInputObjectSchema } from "./CapituloUncheckedUpdateWithoutNotasAutorInput.schema.ts";
import { CapituloUpdateToOneWithWhereWithoutNotasAutorInputObjectSchema as CapituloUpdateToOneWithWhereWithoutNotasAutorInputObjectSchema } from "./CapituloUpdateToOneWithWhereWithoutNotasAutorInput.schema.ts";
import { CapituloUpdateWithoutNotasAutorInputObjectSchema as CapituloUpdateWithoutNotasAutorInputObjectSchema } from "./CapituloUpdateWithoutNotasAutorInput.schema.ts";
import { CapituloUpsertWithoutNotasAutorInputObjectSchema as CapituloUpsertWithoutNotasAutorInputObjectSchema } from "./CapituloUpsertWithoutNotasAutorInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./CapituloWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => CapituloCreateWithoutNotasAutorInputObjectSchema), z.lazy(() => CapituloUncheckedCreateWithoutNotasAutorInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => CapituloCreateOrConnectWithoutNotasAutorInputObjectSchema).optional(),
			upsert: z.lazy(() => CapituloUpsertWithoutNotasAutorInputObjectSchema).optional(),
			connect: z.lazy(() => CapituloWhereUniqueInputObjectSchema).optional(),
			update: z
				.union([
					z.lazy(() => CapituloUpdateToOneWithWhereWithoutNotasAutorInputObjectSchema),
					z.lazy(() => CapituloUpdateWithoutNotasAutorInputObjectSchema),
					z.lazy(() => CapituloUncheckedUpdateWithoutNotasAutorInputObjectSchema),
				])
				.optional(),
		})
		.strict();
export const CapituloUpdateOneRequiredWithoutNotasAutorNestedInputObjectSchema: z.ZodType<Prisma.CapituloUpdateOneRequiredWithoutNotasAutorNestedInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloUpdateOneRequiredWithoutNotasAutorNestedInput>;
export const CapituloUpdateOneRequiredWithoutNotasAutorNestedInputObjectZodSchema = makeSchema();
