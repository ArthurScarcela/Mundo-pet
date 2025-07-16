import { apiConfig } from "./api-config"


const newSchedule = document.querySelectorAll(".new-schedule")
const bgTransparent = document.getElementById("background-transparent")
const formContainer = document.getElementById("form-container")

// Função para exibir o modal e o blur de fundo
const setVisibility = (element, zIndex, animations) => {
  element.style.visibility = "visible";
  element.style.zIndex = zIndex;
  element.classList.add(animations)
}
// Função para fechar o modal e o blur
const setVisibilityOff = (element, animations) => {
  element.style.visibility = "hidden";
  element.classList.remove(animations)
}

// Disparando a função de exibir o modal com um click
newSchedule.forEach(btn => {
  btn.addEventListener('click', () => {
   setVisibility(bgTransparent, "1")
   setVisibility(formContainer, "2", "show")
   setVisibilityOff(btn)
 })
})


// Disparando a função de fechar o modal com um click
bgTransparent.addEventListener('click', () => {
  setVisibilityOff(bgTransparent)
  setVisibilityOff(formContainer, "show")
  newSchedule.forEach(btn => {
    setVisibility(btn)
  })
})

export async function schedulesNew({ id, name, pet, phone, description, date, hour }) {
  try {

    if (!name || !pet || !phone || !description || !date || !hour) {
      throw new Error("Preencha todos os campos!")
    }



    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, name, pet, phone, description, date, hour })
    })

    alert("Agendamento realizado!")
  } catch (error) {
    console.log(error)
    alert(error.message)
  }
}