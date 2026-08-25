import { toast } from "react-toastify";

export const toastHelper = {
    add: () => toast.success("Sua tarefa foi adicionada!"),
    delete: () => toast.success("Tarefa deletada com sucesso!"),
    editMode: () => toast.info("Modo editar acionado!"),
    save: () => toast.info("Salvando sua tarefa...") ,
    done: () => toast.success("Tarefa concluída com sucesso!") ,
    undo: () => toast.info("Desfazendo sua escolha!"),
    duplicate: () => toast.error("Essa tarefa já existe!") ,
}