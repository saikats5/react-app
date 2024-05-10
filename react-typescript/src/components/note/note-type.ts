export type NoteProps = {
  text: string
  priority?: 'high' | 'medium' | 'low'
}

export type NoteType = {
  id: number
  text: string
  priority: 'high' | 'medium' | 'low'
}
