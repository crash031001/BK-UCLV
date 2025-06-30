export type ComplaintType = {
    id:number
    student_id:number
    descripcion:string
    tipo:string
    fecha:string
    edificio:string
    estado:string
    visible:boolean
    respuesta:string | null
}