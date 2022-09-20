class Paciente{
    nome: string;
    idade: number;
    sexo: string;
    doenca: boolean;

    constructor(nome: string, idade: number, sexo: string, doenca: boolean) {
        this.nome= nome;
        this.idade= idade;
        this.sexo= sexo;
        this.doenca= doenca;
}

FichaPaciente(): void {
    console.log("Nome: "+ this.nome+ "\nIdade do paciente: " + this.idade+ "\nSexo do paciente: " + this.sexo + "\nDoença: " + this.doenca);
}
}
let paciente = new Paciente("Vanessa", 90, "feminino", true);
paciente.FichaPaciente();