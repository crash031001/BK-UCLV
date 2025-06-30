import type { ComplaintType } from "@/types/ComplaintType";
import axiosInstance from "../AxiosInstance";

export async function getMyComplaints() {
  try {
    const response = await axiosInstance.get("api/complains/student/23");
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
export async function deleteComplaint(id: ComplaintType["id"]) {
  try {
    const response = await axiosInstance.delete(`api/complains/${id}`);
    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.error("Error al eliminar queja:", error);

    throw error;
  }
}
export async function createComplaint({
  complaintData,
  student_id,
}: {
  complaintData: ComplaintType;
  student_id: number;
}) {
  try {
    const response = await axiosInstance.post("api/complains", {
      ...complaintData,
      student_id,
    });
    if (response.status == 201) {
      return response;
    }
  } catch (error) {
    console.error("Error al crear estudiante:", error);

    throw error;
  }
}
