export default function surviveRoulette(n: number, k: number): number {
  const victims = Array.from({ length: n }, (_, i) => i)
  let lastIdx = 0

  while (victims.length > 1) {
    lastIdx += k - 1
    const victimIdx = lastIdx % victims.length

    victims.splice(victimIdx, 1)
    lastIdx = victimIdx
  }

  return victims[0]!
}
