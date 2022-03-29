import { buildings } from '../../../data'

export default function handler(req, res) {
  const filtered = buildings.filter((article) => article.id === req.query.id)
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Project with the id of ${req.query.id} is not found` })
  }
}
