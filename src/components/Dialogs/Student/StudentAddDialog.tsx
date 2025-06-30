import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import FormInput from "../../Form/FormInput";
import FormSelect from "../../Form/FormSelect";
import provincias from "@/utils/provincias.json";
import facultades from "@/utils/facultades.json";
import FormCascadingSelect from "../../Form/FormCascadingSelect";
import NormalBtn from "../../shared/NormalBtn";
import { useForm, FormProvider } from "react-hook-form";
import type { StudentType } from "@/types/StudentType";
import ErrorMessage from "../../Form/ErrorMessage";
import {
  addressRules,
  buildingRules,
  cadetFarRules,
  cadetMinintRules,
  ciRules,
  facultyRules,
  familyPhoneRules,
  genderRules,
  lastNameRules,
  majorRules,
  militantRules,
  nameRules,
  personalPhoneRules,
  provinceRules,
  roomRules,
  townRules,
  yearRules,
} from "@/rules/StudentRules";
import { createEstudiante } from "@/utils/services/StudentServices";
import { notifyError, notifySuccess } from "@/utils/Notify";
import { DialogDescription } from "@radix-ui/react-dialog";
interface StudentAddDialogProps {
  open: boolean;
  updateList: () => void;
  onOpenChange: (open: boolean) => void;
}

