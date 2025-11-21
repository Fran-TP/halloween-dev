export default function surviveRoulette(n: number, k: number): number {
  const wrap = (index: number, length: number): number => {
    return index % length
  }

  const victims = Array.from({ length: n }, (_, i) => i)
  let lastIdx = 0

  while (victims.length > 1) {
    lastIdx += k - 1
    const victimIdx = wrap(lastIdx, victims.length)

    victims.splice(victimIdx, 1)
    lastIdx = victimIdx
  }

  return Number(victims[0])
}
