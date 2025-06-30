import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/alunos/";

export async function pegarAlunoId(id = 1) {
  try {
    const response = await axios.get(`${API_BASE_URL}${id}`);
    return response.data;

  } catch (error) {
    console.error("Erro ao buscar aluno:", error);
    throw error;
  }
}