const StudentAddDialog = ({
  open,
  onOpenChange,
  updateList,
}: StudentAddDialogProps) => {
  const methods = useForm<StudentType>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = async (data: StudentType) => {
    const response = await createEstudiante(data);
    if (response?.status === 201) {
      onOpenChange(false);
      updateList();
      notifySuccess("Estudiante creado exitosamente");
    } else {
      notifyError("Ha ocurrido un error, inténtelo de nuevo");
    }
    console.log(response);
    console.log(data);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="scrollbar-styles flex flex-col items-center justify-start border-0 bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogTitle>
          <div className="flex justify-between items-center bg-white">
            <h3 className="text-xl font-bold text-uclv-dark">
              <i className="fas fa-user-plus text-uclv-blue mr-2"></i>
              <span id="modal-title">Añadir Nuevo Estudiante</span>
            </h3>
          </div>
        </DialogTitle>
        <DialogDescription className="my-0">
          Rellene los campos para agregar el estudiante
        </DialogDescription>
        <div className="p-6 w-full">
          <FormProvider {...methods}>
            <form id="student-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4 ">
                <div className="md:col-span-2">
                  <h4 className="text-lg font-medium text-uclv-dark mb-3 border-b pb-2">
                    Datos Personales
                  </h4>
                </div>
                <div>
                  <FormInput
                    labelText="Nombre(s)"
                    name="nombre"
                    placeholder="Ej. Roberto"
                    req
                    rules={nameRules}
                  />
                  {errors.nombre && (
                    <ErrorMessage message={errors.nombre.message} />
                  )}
                </div>
                <div>
                  <FormInput
                    labelText="Apellidos"
                    name="apellidos"
                    placeholder="Ej. Sierra Mendez"
                    req
                    rules={lastNameRules}
                  />
                  {errors.apellidos && (
                    <ErrorMessage message={errors.apellidos.message} />
                  )}
                </div>
                <div>
                  <FormInput
                    labelText="Carnet de Identidad"
                    name="ci"
                    placeholder="Ej. 04102054671"
                    type="number"
                    req
                    rules={ciRules}
                  />
                  {errors.ci && <ErrorMessage message={errors.ci.message} />}
                </div>
                <div>
                  <FormSelect
                    labelText="Sexo"
                    name="sexo"
                    placeholder="Seleccione"
                    data={["Masculino", "Femenino"]}
                    dataValues={["masculino", "femenino"]}
                    req
                    rules={genderRules}
                  />
                  {errors.sexo && (
                    <ErrorMessage message={errors.sexo.message} />
                  )}
                </div>
                <div>
                  <FormInput
                    labelText="Teléfono personal"
                    name="telefonoPersonal"
                    placeholder="Ej. 56408790"
                    type="number"
                    req
                    rules={personalPhoneRules}
                  />
                  {errors.telefonoPersonal && (
                    <ErrorMessage message={errors.telefonoPersonal.message} />
                  )}
                </div>
                <div>
                  <FormInput
                    labelText="Teléfono de familiar"
                    name="telefonoFamiliar"
                    placeholder="Ej. 56507910"
                    type="number"
                    rules={familyPhoneRules}
                  />
                  {errors.telefonoFamiliar && (
                    <ErrorMessage message={errors.telefonoFamiliar.message} />
                  )}
                </div>
                <div>
                  <FormSelect
                    labelText="Provincia"
                    name="provincia"
                    placeholder="Seleccione"
                    data={provincias}
                    dataValues={provincias}
                    req
                    rules={provinceRules}
                  />
                  {errors.provincia && (
                    <ErrorMessage message={errors.provincia.message} />
                  )}
                </div>
                <div>
                  <FormCascadingSelect
                    labelText="Municipio"
                    name="municipio"
                    placeholder="Seleccione"
                    data={provincias}
                    dataValues={provincias}
                    req
                    rules={townRules}
                  />
                  {errors.municipio && (
                    <ErrorMessage message={errors.municipio.message} />
                  )}
                </div>
                <div>
                  <FormInput
                    labelText="Dirección"
                    name="direccion"
                    placeholder="Ej. Calle 5ta #45"
                    req
                    rules={addressRules}
                  />
                  {errors.direccion && (
                    <ErrorMessage message={errors.direccion.message} />
                  )}
                </div>
                <div>
                  <FormInput
                    labelText="Enfermedades"
                    name="enfermedades"
                    placeholder="Ej. Asma"
                  />
                  {errors.enfermedades && (
                    <ErrorMessage message={errors.enfermedades.message} />
                  )}
                </div>
                <div>
                  <FormInput
                    labelText="Medicamentos"
                    name="medicamentos"
                    placeholder="Ej. ketotifeno"
                  />
                  {errors.medicamentos && (
                    <ErrorMessage message={errors.medicamentos.message} />
                  )}
                </div>
                <div className="md:col-span-2 mt-4">
                  <h4 className="text-lg font-medium text-uclv-dark mb-3 border-b pb-2">
                    Datos Académicos
                  </h4>
                </div>
                <div>
                  <FormSelect
                    labelText="Facultad"
                    name="facultad"
                    placeholder="Seleccione"
                    req
                    rules={facultyRules}
                    data={facultades}
                    dataValues={facultades}
                  />
                  {errors.facultad && (
                    <ErrorMessage message={errors.facultad.message} />
                  )}
                </div>
                <div>
                  <FormSelect
                    labelText="Carrera"
                    name="carrera"
                    placeholder="Seleccione"
                    req
                    rules={majorRules}
                    data={["Ing. Info", "Fisica"]}
                    dataValues={["Ing. Info", "Fisica"]}
                  />
                  {errors.carrera && (
                    <ErrorMessage message={errors.carrera.message} />
                  )}
                </div>
                <div>
                  <FormSelect
                    labelText="Año"
                    name="anho"
                    placeholder="Seleccione"
                    req
                    rules={yearRules}
                    data={["1ro", "2do", "3ro", "4to"]}
                    dataValues={["1ro", "2do", "3ro", "4to"]}
                  />
                  {errors.anho && (
                    <ErrorMessage message={errors.anho.message} />
                  )}
                </div>
                <div>
                  <FormInput
                    labelText="Aprovechamiento Docente"
                    name="aprovechamiento"
                    placeholder="Ej. Alto"
                  />
                  {errors.aprovechamiento && (
                    <ErrorMessage message={errors.aprovechamiento.message} />
                  )}
                </div>
                <div className="md:col-span-2 mt-4">
                  <h4 className="text-lg font-medium text-uclv-dark mb-3 border-b pb-2">
                    Datos de Residencia
                  </h4>
                </div>

                <div>
                  <FormSelect
                    labelText="Edificio"
                    placeholder="Seleccione"
                    name="edificio"
                    req
                    rules={buildingRules}
                    data={["Edificio 900", "Edificio C5", "Edificio C4"]}
                    dataValues={["Edificio 900", "Edificio C5", "Edificio C4"]}
                  />
                  {errors.edificio && (
                    <ErrorMessage message={errors.edificio.message} />
                  )}
                </div>
                <div>
                  <FormSelect
                    labelText="Cuarto"
                    placeholder="Seleccione"
                    name="cuarto"
                    req
                    rules={roomRules}
                    data={["301", "305", "409"]}
                    dataValues={["Edificio 900", "Edificio C5", "Edificio C4"]}
                  />
                  {errors.cuarto && (
                    <ErrorMessage message={errors.cuarto.message} />
                  )}
                </div>
                <div className="md:col-span-2 mt-4">
                  <h4 className="text-lg font-medium text-uclv-dark mb-3 border-b pb-2">
                    Otros datos
                  </h4>
                </div>

                <div>
                  <FormSelect
                    labelText="Cadete FAR"
                    name="cadeteFAR"
                    placeholder="Seleccione"
                    req
                    rules={cadetFarRules}
                    data={["Sí", "No"]}
                    dataValues={["si", "no"]}
                  />
                  {errors.cadeteFAR && (
                    <ErrorMessage message={errors.cadeteFAR.message} />
                  )}
                </div>
                <div>
                  <FormSelect
                    labelText="Cadete MININT"
                    name="cadeteMININT"
                    placeholder="Seleccione"
                    req
                    rules={cadetMinintRules}
                    data={["Sí", "No"]}
                    dataValues={["si", "no"]}
                  />
                  {errors.cadeteMININT && (
                    <ErrorMessage message={errors.cadeteMININT.message} />
                  )}
                </div>
                <div>
                  <FormSelect
                    labelText="Militante UJC"
                    name="militante"
                    placeholder="Seleccione"
                    req
                    rules={militantRules}
                    data={["Sí", "No"]}
                    dataValues={["si", "no"]}
                  />
                  {errors.militante && (
                    <ErrorMessage message={errors.militante.message} />
                  )}
                </div>
                <div>
                  <FormInput
                    labelText="Proceso Disciplinario"
                    name="proceso"
                    placeholder="Ej. Se negó a hacer cuartelería"
                  />
                  {errors.proceso && (
                    <ErrorMessage message={errors.proceso.message} />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center gap-6 mt-5">
                <NormalBtn
                  onClick={() => onOpenChange(false)}
                  text="Cancelar"
                  classname="flex items-center bg-transparent border-1 border-gray-500 text-gray-500 hover:bg-gray-100"
                >
                  <i className="fas fa-times mr-2"></i>
                </NormalBtn>
                <NormalBtn
                  type="submit"
                  text="Guardar"
                  classname="flex items-center bg-uclv-green hover:bg-green-500"
                >
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
