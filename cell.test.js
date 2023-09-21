const Cell = require('./cell')

const evolve = (cellStatus, livingNeighborNumber) => {
  const livingCell = new Cell(cellStatus)
  return livingCell.evolve(livingNeighborNumber)
}

describe(`Living cells should die when less than 2 living cells around`, () => {
  test(`should die when no living cells around`, () => {
    const evolvedStatus = evolve('living', 0)
    expect(evolvedStatus).toBe('dead')
  })

  test(`should die when 1 living cell around`, () => {
    const evolvedStatus = evolve('living', 1)
    expect(evolvedStatus).toBe('dead')
  })
})

describe(`Living cells should survive when 2 or 3 living cells around`, () => {
  test(`should survive when 2 living cells around`, () => {
    const evolvedStatus = evolve('living', 2)
    expect(evolvedStatus).toBe('living')
  })

  test(`should survive when 3 living cells around`, () => {
    const evolvedStatus = evolve('living', 3)
    expect(evolvedStatus).toBe('living')
  })
})

describe(`Living cells should die when more than 3 living cells around `, () => {
  test(`should die when 4 living cells around`, () => {
    const evolvedStatus = evolve('living', 4)
    expect(evolvedStatus).toBe('dead')
  })

  test(`should die when 8 living cells around`, () => {
    const evolvedStatus = evolve('living', 8)
    expect(evolvedStatus).toBe('dead')
  })
})

test(`Dead cells should resurrect when 3 living cells around`, () => {
  const evolvedStatus = evolve('dead', 3)
  expect(evolvedStatus).toBe('living')
})

describe(`Dead cells keep dying when there're not 3 living cells around`, () => {
  test(`keep dying when no living cells around`, () => {
    const evolvedStatus = evolve('dead', 0)
    expect(evolvedStatus).toBe('dead')
  })

  test(`keep dying when 8 living cells around`, () => {
    const evolvedStatus = evolve('dead', 8)
    expect(evolvedStatus).toBe('dead')
  })
})
