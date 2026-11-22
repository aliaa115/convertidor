import * as z from "zod";
import type { Prisma } from "../../prisma/browser.ts";
import { CapituloCreateOrConnectWithoutNotasAutorInputObjectSchema as CapituloCreateOrConnectWithoutNotasAutorInputObjectSchema } from "./CapituloCreateOrConnectWithoutNotasAutorInput.schema.ts";
import { CapituloCreateWithoutNotasAutorInputObjectSchema as CapituloCreateWithoutNotasAutorInputObjectSchema } from "./CapituloCreateWithoutNotasAutorInput.schema.ts";
import { CapituloUncheckedCreateWithoutNotasAutorInputObjectSchema as CapituloUncheckedCreateWithoutNotasAutorInputObjectSchema } from "./CapituloUncheckedCreateWithoutNotasAutorInput.schema.ts";
import { CapituloWhereUniqueInputObjectSchema as CapituloWhereUniqueInputObjectSchema } from "./CapituloWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z.union([z.lazy(() => CapituloCreateWithoutNotasAutorInputObjectSchema), z.lazy(() => CapituloUncheckedCreateWithoutNotasAutorInputObjectSchema)]).optional(),
			connectOrCreate: z.lazy(() => CapituloCreateOrConnectWithoutNotasAutorInputObjectSchema).optional(),
			connect: z.lazy(() => CapituloWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const CapituloCreateNestedOneWithoutNotasAutorInputObjectSchema: z.ZodType<Prisma.CapituloCreateNestedOneWithoutNotasAutorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.CapituloCreateNestedOneWithoutNotasAutorInput>;
export const CapituloCreateNestedOneWithoutNotasAutorInputObjectZodSchema = makeSchema();
