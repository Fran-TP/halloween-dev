function countSheep(letters: string): number {
  const VALID_CHARS = ['s', 'h', 'e', 'p']
  const initialCount = {
    s: 0,
    h: 0,
    e: 0,
    p: 0
  }

  const countedChars = [...letters].reduce((acc, char) => {
    if (!VALID_CHARS.includes(char)) {
      return acc
    }

    acc[char as keyof typeof acc]++

    return acc
  }, initialCount)

  countedChars.e /= 2

  return Math.floor(Math.min(...Object.values(countedChars)))
}

console.log(
  countSheep('sheepxsheepy'),
  countSheep('hola'),
  Math.min(...[]),
  Object.values({} as Record<string, number>) ?? 0
)
