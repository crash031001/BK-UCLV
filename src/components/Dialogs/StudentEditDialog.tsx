import { Dialog, DialogContent } from "@/components/ui/dialog";
import FormInput from "../Form/FormInput";
import FormSelect from "../Form/FormSelect";
import provincias from "@/utils/provincias.json";
import facultades from "@/utils/facultades.json";
import FormCascadingSelect from "../Form/FormCascadingSelect";
import NormalBtn from "../shared/NormalBtn";
import { useForm, FormProvider } from "react-hook-form";
import type { StudentType } from "@/types/StudentType";
import ErrorMessage from "../Form/ErrorMessage";
import { nameRules } from "@/rules/StudentRules";
import { useEffect } from "react";
interface StudentEditProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	student: StudentType;
}

const StudentEditDialog = ({
	open,
	onOpenChange,
	student,
}: StudentEditProps) => {
	console.log(student);
	const methods = useForm<StudentType>();
	const {
		handleSubmit,
		formState: { errors },
		reset,
	} = methods;
	const onSubmit = (data: StudentType) => {
		console.log(data);
	};

	useEffect(() => {
		if (student) {
			reset(student); // <-- Esto reinicia el formulario con los datos del estudiante seleccionado
		}
	}, [student, reset]);
	return (
		<Dialog
			open={open}
			onOpenChange={onOpenChange}
		>
			<DialogContent className="flex flex-col items-center justify-start border-0 bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
				<div className="flex justify-between items-center bg-white">
					<h3 className="text-xl font-bold text-uclv-dark">
						<i className="fas fa-user-plus text-uclv-blue mr-2"></i>
						<span id="modal-title">Editar Estudiante</span>
					</h3>
				</div>

				<div className="p-6 w-full">
					<FormProvider {...methods}>
						<form
							id="student-edit-form"
							onSubmit={handleSubmit(onSubmit)}
						>
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
								/>
								{errors.ci && <ErrorMessage message={errors.ci.message} />}
								<FormSelect
									value={student.sexo}
									labelText="Sexo"
									name="sexo"
									placeholder="Seleccione"
									data={["Masculino", "Femenino"]}
									dataValues={["M", "F"]}
									req
								/>
								{errors.sexo && <ErrorMessage message={errors.sexo.message} />}
								<FormInput
									value={student.telefonoPersonal}
									labelText="Teléfono personal"
									name="telefonoPersonal"
									placeholder="Ej. 56408790"
									type="number"
									req
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
									req
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
								/>
								{errors.direccion && (
									<ErrorMessage message={errors.direccion.message} />
								)}
								<FormInput
									value={student.enfermedades}
									labelText="Enfermedades"
									name="enfermedades"
									placeholder="Ej. Asma"
									req
								/>
								{errors.enfermedades && (
									<ErrorMessage message={errors.enfermedades.message} />
								)}
								<FormInput
									value={student.medicamentos}
									labelText="Medicamentos"
									name="medicamentos"
									placeholder="Ej. ketotifeno"
									req
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
									data={["1ero", "2do", "3ero", "4to"]}
									dataValues={["1ero", "2do", "3ero", "4to"]}
								/>
								{errors.anho && <ErrorMessage message={errors.anho.message} />}
								<FormInput
									value={student.aprovechamiento}
									labelText="Aprovechamiento Docente"
									name="aprovechamiento"
									placeholder="Ej. Alto"
									req
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
									data={["Edificio 900", "Edificio C5", "Edificio C4"]}
									dataValues={["Edificio 900", "Edificio C5", "Edificio C4"]}
								/>
								{errors.edificio && (
									<ErrorMessage message={errors.edificio.message} />
								)}
								<FormSelect
									value={student.cuarto}
									labelText="Cuarto"
									placeholder="Seleccione"
									name="cuarto"
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
									value={student.cadeteFAR}
									labelText="Cadete FAR"
									name="cadeteFAR"
									placeholder="Seleccione"
									req
									data={["Sí", "No"]}
									dataValues={["si", "no"]}
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
