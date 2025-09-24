// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Estado: lista de participantes
const participantes = [];
const limpiar = (s) => s.replace(/\s+/g, " ").trim();
function renderLista(){
  list.innerHTML = "";
  for(let i=0;i<participantes.length;i++){
    const li = document.createElement("li");
    li.textContent = participantes[i];
    list.appendChild(li);
  }
}

function agregarNombre(){
  const nombre = limpiar(input.value);
  if(!nombre){
    alert("Ingresar un nombre válido");
    return;
  }
  participantes.push(nombre);
  input.value = "";
  result.textContent = "";
  renderLista();
  input.focus();
}

function sortear(){
  if(participantes.length === 0){
    alert("Agrega al menos un nombre para sortear");
    return;
  }
  const idx = Math.floor(Math.random() * participantes.length);
  const ganador = participantes[idx];
  result.textContent = `🎉 Amigo secreto: ${ganador}`;
}