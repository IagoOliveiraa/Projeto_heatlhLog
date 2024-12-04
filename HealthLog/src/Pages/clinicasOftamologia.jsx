export default function ClinicaOftamologia() {
    const clinicas = [
        {
            id: 1,
            nome: 'Clínica Saúde',
            imagem: '../assets/img/clinicaOfta2.jpeg',
            horarioFuncionamento: {
                segunda: '08:00 - 18:00',
                terca: '08:00 - 18:00',
                quarta: '08:00 - 18:00',
                quinta: '08:00 - 18:00',
                sexta: '08:00 - 18:00',
                sabado: '08:00 - 18:00',
            },
            especialidades: ['Oftalmologia'],
            endereco: 'Rua das Flores, 123',
            telefone: '(11) 1234-5678',
        },

        {
            id: 2,
            nome: 'Clínica olhos bonitos',
            imagem: '../assets/img/clinicaOfta2.jpeg',
            horarioFuncionamento: {
                segunda: '08:00 - 18:00',
                terca: '08:00 - 18:00',
                quarta: '08:00 - 18:00',
                quinta: '08:00 - 18:00',
                sexta: '08:00 - 18:00',
                sabado: '08:00 - 18:00',
            },
            especialidades: ['Oftalmologia'],
            endereco: 'Rua das Flores, 123',
            telefone: '(11) 1234-5678',
        },

        {
            id: 3,
            nome: 'Clínica olhos brilhantes',
            imagem: '../assets/img/clinicaOfta2.jpeg',
            horarioFuncionamento: {
                segunda: '08:00 - 18:00',
                terca: '08:00 - 18:00',
                quarta: '08:00 - 18:00',
                quinta: '08:00 - 18:00',
                sexta: '08:00 - 18:00',
                sabado: '08:00 - 18:00',
            },
            especialidades: ['Oftalmologia'],
            endereco: 'Rua das Pedras, 123',
            telefone: '(11) 1234-5678',
        },

    ];
    return (
        <h1>
            <>
                <section>
                    <h2>Clinicas Oftamológicas</h2>

                    <div>
                        {clinicas.map(clinica => (
                            <div key={clinica.id} onClick={() => handleClinicaClick(clinica)}>
                                <img src={clinica.imagem} alt={clinica.nome} />
                                <h3>{clinica.nome}</h3>
                                <button>Escolher clinica</button>
                            </div>
                        ))}
                        {/* Botão de pagamento ou modal para finalizar a compra */}
                    </div>
                </section>
            </>
        </h1>
    )
}