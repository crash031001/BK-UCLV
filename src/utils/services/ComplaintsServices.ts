import type { ComplaintType } from "@/types/ComplaintType";
import axiosInstance from "../AxiosInstance";
import type { AxiosError } from "axios";

export async function getMyComplaints() {
  try {
    const response = await axiosInstance.get("api/complains/23");
      return response;
  } catch (error) {
    console.log(error);
  }
}
export async function getVisibleComplaints() {
  try {
    const response = await axiosInstance.get("api/complains/visible");
    console.log(response)
      return response;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteComplaint(id: ComplaintType["id"]) {
  try {
    const response = await axiosInstance.delete(`api/complains/${id}`);
      return response;
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
      return response
  } catch (error) {
    console.error("Error al crear queja:", error);

    return error as AxiosError;
  }
}
export async function editComplaint({complaintData,
  student_id,
}: {
  complaintData: ComplaintType;
  student_id: number;
}) {
  try {
    const response = await axiosInstance.put(`api/complains/${complaintData.id}`,{
      ...complaintData,
      student_id,
    });
      return response;
  } catch (error) {
    console.error("Error al editar queja:", error);

    throw error;
  }
}