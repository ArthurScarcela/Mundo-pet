import { scheduleCancel } from "../../services/schedule-cancel";
import { fetchByDay } from "../../services/schedules-by-day";

const scheduleLists = document.querySelectorAll(".schedule-list")
const selectedDate = document.getElementById("date-input")

scheduleLists.forEach((period) => {
  period.addEventListener("click", async(event) => {
    if(event.target.classList.contains("remove")){
      const item = event.target.closest("li")

      const { id } = item.dataset
      
      if (id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar o atendimento?")

        if(isConfirm) {
          const date = selectedDate.value
          await scheduleCancel({ id })
          await fetchByDay(date)
        }
      }
    }
    
  })
})

