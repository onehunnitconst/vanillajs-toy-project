const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const resetButton = document.querySelector('.reset-button');

populateUI();

var ticketPrice = +movieSelect.value;

// 선택한 영화의 좌석과 가격을 저장
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// total과 count 값을 업데이트
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    // forEach, map - return 값도 배열, 각각 계산
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');
    if (selectedMoviePrice !== ticketPrice){
        ticketPrice = +selectedMoviePrice;
    }
    
    count.innerHTML = selectedSeats.length;
    total.innerHTML = selectedSeats.length * ticketPrice;

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// 로컬 저장소로부터 데이터를 가져와 UI에 표시
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
            seat.classList.add('selected');
        }
    });
}

// 영화 선택 이벤트 리스너
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

// 좌석 선택 이벤트 리스너
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

updateSelectedCount();