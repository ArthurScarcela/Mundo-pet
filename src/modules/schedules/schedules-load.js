import { fetchByDay } from "../../services/schedules-by-day.js"
import dayjs from "dayjs"


const inputDate = document.getElementById("date-input")
const today = dayjs(new Date()).format("YYYY-MM-DD").toString()

window.addEventListener("DOMContentLoaded", () => {
  inputDate.value = today

  if (today) {
    fetchByDay(today)
  }
})


inputDate.onchange = async () => {
  try {
    const date = inputDate.value
    fetchByDay(date)

  } catch (error) {
    console.log(error)
    alert("Não foi possível carregar os agendamentos da data especificada")
  }
}


