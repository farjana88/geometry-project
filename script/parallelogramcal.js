function calculateParallelogramArea(){
    const calculateParallelogramArea = document.getElementById('parallelogram-base');
    const calculateParallelogramText = calculateParallelogramArea.value;
    const base = parseFloat(calculateParallelogramText);

    const parallelogramHeightArea = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightArea.value;
    const height = parseFloat(parallelogramHeightText);


    const area = base * height;
    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = area;
}