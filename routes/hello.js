import express from 'express'

const router = express()

router.get('/:name', (req, res) => {
  res.render('index', { name: req.params.name })
})

router.get('/', (req, res) => {
  res.render('index', { name: 'Nameless One' })
})

export default router
