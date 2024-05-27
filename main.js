document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    if (nome.trim() === '' || telefone.trim() === '') {
        alert('Por favor, preencha ambos os campos.');
        return;
    }

    if (telefone.length !== 9) {
        alert('O telefone deve ter exatamente 9 dígitos.');
        return;
    }

    const table = document.getElementById('form-contatos').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        const cellNome = rows[i].getElementsByTagName('td')[0];
        const cellTelefone = rows[i].getElementsByTagName('td')[1];
        if (cellNome.textContent === nome) {
            alert('Este nome já existe. Por favor, insira um nome diferente.');
            return;
        }
        if (cellTelefone.textContent === telefone) {
            alert('Este telefone já está sendo usado por outro contato.');
            return;
        }
    }

    const newRow = table.insertRow();

    const celularNome = newRow.insertCell(0);
    const celularTelefone = newRow.insertCell(1);

    celularNome.textContent = nome;
    celularTelefone.textContent = telefone;


    document.getElementById('contactForm').reset();
});