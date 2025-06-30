import { FormDatePicker } from "@/components/Form/FormDatePicker";
import FormSelect from "@/components/Form/FormSelect";
import FormTextArea from "@/components/Form/FormTextArea";
import NormalBtn from "@/components/shared/NormalBtn";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { ComplaintType } from "@/types/ComplaintType";
import { notifyError, notifySuccess } from "@/utils/Notify";
import { createComplaint } from "@/utils/services/ComplaintsServices";
import { FormProvider, useForm } from "react-hook-form";

interface ComplaintsAddDialogProps {
  open: boolean;
  updateList: () => void;
  onOpenChange: (open: boolean) => void;
}
const ComplaintsAddDialog = ({
  open,
  onOpenChange,
  updateList,
}: ComplaintsAddDialogProps) => {
  const methods = useForm<ComplaintType>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = async (data: ComplaintType) => {
    console.log(data);
    const response = await createComplaint({
      complaintData: data,
      student_id: 1,
    });
    if (response?.status === 201) {
      onOpenChange(false);
      updateList();
      notifySuccess("Queja enviada correctamente");
    } else {
      notifyError("Ha ocurrido un error, inténtelo de nuevo");
    }
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border-0">
        <DialogTitle className="flex items-center text-xl font-bold text-uclv-dark">
          <i className="fas fa-plus-circle text-uclv-blue mr-2"></i>
          <span>Nueva Queja</span>
        </DialogTitle>
        <DialogDescription className="px-6">
          Rellene los campos para formular una queja
        </DialogDescription>
        <div className="p-6">
          <FormProvider {...methods}>
            <form id="complaint-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormDatePicker
                    labelText="Fecha"
                    name="fecha"
                    placeholder="Ej. 4 de junio de 2025"
                  />
                  <FormSelect
                    labelText="Tipo de Queja"
                    placeholder="Seleccione"
                    name="tipo"
                    data={["Administrativa", "Educativa"]}
                    dataValues={["administrativa", "educativa"]}
                  />

                  <FormTextArea
                    className="md:col-span-2"
                    labelText="Descripción detallada"
                    req
                    name="descripcion"
                    placeholder="Ej. Hay problema con el abastecimiento de agua en el edificio C5"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <NormalBtn
                  type="button"
                  className="bg-white hover:bg-gray-100 text-gray-700 border border-gray-700"
                  onClick={() => onOpenChange(false)}
                >
                  <i className="fas fa-times mr-2"></i>Cancelar
                </NormalBtn>
                <NormalBtn
                  type="submit"
                  className="bg-uclv-green hover:bg-green-500"
                >
                  <i className="fas fa-check mr-2"></i>Enviar Queja
                </NormalBtn>
              </div>
            </form>
          </FormProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComplaintsAddDialog;
