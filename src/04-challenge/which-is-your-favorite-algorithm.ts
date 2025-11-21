export default function searchPhone(phones: number[], target: number): number {
  let left = 0
  let right = phones.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const currentPhone = Number(phones[mid])

    if (currentPhone === target) return mid

    if (Number(currentPhone) < target) {
      left = mid + 1
    } else {
      right = right - 1
    }
  }

  return -1
}
