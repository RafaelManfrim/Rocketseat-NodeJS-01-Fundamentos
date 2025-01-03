import fs from 'node:fs/promises';

const databasePath = new URL("../db.json", import.meta.url)

export class Database {
  #database = {}

  constructor() {
    fs.readFile(databasePath, 'utf8').then(
      data => this.#database = JSON.parse(data)
    ).catch(_ => this.#persist())
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database))
  }

  select(table) {
    const data = this.#database[table] ?? []
    return data
  }

  insert(table, data) {
    if (!this.#database[table] || Array.isArray(this.#database[table])) {
      this.#database[table] = []
    }

    this.#database[table].push(data)

    this.#persist()

    return data
  }
}