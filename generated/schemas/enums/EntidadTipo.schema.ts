import * as z from "zod";

export const EntidadTipoSchema = z.enum(["LIBRO", "ESCRITOR", "COMENTARIO", "LISTA", "SYSTEM"]);

export type EntidadTipo = z.infer<typeof EntidadTipoSchema>;
