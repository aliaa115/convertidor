import * as z from "zod";
import type { Prisma } from "../../prisma/client.ts";
import { UsuarioCreateOrConnectWithoutEscritorInputObjectSchema as UsuarioCreateOrConnectWithoutEscritorInputObjectSchema } from "./UsuarioCreateOrConnectWithoutEscritorInput.schema.ts";
import { UsuarioCreateWithoutEscritorInputObjectSchema as UsuarioCreateWithoutEscritorInputObjectSchema } from "./UsuarioCreateWithoutEscritorInput.schema.ts";
import { UsuarioUncheckedCreateWithoutEscritorInputObjectSchema as UsuarioUncheckedCreateWithoutEscritorInputObjectSchema } from "./UsuarioUncheckedCreateWithoutEscritorInput.schema.ts";
import { UsuarioWhereUniqueInputObjectSchema as UsuarioWhereUniqueInputObjectSchema } from "./UsuarioWhereUniqueInput.schema.ts";

const makeSchema = () =>
	z
		.object({
			create: z
				.union([
					z.lazy(() => UsuarioCreateWithoutEscritorInputObjectSchema),
					z.lazy(() => UsuarioUncheckedCreateWithoutEscritorInputObjectSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => UsuarioCreateOrConnectWithoutEscritorInputObjectSchema)
				.optional(),
			connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
		})
		.strict();
export const UsuarioCreateNestedOneWithoutEscritorInputObjectSchema: z.ZodType<Prisma.UsuarioCreateNestedOneWithoutEscritorInput> =
	makeSchema() as unknown as z.ZodType<Prisma.UsuarioCreateNestedOneWithoutEscritorInput>;
export const UsuarioCreateNestedOneWithoutEscritorInputObjectZodSchema =
	makeSchema();
