document.addEventListener('DOMContentLoaded', function() {
    const calendarGrid = document.getElementById('calendar-grid');
    const resetButton = document.getElementById('reset-button');
    const year = new Date().getFullYear();
    const months =;
    
    // Statuses: 0: Default, 1: Workout, 2: Rest, 3: Missed
    const statuses = ['status-0', 'status-1', 'status-2', 'status-3'];
    let progressData = {};

    function generateCalendar() {
        calendarGrid.innerHTML = ''; // Clear existing grid

        // Create headers
        // Top-left empty cell
        const cornerCell = document.createElement('div');
        cornerCell.classList.add('grid-cell');
        calendarGrid.appendChild(cornerCell);

        // Month headers
        months.forEach(month => {
            const monthCell = document.createElement('div');
            monthCell.classList.add('grid-cell', 'month-header');
            monthCell.textContent = month;
            calendarGrid.appendChild(monthCell);
        });

        // Create day rows
        for (let day = 1; day <= 31; day++) {
            // Day label
            const dayLabelCell = document.createElement('div');
            dayLabelCell.classList.add('grid-cell', 'day-label');
            dayLabelCell.textContent = day;
            calendarGrid.appendChild(dayLabelCell);

            // Day cells for each month
            for (let month = 0; month < 12; month++) {
                const dayCell = document.createElement('div');
                dayCell.classList.add('grid-cell', 'day-cell');
                
                const daysInMonth = new Date(year, month + 1, 0).getDate();
                if (day > daysInMonth) {
                    dayCell.classList.add('invalid');
                } else {
                    const cellId = `${year}-${month}-${day}`;
                    dayCell.id = cellId;
                    dayCell.dataset.statusIndex = "0";
                    dayCell.classList.add('status-0');
                }
                calendarGrid.appendChild(dayCell);
            }
        }
    }

    function loadProgress() {
        const savedData = localStorage.getItem('fitnessProgress');
        if (savedData) {
            progressData = JSON.parse(savedData);
            for (const cellId in progressData) {
                const cell = document.getElementById(cellId);
                if (cell) {
                    const statusIndex = progressData[cellId];
                    cell.dataset.statusIndex = statusIndex;
                    cell.classList.remove(...statuses);
                    cell.classList.add(statuses[statusIndex]);
                }
            }
        }
    }

    function saveProgress() {
        localStorage.setItem('fitnessProgress', JSON.stringify(progressData));
    }

    calendarGrid.addEventListener('click', function(e) {
        if (e.target.classList.contains('day-cell') &&!e.target.classList.contains('invalid')) {
            const cell = e.target;
            let currentStatusIndex = parseInt(cell.dataset.statusIndex, 10);
            
            // Cycle to the next status
            const nextStatusIndex = (currentStatusIndex + 1) % statuses.length;
            
            // Update UI
            cell.classList.remove(statuses);
            cell.classList.add(statuses);
            cell.dataset.statusIndex = nextStatusIndex;
            
            // Update data and save
            progressData[cell.id] = nextStatusIndex;
            saveProgress();
        }
    });

    resetButton.addEventListener('click', function() {
        if (confirm('Are you sure you want to reset all your progress? This action cannot be undone.')) {
            localStorage.removeItem('fitnessProgress');
            progressData = {};
            generateCalendar(); // Regenerate to reset all cells to default
        }
    });

    // Initial setup
    generateCalendar();
    loadProgress();
});
