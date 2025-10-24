interface NivelData {
    total: number;
    interseccion: number;
}

export interface EstudiantesData {
    estudiantes: {
        total: number;
        niveles: {
            Técnico: NivelData;
            Tecnológico: NivelData;
            Universitario: NivelData;
        };
    };
}

interface PlataformaData {
    total: number;
    interseccion: number;
}

interface GrupoData {
    total: number;
    plataformas: {
        WhatsApp: PlataformaData;
        Teams: PlataformaData;
        Slack: PlataformaData;
        Otra: PlataformaData;
    };
}

export interface DataPlataformas {
    estudiantes: GrupoData;
    profesores: GrupoData;
}
