// insertion sort with GUI

// start insertion sort
let arrayToBeSort = [];

// add element to array by click enter button
addToArray.addEventListener('click',_=>{
    let element = Number(enterElement.value);
    if(!Number.isNaN(element)) {
        arrayToBeSort.push(element);
        console.log(arrayToBeSort);
        let arrayToDisplay = arrayToBeSort.join();
        displayArray.innerHTML = arrayToDisplay;
    }
    enterElement.value = "";
});

// add element to array by click enter key
enterElement.addEventListener('keydown',e => {
    if(e.key === 'Enter') {
        let element = Number(enterElement.value);
        if(!Number.isNaN(element)) {
            arrayToBeSort.push(element);
            console.log(arrayToBeSort);
            let arrayToDisplay = arrayToBeSort.join();
            displayArray.innerHTML = arrayToDisplay;
        }
        enterElement.value = "";
    }
});

// clear all array elements
clearArray.addEventListener('click',_=>{
    arrayToBeSort = [];
    let textToDisplay = "Array";
    displayArray.innerHTML = textToDisplay;
    console.log(arrayToBeSort);
    sortedArray.value = 'Result';
});

// insertion sort descending
function descendingInsertionSort(arr) {
    for(let i = 1;i < arr.length;i++) {
        ETBS = arr[i]; // ETBS => elementToBeSorted
        EBETBS = i - 1; // ETBS => elementBeforeElementToBeSorted
        while(EBETBS >= 0 && ETBS > arr[EBETBS]) {
            arr[EBETBS + 1] = arr[EBETBS];
            EBETBS -= 1;
        }
        arr[EBETBS + 1] = ETBS;
    }
    return arr;
}

// insertion sort asscending
function asscendingInsertionSort(arr) {
    for(let i = 1;i < arr.length;i++) {
        ETBS = arr[i]; // ETBS => elementToBeSorted
        EBETBS = i - 1; // ETBS => elementBeforeElementToBeSorted
        while(EBETBS >= 0 && ETBS < arr[EBETBS]) {
            arr[EBETBS + 1] = arr[EBETBS];
            EBETBS -= 1;
        }
        arr[EBETBS + 1] = ETBS;
    }
    return arr;
}

// display descending sorted array
descendingSortArray.addEventListener('click',_=>{
    let DisplaySortedArray = descendingInsertionSort(arrayToBeSort);
    console.log(DisplaySortedArray.join());
    sortedArray.innerHTML = DisplaySortedArray.join();
});

// display asscending sorted array
asscendingSortArray.addEventListener('click',_=>{
    let DisplaySortedArray = asscendingInsertionSort(arrayToBeSort);
    console.log(DisplaySortedArray.join());
    sortedArray.innerHTML = DisplaySortedArray.join();
});







// end insertion sort