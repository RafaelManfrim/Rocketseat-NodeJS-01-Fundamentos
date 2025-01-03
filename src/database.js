export class Database {
  #database = {}

  select(table) {
    const data = this.#database[table] ?? []
    return data
  }

  insert(table, data) {
    if (!this.#database[table] || Array.isArray(this.#database[table])) {
      this.#database[table] = []
    }

    this.#database[table].push(data)
  }
}