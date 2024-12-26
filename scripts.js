// Function to create a grid with given number of rows and columns
function createGrid(rows, columns) {
    const container = document.getElementById("grid-container");
    
    // Clear any existing grid
    container.innerHTML = '';
    
    // Create the grid cells
    for (let i = 0; i < rows * columns; i++) {
      const cell = document.createElement("div");
      
      // Add mouseover event listener to each cell
      cell.addEventListener("mouseover", () => {
        cell.classList.add("black");  // Apply the 'black' class (color black)
      });
  
      container.appendChild(cell);
    }
  }

  // Function to reset the grid
function resetGrid() {
    const cells = document.querySelectorAll("#grid-container div");
    cells.forEach(cell => {
      cell.classList.remove("black"); // Remove the black color (reset to lightgray)
    });
  }
  
// Create a 16x16 grid
createGrid(16, 16);
  
const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click", resetGrid);