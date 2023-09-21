class Cell {
  constructor(status) {
    this.status = status
  }

  evolve(livingNeighborNumber) {
    switch (this.status) {
      case 'living': {
        return livingNeighborNumber >= 2 && livingNeighborNumber <= 3
          ? 'living'
          : 'dead'
      }
      case 'dead': {
        return livingNeighborNumber === 3 ? 'living' : 'dead'
      }

      default:
        break
    }
  }
}

module.exports = Cell
