function createGrid(rows, columns) {
    const container = document.getElementById("grid-container");
    
    // Clear any existing grid
    container.innerHTML = '';
    
    // Create the grid cells
    for (let i = 0; i < rows * columns; i++) {
      const cell = document.createElement("div");
      container.appendChild(cell);
    }
  }
  
  // Create a 16x16 grid
  createGrid(16, 16);