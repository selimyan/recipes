#!/usr/bin/env node

// FAKE DATA --> https://www.npmjs.com/package/faker

const { db, Question, Choice } = require('../server/db')
const data = require('../data/dummyData.json')

const seed = async () => {
  await db.sync({ force: true })

  await Promise.all(data.map(async qData => {
    const question = await Question.create({ name: qData.name })
    await Promise.all(qData.choices.map(async cData => {
      const choice = await Choice.create(cData)
      await choice.setQuestion(question)
    }))
  }))

  db.close()
  console.log(`

    Seeding successful!
    Time to do stuff!

  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
