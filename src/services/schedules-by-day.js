import dayjs from "dayjs";
import { apiConfig } from "./api-config";

const morningList = document.getElementById("morning-list")
const afternoonList = document.getElementById("afternoon-list")
const nightList = document.getElementById("night-list")


export async function fetchByDay(dateSelected) {

  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`)
    const data = await response.json()

    const dailySchedules = data.filter((schedule) => dayjs(dateSelected).isSame(schedule.date, "day"))

    morningList.innerHTML = ""
    afternoonList.innerHTML = ""
    nightList.innerHTML = ""


    dailySchedules.forEach((schedule) => {

      const scheduleItem = document.createElement("li")
      scheduleItem.className = "schedule-info"
      scheduleItem.dataset.id = schedule.id

      const scheduleHour = document.createElement("span")
      scheduleHour.className = "list-hour"

      const scheduleName = document.createElement("p")
      scheduleName.className = "list-name"

      const scheduleDescription = document.createElement("p")
      scheduleDescription.className = "list-description"

      const scheduleRemove = document.createElement("span")
      scheduleRemove.className = "list-remove"

      const remove = document.createElement("span")
      remove.className = "remove"


      scheduleHour.innerText = `${schedule.hour}`
      scheduleName.innerHTML = `<strong>${schedule.pet}</strong> / ${schedule.name}`
      scheduleDescription.innerText = `${schedule.description}`
      remove.innerText = "Remover agendamento"

      scheduleRemove.append(remove)

      scheduleItem.append(scheduleHour, scheduleName, scheduleDescription, scheduleRemove)

      // convertendo o horário do array em numero para comparar no if
      const convertedHour = parseInt(schedule.hour)

      if (convertedHour >= 9 && convertedHour < 12) {
        morningList.append(scheduleItem)
      }

      if (convertedHour > 12 && convertedHour <= 18) {
        afternoonList.append(scheduleItem)
      }

      if (convertedHour > 18 && convertedHour <= 21) {
        nightList.append(scheduleItem)
      }

    })


  } catch (error) {
    alert("Erro ao buscar os atendimentos!")
    console.log(error)
  }
}
