import axios from 'axios';

// Tipagem Sênior: Garantindo que o contrato de dados seja respeitado
export interface FranchiseData {
    vendasDia: number;
    statusSistema: string;
    disponibilidade: string;
}

// Simulação de chamada para a API da Extranet
export const getDashboardData = async (): Promise<FranchiseData> => {
    // Aqui no futuro entrará a URL real do Boticário
    // Por enquanto, simulamos uma resposta de sucesso
    return {
        vendasDia: 12450.00,
        statusSistema: "Operacional",
        disponibilidade: "99.9%"
    };
};