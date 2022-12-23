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






















//*************************************************************************************
//*************************************************************************************
//*************************************************************************************
//*************************************************************************************





















// start prim's algorithm

// graph data structure
class Graph {
  
  constructor(numOfVertices) {
    
    // creat square matrix of number of vertices ,which contains weights 
    this.matrix = new Array(numOfVertices);
    for(let i = 0; i< this.matrix.length;i++) {
      this.matrix[i] = new Array(numOfVertices).fill(0);
    }
    
    // number of edges added
    this.edges = 0;
    
    // Array to store constructed MST
    this.parent = [];
    
    // set of vertices added
    this.setOfVertices = new Set();
    
    // maximum number of vertices
    this.numOfVertices = numOfVertices;
  }
  
  addVertix(v) {
    // check if you reach the maximum number of vertices or not
    if(this.numOfVertices - 1 >= [...this.setOfVertices].length) {
      // add the new vertix to the set of vertices
      this.setOfVertices.add(v);
    }
    else {
      console.log("you reach the maximum number of vertices");
    }
  }
  
  hasVertix(v) {
    // check if vertix inside the set of vertices
    return this.setOfVertices.has(v);
  }
  
  indexOfVertix(v) {
    // return the index of vertix
    return [...this.setOfVertices].indexOf(v);
  }
  
  addWeight(v1,v2,weight) {
    // check if v1 exist inside set of vertices
    if(!this.hasVertix(v1)) return `${v1} is not added`;
    // check if v2 exist inside set of vertices
    if(!this.hasVertix(v2)) return `${v2} is not added`;
    // check if v1 === v2 
    if(v1 === v2) return `can't be same vertix`
    // store weight
    let [a,b] = [this.indexOfVertix(v1),this.indexOfVertix(v2)]
    this.matrix[a][b] = weight;
    this.matrix[b][a] = weight;
    // increament this.edge which means that graph is no longer empty 
    this.edge += 1;
  }
  
  VertixOf(index) {
    // return vertix's index inside set of vertices
    return [...this.setOfVertices][index];
  }
  
  isEmpty() {
    // check if graph is empty
    return this.edge === 0;
  }

}


// start prim GUI

let graph = new Graph();


// on click Enter button save the number of vertices
saveNumVertices.addEventListener('click',_=> {
    let numberOfVertices = Number(enterNumVertices.value);
    if(!Number.isNaN(numberOfVertices)) {
      graph = new Graph(numberOfVertices);
    }
    enterNumVertices.disabled = true;
});

// on click Enter from keyboard save the number of vertices
enterNumVertices.addEventListener('keydown',e => {
  if(e.key === 'Enter') {
    let numberOfVertices = Number(enterNumVertices.value);
    if(!Number.isNaN(numberOfVertices)) {
      graph = new Graph(numberOfVertices);
    }
    enterNumVertices.disabled = true;
  }
});

// on click Enter button add Vertix to set of Vertices
enterVertix.addEventListener('click',_=> {
  graph.addVertix(enteredVertix.value);
  displayVerticesSet.value = [...graph.setOfVertices].join();
  console.log(graph);
  enteredVertix.value = '';
});

// on click Enter add Vertix to set of Vertices
enteredVertix.addEventListener('keydown',e => {
  if(e.key === 'Enter') {
    graph.addVertix(enteredVertix.value);
    displayVerticesSet.value = [...graph.setOfVertices].join();
    console.log(graph);
    enteredVertix.value = '';
  }
});

// clear all vertix from set
clearSetOfVertix.addEventListener('click',_=> {
  graph = new Graph(graph.numOfVertices);
  displayVerticesSet.value = 'Vertices Set';
  enterNumVertices.disabled = false;
  enterNumVertices.value = '';
  displayMST.value = 'MST';
});

// on click Enter button add weight, clear input fields, and display matrix
enterEdge.addEventListener('click',_=> {
  graph.addWeight(enterVertix1.value,
                  enterVertix2.value,
                  Number(enterWeight.value));
  enterVertix1.value = '';
  enterVertix2.value = '';
  enterWeight.value = '';
  displayMatrix.value = '';
  for(let i = 0;i<graph.numOfVertices;i++) {
    displayMatrix.value += `${graph.matrix[i]} \n`;
  }
});

clearEdges.addEventListener('click',_=> {
  graph = new Graph(graph.numOfVertices);
  displayVerticesSet.value = 'Vertices Set';
  displayMatrix.value = 'Matrix';
  enterNumVertices.disabled = false;
  enterNumVertices.value = '';
  displayMST.value = 'MST';
})

GenerateMST.addEventListener('click',_=> {
  primMST(graph);
  displayMST.value = `Edge \t Weight \n`;
  let total = 0;
  for (let i = 1; i < graph.numOfVertices; i++) {
    total += Number(graph.matrix[i][graph.parent[i]]);
    displayMST.value += `${graph.VertixOf(graph.parent[i])} - ${graph.VertixOf(i)} \t ${graph.matrix[i][graph.parent[i]]} \n`;
  }
  displayMST.value += `total \t ${total} units`;
});


// end prim GUI

function minKey(key, mstSet)
{
    // Initialize min value
    let min = Number.MAX_VALUE, min_index;
 
    for (let v = 0; v < graph.numOfVertices; v++)
        if (mstSet[v] == false && key[v] < min)
            min = key[v], min_index = v;
 
    return min_index;
}
 
// Function to construct and print MST for
// a graph represented using adjacency
// matrix representation
function primMST(graph)
{
    // check if graph is empty ,because it's no need to get MST for empty graph
    if(graph.isEmpty()) {
      return graph;
    }
  
    // define Key values used to pick minimum weight edge in cut and initialize all keys as Infinite
    let key = new Array(graph.numOfVertices).fill(Number.MAX_VALUE);
     
    // To represent set of vertices included in MST and initialize all element as false
    let mstSet = new Array(graph.numOfVertices).fill(false);
 
    // Always include first 1st vertex in MST.
    // Make key 0 so that this vertex is picked as first vertex.
    key[0] = 0;
  
    // First node is always root of MST
    graph.parent[0] = -1; 
 
    // The MST will have V vertices
    for (let count = 0; count < graph.numOfVertices - 1; count++)
    {
        // Pick the minimum key vertex from the
        // set of vertices not yet included in MST
        let u = minKey(key, mstSet);
 
        // Add the picked vertex to the MST Set
        mstSet[u] = true;
 
        // Update key value and parent index of
        // the adjacent vertices of the picked vertex.
        // Consider only those vertices which are not
        // yet included in MST
        for (let v = 0; v < graph.numOfVertices; v++) {
            // graph[u][v] is non zero only for adjacent vertices of m
            // mstSet[v] is false for vertices not yet included in MST
            // Update the key only if graph[u][v] is smaller than key[v]
            if (graph.matrix[u][v] && mstSet[v] == false && graph.matrix[u][v] < key[v])
                graph.parent[v] = u, key[v] = graph.matrix[u][v];
        }
    }
}


// end prim's algorithm