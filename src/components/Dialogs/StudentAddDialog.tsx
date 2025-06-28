import { Dialog, DialogContent } from "@/components/ui/dialog";
import FormInput from "../Form/FormInput";
import FormSelect from "../Form/FormSelect";
import provincias from "@/utils/provincias.json";
import facultades from "@/utils/facultades.json";
import FormCascadingSelect from "../Form/FormCascadingSelect";
import NormalBtn from "../shared/NormalBtn";
import {useForm,FormProvider} from 'react-hook-form'
import type { StudentType } from "@/types/StudentType";
interface StudentAddDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StudentAddDialog = ({ open, onOpenChange }: StudentAddDialogProps) => {
  const methods = useForm<StudentType>()
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col items-center justify-start border-0 bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center bg-white">
          <h3 className="text-xl font-bold text-uclv-dark">
            <i className="fas fa-user-plus text-uclv-blue mr-2"></i>
            <span id="modal-title">Añadir Nuevo Estudiante</span>
          </h3>
        </div>

        <div className="p-6">
          <FormProvider {...methods}>
          <form id="student-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <h4 className="text-lg font-medium text-uclv-dark mb-3 border-b pb-2">
                  Datos Personales
                </h4>
              </div>
              <FormInput
                labelText="Nombre(s)"
                name="first-name"
                placeholder="Ej. Roberto"
                req
              />
              <FormInput
                labelText="Apellidos"
                name="last-name"
                placeholder="Ej. Sierra Mendez"
                req
              />
              <FormInput
                labelText="Carnet de Identidad"
                name="ci"
                placeholder="Ej. 04102054671"
                type="number"
                req
              />
              <FormInput
                labelText="Carnet de Identidad"
                name="ci"
                placeholder="Ej. 04102054671"
                type="number"
                req
              />
              <FormSelect
                labelText="Sexo"
                name="gender"
                placeholder="Seleccione"
                data={["Masculino", "Femenino"]}
                dataValues={["M", "F"]}
                req
              />
              <FormInput
                labelText="Teléfono personal"
                name="phone"
                placeholder="Ej. 56408790"
                type="number"
                req
              />
              <FormInput
                labelText="Teléfono de familiar"
                name="phone"
                placeholder="Ej. 56507910"
                type="number"
                req
              />
              <FormSelect
                labelText="Provincia"
                name="provincia"
                placeholder="Seleccione"
                data={provincias}
                dataValues={provincias}
                req
              />
              <FormCascadingSelect
                labelText="Municipio"
                name="municipio"
                placeholder="Seleccione"
                data={provincias}
                dataValues={provincias}
                req
              />
              <FormInput
                labelText="Dirección"
                name="direccion"
                placeholder="Ej. Calle 5ta #45"
                req
              />
              <FormInput
                labelText="Enfermedades"
                name="enfermedad"
                placeholder="Ej. Asma"
                req
              />
              <FormInput
                labelText="Medicamentos"
                name="medicamentos"
                placeholder="Ej. ketotifeno"
                req
              />

              <div className="md:col-span-2 mt-4">
                <h4 className="text-lg font-medium text-uclv-dark mb-3 border-b pb-2">
                  Datos Académicos
                </h4>
              </div>
              <FormSelect
                labelText="Facultad"
                name="facultad"
                placeholder="Seleccione"
                req
                data={facultades}
                dataValues={facultades}
              />
              <FormSelect
                labelText="Carrera"
                name="carrera"
                placeholder="Seleccione"
                req
                data={["Ing. Info", "Fisica"]}
                dataValues={["Ing. Info", "Fisica"]}
              />
              <FormSelect
                labelText="Año"
                name="anho"
                placeholder="Seleccione"
                req
                data={["1ero", "2do", "3ero", "4to"]}
                dataValues={["1ero", "2do", "3ero", "4to"]}
              />
              <FormInput
                labelText="Aprovechamiento Docente"
                name="aprovechamiento"
                placeholder="Ej. Alto"
                req
              />

              <div className="md:col-span-2 mt-4">
                <h4 className="text-lg font-medium text-uclv-dark mb-3 border-b pb-2">
                  Datos de Residencia
                </h4>
              </div>

              <FormSelect
                labelText="Edificio"
                placeholder="Seleccione"
                name="edificio"
                req
                data={["Edificio 900", "Edificio C5", "Edificio C4"]}
                dataValues={["Edificio 900", "Edificio C5", "Edificio C4"]}
              />
              <FormSelect
                labelText="Cuarto"
                name="Seleccione"
                req
                data={["301", "305", "409"]}
                dataValues={["Edificio 900", "Edificio C5", "Edificio C4"]}
              />

              <div className="md:col-span-2 mt-4">
                <h4 className="text-lg font-medium text-uclv-dark mb-3 border-b pb-2">
                  Otros datos
                </h4>
              </div>

              <FormSelect
                labelText="Cadete FAR"
                name="cadeteFAR"
                placeholder="Seleccione"
                req
                data={["Sí", "No"]}
                dataValues={["si", "no"]}
              />
              <FormSelect
                labelText="Cadete MININT"
                name="cadeteMININT"
                placeholder="Seleccione"
                req
                data={["Sí", "No"]}
                dataValues={["si", "no"]}
              />
              <FormSelect
                labelText="Militante UJC"
                name="militante"
                placeholder="Seleccione"
                req
                data={["Sí", "No"]}
                dataValues={["si", "no"]}
              />
              <FormInput
                labelText="Proceso Disciplinario"
                name="proceso"
                placeholder="Ej. Se negó a hacer cuartelería"
              />
            </div>
            <div className="flex items-center justify-center gap-6 mt-5">
              <NormalBtn text="Cancelar" classname="flex items-center bg-transparent border-1 border-gray-500 text-gray-500 hover:bg-gray-100">
                <i className="fas fa-times mr-2"></i>
              </NormalBtn>
              <NormalBtn text="Guardar" classname="flex items-center bg-uclv-green hover:bg-green-500">
                <i className="fas fa-save mr-2"></i>
              </NormalBtn>
            </div>
          </form>
          </FormProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StudentAddDialog;
