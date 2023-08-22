const floatingForm = document.getElementById("floatingForm");
const livroSubMenu = document.querySelector(".menu ul li ul li:nth-child(2)");

livroSubMenu.addEventListener("click", () => {
  floatingForm.style.display = "block";
});

livroSubMenu.addEventListener("click", () => {
  floatingForm.style.display = "block";
});

const confirmButton = document.getElementById("confirmButton");
const cancelButton = document.getElementById("cancelButton");
const bookForm = document.getElementById("bookForm");
const bookTableBody = document.querySelector(".book-table tbody");

confirmButton.addEventListener("click", () => {
  const codigo = document.getElementById("codigo").value;
  const titulo = document.getElementById("titulo").value;
  const quantidadeDisponivel = document.getElementById("quantidadeDisponivel").value;
  const quantidadeTotal = document.getElementById("quantidadeTotal").value;
  const anoPublicacao = document.getElementById("anoPublicacao").value;
  const autor = document.getElementById("autor").value;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Excluir";
  deleteButton.addEventListener("click", () => {
    row.remove();
  });

  // Adicionar os dados à tabela
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${codigo}</td>
    <td>${titulo}</td>
    <td>${quantidadeDisponivel}</td>
    <td>${quantidadeTotal}</td>
    <td>${anoPublicacao}</td>
    <td>${autor}</td>
  `;
  bookTableBody.appendChild(newRow);

  // Limpar campos do formulário
  bookForm.reset();

  // Esconder a div flutuante
  floatingForm.style.display = "none";
});

cancelButton.addEventListener("click", () => {
  // Limpar campos do formulário
  bookForm.reset();

  // Esconder a div flutuante
  floatingForm.style.display = "none";
});

// Função para criar botões de edição e exclusão
function createRowButtons(row) {
  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.addEventListener("click", () => {
    const cells = row.querySelectorAll("td");
    document.getElementById("codigo").value = cells[0].textContent;
    document.getElementById("titulo").value = cells[1].textContent;
    document.getElementById("quantidadeDisponivel").value = cells[2].textContent;
    document.getElementById("quantidadeTotal").value = cells[3].textContent;
    document.getElementById("anoPublicacao").value = cells[4].textContent;
    document.getElementById("autor").value = cells[5].textContent;
    floatingForm.style.display = "block";
  });

  
 

  const cell = document.createElement("td");
  cell.appendChild(editButton);
  cell.appendChild(deleteButton);
  return cell;
}

livroSubMenu.addEventListener("click", () => {
  floatingForm.style.display = "block";
});

confirmButton.addEventListener("click", () => {
  const codigo = document.getElementById("codigo").value;
  const titulo = document.getElementById("titulo").value;
  const quantidadeDisponivel = document.getElementById("quantidadeDisponivel").value;
  const quantidadeTotal = document.getElementById("quantidadeTotal").value;
  const anoPublicacao = document.getElementById("anoPublicacao").value;
  const autor = document.getElementById("autor").value;

  // Adicionar os dados à tabela
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${codigo}</td>
    <td>${titulo}</td>
    <td>${quantidadeDisponivel}</td>
    <td>${quantidadeTotal}</td>
    <td>${anoPublicacao}</td>
    <td>${autor}</td>
  `;

  const actionsCell = createRowButtons(newRow);
  newRow.appendChild(actionsCell);

  bookTableBody.appendChild(newRow);

  // Limpar campos do formulário
  bookForm.reset();

  // Esconder a div flutuante
  floatingForm.style.display = "none";
});

cancelButton.addEventListener("click", () => {
  // Limpar campos do formulário
  bookForm.reset();

  // Esconder a div flutuante
  floatingForm.style.display = "none";
});