function countSheep(letters: string): number {
  const validChars = new Map([...'sheep'].map(char => [char, 0]))

  const countedChars = [...letters].reduce((acc, char) => {
    if (!validChars.has(char)) {
      return acc
    }

    acc.set(char, (acc.get(char) ?? 0) + 1)

    return acc
  }, validChars)

  console.log({countedChars})

  const validCount = countedChars.entries().map(
    ([char, count]) => Math.floor(char === 'e' ? count / 2 : count)
  )

  return Math.min(
    ...validCount
  )
}

console.log(
  countSheep('sheepxsheepy'),
  countSheep('hola'),
  Math.min(...[]),
  Object.values({} as Record<string, number>) ?? 0
)
