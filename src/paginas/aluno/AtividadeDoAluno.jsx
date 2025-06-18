import React, { useRef, useState } from "react";
import NavBar from "../../componentes/NavBar";
import { CiTrash } from "react-icons/ci";

const AdicionarTrabalhoDoTcc = () => {
    const [fileName, setFileName] = useState("");
    const [fileURL, setFileURL] = useState("");

    const fileInputRef = useRef(null);//Aqui vou criar uma referencia para um elemento HTMl, ela vai apontar para o input 

    function handleFileSelect(event) {
        const files = event.target.files;// vai pegar os usuarios selecionado. files é uma lista co os arquivos selecioando
        if (files.length > 0) {
            setFileName(files[0].name);
            setFileURL(URL.createObjectURL(files[0]));  // Cria uma URL temporária para o navegador abrir
        }

        console.log("Arquivos selecionados:", files);
    }

    function handleButtonClick() {
        fileInputRef.current.click();
    }

    function handleCancel() {
        setFileName(null);
        setFileURL(null);
        fileInputRef.current.value = null;  // Limpa o input file
    }

    return (
        <>
            <div className="d-flex justify-content-center bg-light" style={{ padding: "60px 20px" }}>
                <div
                    className="card shadow p-4 w-100"
                    style={{
                        maxWidth: "1100px",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "12px",
                    }}
                >
                    <NavBar />

                    <div
                        className="d-flex flex-wrap justify-content-center"
                        style={{ maxWidth: "1100px", margin: "0 auto", gap: "20px" }}
                    >
                        {/* CARD GRANDE */}
                        <div
                            className="card mb-3 flex-grow-1"
                            style={{
                                minWidth: "300px",
                                flex: "1 1 650px",
                                padding: "20px",
                                borderRadius: "10px",
                            }}
                        >
                            <div className="card-body">
                                <div className="d-flex justify-content-between flex-wrap">
                                    <h4 className="card-title" style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                                        Nome da atividade
                                    </h4>
                                    <p style={{ margin: 0, fontSize: "16px", color: "#555", fontWeight: "bold" }}>
                                        Data de entrega: 23:59
                                    </p>
                                </div>

                                <hr style={{ border: "1px solid black", margin: "15px 0 25px 0" }} />

                                <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                                    <strong>COMO FAZER?</strong> Componham equipes considerando os softwares definidos nas disciplinas de Projeto I e Projeto II, que possuam features (mesmo que em parte) funcionais e viáveis para avaliação de usabilidade.
                                    <br />
                                    Faça a imersão no produto considerando features a serem categorizadas com a técnica de <strong>CARD SORTING</strong>. Em seguida, descreva jornadas do usuário com a técnica de <strong>JOURNEY MAP</strong>, a fim de revelar armadilhas e momentos importantes do usuário na interação ou experiência com o produto.
                                </p>

                                <div className="mb-3 mt-4" style={{ maxWidth: "650px", fontWeight: "bold" }}>
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{ fontSize: "20px" }}>
                                        Adicionar comentário
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="5"
                                        placeholder="Adicione um comentário"
                                        style={{ fontSize: "1rem" }}
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* CARD PEQUENO */}
                        <div
                            className="card"
                            style={{
                                width: "350px",
                                minHeight: "280px", // altura menor que o card principal
                                alignSelf: "flex-start",
                                padding: "20px",
                                flexShrink: 0, // impede de diminuir demais
                            }}
                        >
                            <div className="card-body">
                                <h4 className="card-title" style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                                    Seu trabalho
                                </h4>

                                {/* Conteúdo do arquivo */}
                                {fileName && (
                                    <div className="mt-3 d-flex ">
                                        <p><strong>Arquivo selecionado:</strong></p>
                                        <a
                                            href={fileURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: "block",
                                                marginBottom: "10px",
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
                                                fontWeight: "bold",
                                                fontSize: "18px",
                                                cursor: "pointer",
                                                padding: "0",
                                                lineHeight: "1",
                                                marginBottom: "18px"
                                            }}
                                        >
                                            <CiTrash size={25}/>
                                        </button>
                                    </div>
                                )}

                                {/* Botões */}
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
                                    >
                                        Marcar como concluído
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdicionarTrabalhoDoTcc;