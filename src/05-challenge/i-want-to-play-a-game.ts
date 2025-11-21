export default function changeLock(current: string, target: string): number {
  const currentDigits = [...current].map(Number)
  const targetDigits = [...target].map(Number)
  let change = 0

  currentDigits.forEach((digit, idx) => {
    const targetDigit = Number(targetDigits[idx])
    const diff = Math.abs(digit - targetDigit)
    change += Math.min(diff, 10 - diff)
  })

  return change
}
