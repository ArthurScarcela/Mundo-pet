
import { openingHours } from "../../utils/opening-hours";
import { apiConfig } from "../../services/api-config";

const hoursSelector = document.getElementById("new-schedule-hour")

export async function hoursLoad(date) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules?date=${date}`)
    const data = await response.json()

    // Mapeia todo o data(nossa api) e para cada item que for encontrado, recebera a atribuição busy e retornará os items que tem hora ocupada naquela data
    const unavailableTimes = data.map(busy => busy.hour)

    // Em seguida, é removido os horários ocupados do array de horas, ou seja, será exibido todos, exceto os que estão no unavailableTimes
    const availableTimes = openingHours.filter(free => !unavailableTimes.includes(free))

    //Limpando os campos anteriores
    hoursSelector.innerHTML = ""

    //Adiciona um placeholder no select
    const placeholderOption = document.createElement("option")
    placeholderOption.innerText = "Selecione",
    placeholderOption.className ="placeholderOption"
    placeholderOption.disabled = true
    placeholderOption.selected = true
    hoursSelector.append(placeholderOption)

    // Para cada item válido, será criado um option exibindo os horários disponíveis
    availableTimes.forEach((hour) => {
      
      const freeHour = document.createElement("option")
      freeHour.innerText = hour
      
      hoursSelector.append(freeHour)
    })
    
  } catch (error) {
    console.log(error)
    alert("Erro ao carregar os horários disponíveis")
    return[]
  }
}
