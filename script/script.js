var data = new Date('Dec 25, 2021 00:00:00').getTime()

function christmas() {
   var momento = new Date().getTime()
      gap = data - momento

   var segundos = 1000
   var minutos = segundos * 60

   var horas = minutos * 60
   var dias = horas * 24 

   
   var dd = Math.floor(gap / (dias))
   var hh = Math.floor((gap % (dias)) / (horas))

   var mm = Math.floor((gap % (horas)) / (minutos))
   var ss = Math.floor((gap % (minutos)) / segundos)
   
   if (mm <= 9 && hh >= 10) {
      document.querySelector('.tempo').innerHTML = `${dd}:${hh}:0${mm}`
   }

   else if (hh <= 9 && mm >= 10) {
      document.querySelector('.tempo').innerHTML = `${dd}:0${hh}:${mm}`
   }

   else if (hh <= 9 && mm <= 9) {
      document.querySelector('.tempo').innerHTML = `${dd}:0${hh}:0${mm}`
   }

   else if (hh >= 10 && mm >= 10) {
      document.querySelector('.tempo').innerHTML = `${dd}:${hh}:${mm}`
   }

   if (ss <= 9) {
      document.querySelector('.segundos').innerHTML = `0${ss}`
   }

   else {
      document.querySelector('.segundos').innerHTML = `${ss}`
   }
}

setInterval(function() {
   christmas()
}, 1000)