import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { useEffect } from "react";
import { editEstudiante } from "@/utils/services/StudentServices";
import { notifyError, notifySuccess } from "@/utils/Notify";
interface StudentEditProps {
  updateList: () => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  student: StudentType;
}

const StudentEditDialog = ({
  open,
  onOpenChange,
  student,
  updateList,
}: StudentEditProps) => {
  const methods = useForm<StudentType>();
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;
  const onSubmit = async (data: StudentType) => {
    const response = await editEstudiante(data);
    if (response?.status == 200) {
      onOpenChange(false);
      notifySuccess("Se ha editado correctamente");
      updateList();
    } else {
      notifyError("Ha ocurrido un error, inténtelo de nuevo");
    }
  };

  useEffect(() => {
    if (student) {
      reset(student);
    }
  }, [student, reset]);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="scrollbar-styles flex flex-col items-center justify-start border-0 bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogTitle>
          <div className="flex justify-between items-center bg-white">
            <h3 className="text-xl font-bold text-uclv-dark">
              <i className="fas fa-user-plus text-uclv-blue mr-2"></i>
              <span id="modal-title">Editar Estudiante</span>
            </h3>
          </div>
        </DialogTitle>
        <DialogDescription>
          Edite la información académica del estudiante matriculado
        </DialogDescription>
        <div className="p-6 w-full">
          <FormProvider {...methods}>
            <form id="student-edit-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4 ">
                <div className="md:col-span-2">
                  <h4 className="text-lg font-medium text-uclv-dark mb-3 border-b pb-2">
                    Datos Personales
                  </h4>
                </div>
                <FormInput
                  labelText="Nombre(s)"
                  name="nombre"
                  placeholder="Ej. Roberto"
                  rules={nameRules}
                  req
                  value={student.nombre}
                />
                {errors.nombre && (
                  <ErrorMessage message={errors.nombre.message} />
                )}
                <FormInput
                  labelText="Apellidos"
                  name="apellidos"
                  placeholder="Ej. Sierra Mendez"
                  req
                  rules={lastNameRules}
                  value={student.apellidos}
                />
                {errors.apellidos && (
                  <ErrorMessage message={errors.apellidos.message} />
                )}
                <FormInput
                  value={student.ci}
                  labelText="Carnet de Identidad"
                  name="ci"
                  placeholder="Ej. 04102054671"
                  type="number"
                  req
                  rules={ciRules}
                />
                {errors.ci && <ErrorMessage message={errors.ci.message} />}
                <FormSelect
                  value={student.sexo}
                  labelText="Sexo"
                  name="sexo"
                  placeholder="Seleccione"
                  data={["Masculino", "Femenino"]}
                  dataValues={["masculino", "femenino"]}
                  req
                  rules={genderRules}
                />
                {errors.sexo && <ErrorMessage message={errors.sexo.message} />}
                <FormInput
                  value={student.telefonoPersonal}
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
                <FormInput
                  value={student.telefonoFamiliar}
                  labelText="Teléfono de familiar"
                  name="telefonoFamiliar"
                  placeholder="Ej. 56507910"
                  type="number"
                  rules={familyPhoneRules}
                />
                {errors.telefonoFamiliar && (
                  <ErrorMessage message={errors.telefonoFamiliar.message} />
                )}
                <FormSelect
                  value={student.provincia}
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
                <FormCascadingSelect
                  value={student.municipio}
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
                <FormInput
                  value={student.direccion}
                  labelText="Dirección"
                  name="direccion"
                  placeholder="Ej. Calle 5ta #45"
                  req
                  rules={addressRules}
                />
                {errors.direccion && (
                  <ErrorMessage message={errors.direccion.message} />
                )}
                <FormInput
                  value={student.enfermedades}
                  labelText="Enfermedades"
                  name="enfermedades"
                  placeholder="Ej. Asma"
                />
                {errors.enfermedades && (
                  <ErrorMessage message={errors.enfermedades.message} />
                )}
                <FormInput
                  value={student.medicamentos}
                  labelText="Medicamentos"
                  name="medicamentos"
                  placeholder="Ej. ketotifeno"
                />
                {errors.medicamentos && (
                  <ErrorMessage message={errors.medicamentos.message} />
                )}
                <div className="md:col-span-2 mt-4">
                  <h4 className="text-lg font-medium text-uclv-dark mb-3 border-b pb-2">
                    Datos Académicos
                  </h4>
                </div>
                <FormSelect
                  value={student.facultad}
                  labelText="Facultad"
                  name="facultad"
                  placeholder="Seleccione"
                  req
                  data={facultades}
                  dataValues={facultades}
                  rules={facultyRules}
                />
                {errors.facultad && (
                  <ErrorMessage message={errors.facultad.message} />
                )}
                <FormSelect
                  value={student.carrera}
                  labelText="Carrera"
                  name="carrera"
                  placeholder="Seleccione"
                  req
                  data={["Ing. Info", "Fisica"]}
                  dataValues={["Ing. Info", "Fisica"]}
                  rules={majorRules}
                />
                {errors.carrera && (
                  <ErrorMessage message={errors.carrera.message} />
                )}
                <FormSelect
                  value={student.anho}
                  labelText="Año"
                  name="anho"
                  placeholder="Seleccione"
                  req
                  data={["1ro", "2do", "3ro", "4to"]}
                  dataValues={["1ro", "2do", "3ro", "4to"]}
                  rules={yearRules}
                />
                {errors.anho && <ErrorMessage message={errors.anho.message} />}
                <FormInput
                  value={student.aprovechamiento}
                  labelText="Aprovechamiento Docente"
                  name="aprovechamiento"
                  placeholder="Ej. Alto"
                />
                {errors.aprovechamiento && (
                  <ErrorMessage message={errors.aprovechamiento.message} />
                )}
                <div className="md:col-span-2 mt-4">
                  <h4 className="text-lg font-medium text-uclv-dark mb-3 border-b pb-2">
                    Datos de Residencia
                  </h4>
                </div>

                <FormSelect
                  value={student.edificio}
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
                <FormInput
                  labelText="Cuarto"
                  placeholder="Ej. 305"
                  name="cuarto"
                  req
                  value={student.cuarto}
                  rules={roomRules}
                  type="number"
                />

                <div className="md:col-span-2 mt-4">
                  <h4 className="text-lg font-medium text-uclv-dark mb-3 border-b pb-2">
                    Otros datos
                  </h4>
                </div>

                <FormSelect
                  value={student.cadeteFAR}
                  labelText="Cadete FAR"
                  name="cadeteFAR"
                  placeholder="Seleccione"
                  req
                  data={["Sí", "No"]}
                  dataValues={["si", "no"]}
                  rules={cadetFarRules}
                />
                {errors.cadeteFAR && (
                  <ErrorMessage message={errors.cadeteFAR.message} />
                )}
                <FormSelect
                  value={student.cadeteMININT}
                  labelText="Cadete MININT"
                  name="cadeteMININT"
                  placeholder="Seleccione"
                  req
                  data={["Sí", "No"]}
                  dataValues={["si", "no"]}
                  rules={cadetMinintRules}
                />
                {errors.cadeteMININT && (
                  <ErrorMessage message={errors.cadeteMININT.message} />
                )}
                <FormSelect
                  value={student.militante}
                  labelText="Militante UJC"
                  name="militante"
                  placeholder="Seleccione"
                  req
                  data={["Sí", "No"]}
                  dataValues={["si", "no"]}
                  rules={militantRules}
                />
                <FormInput
                  value={student.proceso}
                  labelText="Proceso Disciplinario"
                  name="proceso"
                  placeholder="Ej. Se negó a hacer cuartelería"
                />
                {errors.proceso && (
                  <ErrorMessage message={errors.proceso.message} />
                )}
              </div>
              <div className="flex items-center justify-center gap-6 mt-5">
                <NormalBtn
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

export default StudentEditDialog;
