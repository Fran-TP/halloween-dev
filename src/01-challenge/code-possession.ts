function translatePossessed(message: string): string {
  if(!message.trim()) return ''

  return message.split(' ').map(word => [...word].reverse().join('')).join(' ')
}
