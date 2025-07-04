import axiosInstance from "@/utils/AxiosInstance";
import type { StudentType } from "@/types/StudentType";

export async function getEstudiantes() {
  try {
    const response = await axiosInstance.get("api/students");
    console.log(response)
      return response;
  } catch (error) {
    console.error(error);
  }
}

export async function createEstudiante(estudianteData: StudentType) {
  try {
    const response = await axiosInstance.post("api/students", estudianteData);
      return response;
  } catch (error) {
    console.error("Error al crear estudiante:", error);

    throw error;
  }
}
export async function deleteEstudiante(id: StudentType["id"]) {
    try {
      const response = await axiosInstance.delete(`api/students/${id}`,);
        return response;
    } catch (error) {
      console.error("Error al eliminar estudiante:", error);
  
      throw error;
    }
  }
  export async function editEstudiante(estudianteData:StudentType) {
    try {
      const response = await axiosInstance.put(`api/students/${estudianteData.id}`,estudianteData);
        return response;
    } catch (error) {
      console.error("Error al eliminar estudiante:", error);
  
      throw error;
    }
  }
