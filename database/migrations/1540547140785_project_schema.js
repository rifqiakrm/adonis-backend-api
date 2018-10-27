'use strict'

const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments()
      table.string('name')
	    table.text('description')		
	    table.integer('customers_id').unsigned()
	    table
	      .foreign('customers_id')
	      .references('customers.id')
	      .onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
