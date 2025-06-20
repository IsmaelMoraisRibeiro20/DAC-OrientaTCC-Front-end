import React, { useRef, useState } from "react";
import NavBar from '../../componentes/NavBar';
import { CiTrash } from 'react-icons/ci';

const AtividadeOrientador = () => {

    const comentariosAnteriores = [
        "Muito bom, ficou claro! ",
        "Adicione mais detalhes na descrição.",
    ];

    const arquivoRecebido = [
        "Teste.docx"
    ]

    const [nomeAtividade, setNomeAtividade] = useState("Nome da Atividade");
    const [descricao, setDescricao] = useState(`Componham equipes considerando os softwares definidos nas disciplinas de Projeto I e Projeto II, que possuam features (mesmo que em parte) funcionais e viáveis para avaliação de usabilidade.

Faça a imersão no produto considerando features a serem categorizadas com a técnica de CARD SORTING. Em seguida, descreva jornadas do usuário com a técnica de JOURNEY MAP, a fim de revelar armadilhas e momentos importantes do usuário na interação ou experiência com o produto.`);

    const [dataEntrega, setDataEntrega] = useState("2025-06-20T23:59");
    const [status, setStatus] = useState("Em andamento");

    const [comentario, setComentario] = useState("");

    const [fileName, setFileName] = useState("");
    const [fileURL, setFileURL] = useState("");

    const fileInputRef = useRef(null);

    function handleFileSelect(event) {
        const files = event.target.files;
        if (files.length > 0) {
            setFileName(files[0].name);
            setFileURL(URL.createObjectURL(files[0]));
        }
    }

    function handleButtonClick() {
        fileInputRef.current.click();
    }

    function handleCancel() {
        setFileName(null);
        setFileURL(null);
        fileInputRef.current.value = null;
    }

    return (
        <>
            <div className="d-flex justify-content-center bg-light" style={{ padding: "60px 20px" }}>
                <div className="card shadow p-4 w-100" style={{ maxWidth: "1100px", borderRadius: "12px" }}>
                    <NavBar />

                    <div className="d-flex flex-wrap justify-content-center" style={{ gap: "20px" }}>
                        {/* CARD PRINCIPAL */}
                        <div
                            className="card mb-3 flex-grow-1"
                            style={{ minWidth: "300px", flex: "1 1 650px", padding: "20px", borderRadius: "10px" }}
                        >
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                    <div>
                                        <input
                                            type="text"
                                            value={nomeAtividade}
                                            onChange={(e) => setNomeAtividade(e.target.value)}
                                            className="form-control"
                                            style={{ fontSize: "1.8rem", fontWeight: "bold", border: "none", padding: "0" }}
                                        />
                                        <p style={{ margin: "5px 0", fontWeight: "600" }}>
                                            Status:
                                            <select
                                                value={status}
                                                onChange={(e) => setStatus(e.target.value)}
                                                className="form-select"
                                                style={{
                                                    fontSize: "1rem",
                                                    fontWeight: "600",
                                                    marginLeft: "5px",
                                                    color:
                                                        status === "Aprovado"
                                                            ? "green"
                                                            : status === "Pendente"
                                                            ? "orange"
                                                            : "gray"

                                                }}
                                            >
                                                <option value="Pendente" style={{ color: "orange" }}>Pendente</option>
                                                <option value="Aprovado" style={{ color: "green" }}>Aprovado</option>
                                                <option value="Em andamento" style={{ color: "gray" }}>Em andamento</option>
                                            </select>
                                        </p>
                                    </div>

                                    <div>
                                        <label style={{ fontWeight: "bold", fontSize: "16px" }}>Data de entrega:</label>
                                        <input
                                            type="datetime-local"
                                            value={dataEntrega}
                                            onChange={(e) => setDataEntrega(e.target.value)}
                                            className="form-control"
                                            style={{ maxWidth: "220px", fontSize: "14px" }}
                                        />
                                    </div>
                                </div>


                                <hr style={{ border: "1px solid black", margin: "15px 0 25px 0" }} />

                                <textarea
                                    className="form-control"
                                    rows="8"
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                    style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
                                />

                                <div className="mb-3 mt-4" style={{ maxWidth: "650px", fontWeight: "bold" }}>
                                    <label htmlFor="comentario" className="form-label" style={{ fontSize: "20px" }}>
                                        Adicionar comentário
                                    </label>
                                    {/* Comentários Anteriores */}
                                    <div
                                        style={{
                                            backgroundColor: "#f9f9f9",
                                            padding: "15px",
                                            borderRadius: "8px",
                                            border: "1px solid #ddd",
                                            marginBottom: "15px",
                                            maxHeight: "150px",
                                            overflowY: "auto"
                                        }}
                                    >
                                        {/*Comentraios ja feitos na atividade aparecem */}
                                        {comentariosAnteriores.length > 0 ? (
                                            comentariosAnteriores.map((coment, index) => (
                                                <div
                                                    key={index}
                                                    style={{
                                                        marginBottom: "10px",
                                                        display: "flex",
                                                        justifyContent: "space-between"
                                                    }}>
                                                    <p style={{ margin: 0, fontSize: "0.95rem" }}>
                                                        {coment}
                                                    </p>
                                                    <hr style={{ margin: "8px 0", borderColor: "#ddd" }} />

                                                    <CiTrash size={22} style={{ color: "red" }} title="Excluir comentário" />
                                                </div>
                                            ))
                                        ) : (
                                            <p style={{ fontSize: "0.9rem", color: "#777" }}>Nenhum comentário ainda.</p>
                                        )}
                                    </div>
                                    <textarea
                                        className="form-control"
                                        id="comentario"
                                        rows="2"
                                        placeholder="Adicione um comentário"
                                        value={comentario}
                                        onChange={(e) => setComentario(e.target.value)}
                                        style={{ fontSize: "1rem" }}
                                    ></textarea>

                                    <div className="d-flex justify-content-end">
                                        <button
                                            style={{
                                                marginTop: "7px",
                                                padding: "10px 20px",
                                                fontSize: "14px",
                                                borderRadius: "8px",
                                                border: "none",
                                                backgroundColor: "#4a90e2",
                                                color: "white",
                                                fontWeight: "600",
                                                boxShadow: "0 4px 10px rgba(74,144,226,0.4)",
                                                cursor: "pointer",
                                                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                                                marginBottom: "0"
                                            }}
                                        >
                                            Adicionar comentário
                                        </button>

                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* BLOCO DA DIREITA */}
                        <div className="d-flex flex-column" style={{ gap: "20px", width: "350px", flexShrink: 0 }}>
                            {/* CARD DE SUBMISSÃO */}
                            <div
                                className="card"
                                style={{ padding: "20px", minHeight: "280px", borderRadius: "10px" }}
                            >
                                <div className="card-body">
                                    <h4 className="card-title" style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                                        Submeter Arquivos
                                    </h4>

                                    {fileName && (
                                        <div className="mt-3 d-flex align-items-center gap-2">
                                            <p className="mb-0"><strong>Arquivo:</strong></p>
                                            <a
                                                href={fileURL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    color: "#0d6efd",
                                                    textDecoration: "underline",
                                                    wordBreak: "break-word",
                                                }}
                                            >
                                                {fileName}
                                            </a>
                                            <button
                                                onClick={handleCancel}
                                                title="Remover arquivo"
                                                style={{
                                                    backgroundColor: "transparent",
                                                    border: "none",
                                                    color: "red",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                <CiTrash size={22} />
                                            </button>
                                        </div>
                                    )}

                                    <div className="d-grid gap-3" style={{ marginTop: "20px" }}>
                                        <button
                                            className="btn"
                                            style={{
                                                border: "2px solid #0d6efd",
                                                color: "#0d6efd",
                                                backgroundColor: "transparent",
                                                fontWeight: "bold",
                                                padding: "12px 0",
                                                fontSize: "1rem",
                                            }}
                                            type="button"
                                            onClick={handleButtonClick}
                                        >
                                            + Adicionar ou criar
                                        </button>

                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            style={{ display: "none" }}
                                            onChange={handleFileSelect}
                                            accept=".pdf"
                                        />

                                        <button
                                            className="btn btn-primary"
                                            style={{
                                                fontWeight: "bold",
                                                padding: "12px 0",
                                                fontSize: "1rem",
                                            }}
                                            type="button"
                                            onClick={() => setStatus("Concluído")}
                                        >
                                            Marcar como concluído
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* CARD DE ARQUIVOS RECEBIDOS */}
                            <div
                                className="card"
                                style={{ padding: "20px", minHeight: "280px", borderRadius: "10px" }}
                            >
                                <div className="card-body">
                                    <h4 className="card-title" style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                                        Arquivos Recebidos
                                    </h4>

                                    {arquivoRecebido.length > 0 ? (
                                        arquivoRecebido.map((arquivo, index) => (
                                            <div
                                                key={index}
                                                style={{
                                                    marginBottom: "10px",
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center"
                                                }}
                                            >
                                                <a
                                                    href="#"
                                                    style={{
                                                        color: "#0d6efd",
                                                        textDecoration: "underline",
                                                        fontSize: "0.95rem",
                                                        wordBreak: "break-word",
                                                        flex: 1
                                                    }}
                                                >
                                                    {arquivo}
                                                </a>

                                                <button
                                                    // onClick={}  Função que você pode criar para excluir
                                                    style={{
                                                        backgroundColor: "transparent",
                                                        border: "none",
                                                        cursor: "pointer"
                                                    }}
                                                    title="Excluir arquivo"
                                                >
                                                    <CiTrash size={20} color="red" />
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <p style={{ fontSize: "0.95rem", color: "#777" }}>
                                            Nenhum arquivo recebido ainda.
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="d-flex justify-content-end ">
                                <button
                                    style={{
                                        padding: "10px 20px",
                                        fontSize: "14px",
                                        borderRadius: "8px",
                                        border: "none",
                                        backgroundColor: "#4a90e2",
                                        color: "white",
                                        fontWeight: "600",
                                        boxShadow: "0 4px 10px rgba(74,144,226,0.4)",
                                        cursor: "pointer",
                                        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                                        marginBottom: "0"
                                    }}
                                >
                                    Salvar Atividade
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AtividadeOrientador;
