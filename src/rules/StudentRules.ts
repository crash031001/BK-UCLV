import type { RegisterOptions } from "react-hook-form";

export const nameRules: RegisterOptions = {
	required: "Debe llenar este campo",
	minLength: { value: 3, message: "Debe tener más de 3 caracteres" },
	maxLength: { value: 20, message: "Debe tener menos de 20 caracteres" },
};

export const lastNameRules: RegisterOptions = {
	required: "Debe llenar este campo",
	minLength: { value: 3, message: "Debe tener más de 3 caracteres" },
	maxLength: { value: 30, message: "Debe tener menos de 30 caracteres" },
};

export const ciRules: RegisterOptions = {
	required: "Debe llenar este campo",
	pattern: {
		value: /^\d{11}$/,
		message: "Debe contener exactamente 11 dígitos",
	},
};

export const genderRules: RegisterOptions = {
	required: "Debe seleccionar un sexo",
	validate: (value) =>
		["masculino", "femenino"].includes(value.toLowerCase()) || "Sexo no válido",
};

export const personalPhoneRules: RegisterOptions = {
	required: "Debe llenar este campo",
	pattern: {
		value: /^\d{8}$/,
		message: "Debe contener exactamente 8 números",
	},
};

export const familyPhoneRules: RegisterOptions = {
	pattern: {
		value: /^\d{8}$/,
		message: "Debe contener exactamente 8 números",
	},
};

export const addressRules: RegisterOptions = {
	required: "Debe llenar este campo",
	minLength: { value: 5, message: "Debe tener al menos 5 caracteres" },
	maxLength: { value: 100, message: "Debe tener menos de 100 caracteres" },
};
export const provinceRules: RegisterOptions = {
	required: "Debe seleccionar una provincia"
}
export const townRules: RegisterOptions = {
	required: "Debe seleccionar un municipio"
}
export const facultyRules: RegisterOptions = {
	required: "Debe seleccionar una facultad"
}
export const majorRules: RegisterOptions = {
	required: "Debe seleccionar una carrera"
}
export const yearRules: RegisterOptions = {
	required: "Debe seleccionar el año que cursa"
}
export const buildingRules: RegisterOptions = {
	required: "Debe seleccionar el edificio al que pertenece"
}
export const roomRules: RegisterOptions = {
	required: "Debe llenar este campo"
}
export const cadetFarRules: RegisterOptions = {
	required: "Debe seleccionar una opción"
}
export const cadetMinintRules: RegisterOptions = {
	required: "Debe seleccionar una opción"
}
export const militantRules: RegisterOptions = {
	required: "Debe seleccionar una opción"
}