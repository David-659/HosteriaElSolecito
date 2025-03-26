let currentMonthIndex = new Date().getMonth();
        let currentYear = new Date().getFullYear();
        let selectedDays = [];
        let costoBasePorPersona = 130.000; 

        const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const unavailableDaysByMonth = {
            0: [1, 15, 20],
            1: [10, 14, 28],
            2: [5, 12, 25],
            3: [4, 18, 30],
            4: [1, 8, 19],
            5: [10, 15, 20],
            6: [7, 14, 21],
            7: [2, 18, 29],
            8: [5, 11, 24],
            9: [9, 16, 31],
            10: [6, 13, 20],
            11: [3, 17, 25]
        };

        function daysInMonth(month, year) {
            return new Date(year, month + 1, 0).getDate();
        }

        function updateCalendar() {
            document.getElementById("month-label").innerText = `${months[currentMonthIndex]} ${currentYear}`;
            const daysContainer = document.querySelector(".days");
            daysContainer.innerHTML = "";

            const totalDays = daysInMonth(currentMonthIndex, currentYear);
            const unavailableDays = unavailableDaysByMonth[currentMonthIndex] || [];

            for (let day = 1; day <= totalDays; day++) {
                const dayElement = document.createElement("div");
                if (unavailableDays.includes(day)) {
                    dayElement.className = "day unavailable";
                } else {
                    dayElement.className = "day available";
                    dayElement.onclick = () => selectDate(dayElement, day);
                }
                dayElement.innerText = day;
                daysContainer.appendChild(dayElement);
            }
        }

        function nextMonth() {
            currentMonthIndex++;
            if (currentMonthIndex > 11) {
                currentMonthIndex = 0;
                currentYear++;
            }
            updateCalendar();
        }

        function prevMonth() {
            currentMonthIndex--;
            if (currentMonthIndex < 0) {
                currentMonthIndex = 11;
                currentYear--;
            }
            updateCalendar();
        }

        function selectDate(dayElement, day) {
            if (dayElement.classList.contains("unavailable")) return;

            if (selectedDays.length === 2) {
                resetCalendar();
            }

            selectedDays.push(day);
            selectedDays.sort((a, b) => a - b);

            const allDays = document.querySelectorAll(".day.available");
            if (selectedDays.length === 2) {
                const [start, end] = selectedDays;
                allDays.forEach(dayEl => {
                    const dayNumber = parseInt(dayEl.innerText, 10);
                    if (dayNumber >= start && dayNumber <= end) {
                        dayEl.classList.add("selected");
                    }
                });
            } else {
                dayElement.classList.add("selected");
            }

            document.getElementById("reserve-button").disabled = selectedDays.length !== 2;
        }

        function resetCalendar() {
            const days = document.querySelectorAll(".day");
            days.forEach(day => day.classList.remove("selected"));
            selectedDays = [];
        }

        function reserve() {
            if (selectedDays.length === 2) {
                document.getElementById("reservation-modal").style.display = "block";
            } else {
                const errorMessage = document.querySelector(".error-message");
                errorMessage.innerText = "Por favor, seleccione dos días.";
                errorMessage.style.display = "block";
            }
            const tarjetaSelect = document.getElementById('tarjetaSelect');
            const cards = document.querySelectorAll('.card');

            // Escuchamos el evento 'change' para detectar cuando se cambia la opción del select
            tarjetaSelect.addEventListener('change', (e) => {
            // Valor seleccionado en el <select>
                const selectedValue = e.target.value;

                // Recorremos cada tarjeta y la mostramos/ocultamos según la opción elegida
                cards.forEach((card, index) => {
                    if (index == selectedValue) {
                    card.classList.add('active');
                    } else {
                    card.classList.remove('active');
                    }
                });
            });
        }

        function confirmReservation() {
        const numPersonas = parseInt(document.getElementById("num-personas").value, 10);
        const tipoHabitacion = document.getElementById("tipo-habitacion").value;
        const costoTotal = numPersonas * costoBasePorPersona;
        
        const [start, end] = selectedDays;
        const successMessage = document.querySelector(".success-message");
        
        successMessage.innerHTML = `Reserva confirmada del ${start} al ${end}.<br>
                                    Tipo de Habitación: ${tipoHabitacion}.<br>
                                    Número de Personas: ${numPersonas}.<br>
                                    Costo Total: $${costoTotal}.<br><br>
                                    ¿Quieres hablar con un asesor?<br>
                                    <a class="link" href="https://wa.me/0000000000" target="_blank" style="">Click aqui</a>`;
        
        successMessage.style.display = "block";
            

            closeModal();
            resetCalendar();
            document.getElementById("reserve-button").disabled = true;
        }

        function closeModal() {
            document.getElementById("reservation-modal").style.display = "none";
        }

        window.onload = function() {
            updateCalendar();
        };

        