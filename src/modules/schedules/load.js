import { hoursLoad } from "../form/hours-load";

const dateNewSchedule = document.getElementById("new-schedule-date")

// Executa o carregamento dos horários disponíveis assim que a página carregar usando como base a data inicial(dia atual)
window.addEventListener("DOMContentLoaded", () =>{
  const initialDate = dateNewSchedule.value

  if(initialDate){
    hoursLoad(initialDate)
  }
})

// função para recarregar os horários disponíveis ao alterar a data
dateNewSchedule.onchange = () =>{
  const date = dateNewSchedule.value

  hoursLoad(date)
}
