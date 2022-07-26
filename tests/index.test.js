const pegarArquivo = require("../index.js");

const arrayDeLinkSemStatus = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  },
];

describe("pegarArquivo:", () => {
  it("Deve ser uma função", () => {
    expect(typeof pegarArquivo).toBe("function");
  });
  it("Deve retornar array com resultados", async () => {
    const response = await pegarArquivo("./tests/arquivos/texto1.md");
    expect(response).toEqual(arrayDeLinkSemStatus);
  });
  it('Deve retornar mensagem "não há links"', async () => {
    const response = await pegarArquivo("./tests/arquivos/texto1_semlinks.md");
    expect(response).toEqual("não há links");
  });
});
