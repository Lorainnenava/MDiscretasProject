export interface SummaryInfo {
  total: number;
  information: string;
}

interface NivelData {
  total: number;
  interseccion: number;
}

interface PlataformaData {
  total: number;
  interseccion: number;
}

interface ExperienciaData {
  "Menos de 10 años": PlataformaData;
  "Entre 10 y 20 años": PlataformaData;
  "Más de 20 años": PlataformaData;
}

interface GrupoData {
  plataformas: {
    WhatsApp: PlataformaData;
    Teams: PlataformaData;
    Slack: PlataformaData;
    Otra: PlataformaData;
  };
}
export interface EstudiantesData {
  total: number;
  niveles: {
    "Estudiante de programa técnico": NivelData;
    "Estudiante de programa tecnológico": NivelData;
    "Estudiante universitario": NivelData;
  };
  plataformas: GrupoData;
}

export interface ProfesoresData {
  total: number;
  plataformas: GrupoData;
  Experiencia: ExperienciaData;
}

export interface DataDetails {
  estudiantes: EstudiantesData;
  profesores: ProfesoresData;
}

export interface DashboardData {
  survey_id: number;
  summary: SummaryInfo[];
  details: DataDetails;
}
