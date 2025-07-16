import dayjs from "dayjs";
import { schedulesNew } from "../../services/schedule-new";
import { fetchByDay } from "../../services/schedules-by-day";

const form = document.querySelector("form")

const inputName = document.getElementById("name")
const inputPetName = document.getElementById("pet")
const inputPhone = document.getElementById("phone")
const inputDescription = document.getElementById("description")

const selectedDate = document.getElementById("new-schedule-date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday
selectedDate.min = inputToday

const selectedHour = document.getElementById("new-schedule-hour")

//Tratando o numero de telefone
inputPhone.addEventListener("input", function (e) {
  //Remove tudo que não for numero
  let valor = e.target.value.replace(/\D/g, "")
  //Limita o tamanho do numero até 11 dígitos
  if (valor.length > 11) valor = valor.slice(0, 11);
  //Adiciona parenteses nos dois primeiros dígitos DDD
  if (valor.length >= 2) {
    valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
  }
  //Adiciona o traço antes dos últimos quatro dígitos
  if (valor.length >= 10) {
    valor = `${valor.slice(0, 10)}-${valor.slice(10)}`;
  }

  e.target.value = valor;
})



form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    const [name, pet, phone, description, date, hour] = [
      inputName.value.trim(),
      inputPetName.value.trim(),
      inputPhone.value.trim(),
      inputDescription.value,
      selectedDate.value,
      selectedHour.value
    ]

    const id = new Date().getTime().toString()
    await schedulesNew({ id, name, pet, phone, description, date, hour })

    inputName.value = ""
    inputPetName.value = ""
    inputPhone.value = ""
    inputDescription.value = ""
    selectedHour.selectedIndex = 0

    
    //Atualiza a exibição das listas
    fetchByDay()

  } catch (error) {
    alert("Não foi possível realizar o agendamento!")
  }

}