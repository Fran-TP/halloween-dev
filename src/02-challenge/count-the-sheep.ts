export default function countSheep(letters: string): number {
  const validChars = new Set('sheep')

  const countedChars = [...letters]
    .filter(char => validChars.has(char))
    .reduce(
      (acc, char) => {
        acc[char] ??= 0
        acc[char]++

        return acc
      },
      {} as Record<string, number>
    )

  const populatedMissingChars = { s: 0, h: 0, e: 0, p: 0, ...countedChars }
  const normalizeCount = Object.entries(populatedMissingChars).map(
    ([char, count]) => Math.floor(char === 'e' ? count / 2 : count)
  )

  return Math.min(...normalizeCount)
}
