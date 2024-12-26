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
  
  // Create a 16x16 grid
  createGrid(16, 16);
  