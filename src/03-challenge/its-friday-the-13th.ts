export default function myersCalendar(year: number): string[] {
  if (String(year).length !== 4) return []

  const spookyDate = new Date(year, 9, 31)
  const dates: Date[] = [spookyDate]

  for (let i = 0; i < 12; i++) {
    const date = new Date(year, i, 13)

    if (date.getDay() === 5) {
      dates.push(date)
    }
  }

  const formattedDates = dates
    .toSorted((a, b) => a.getTime() - b.getTime())
    .map(date => {
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const day = date.getDate().toString().padStart(2, '0')
      return `${date.getFullYear()}-${month}-${day}`
    })

  return formattedDates
}
