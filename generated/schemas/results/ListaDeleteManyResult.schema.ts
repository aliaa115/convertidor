import * as z from "zod";
export const ListaDeleteManyResultSchema = z.object({
	count: z.number(),
});
