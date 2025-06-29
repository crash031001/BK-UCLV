import axiosInstance from "./AxiosInstance";

export async function getEstudiantes(){
    try {
        const response = await axiosInstance.get("api/students")
        if (response) {
            return response
        }
    } catch (error) {
        console.error(error)
    }
}