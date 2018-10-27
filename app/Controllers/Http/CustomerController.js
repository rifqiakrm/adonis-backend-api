'use strict'

const Customer = use('App/Models/Customer')

class CustomerController {
  async index ({ response }) {

    const customers = await Customer.all();

    response.status(200).json({
      message : "Here is all customer",
      data : customers
    })
  }

  async store ({response, request, params: { id } }) {

    const { name, description } = request.post()

    const customer = new Customer()
    customer.name = name
    customer.description = description

    await customer.save()

    response.status(201).json({
      message : "Successfully added a new customer",
      data : customer
    })
  }

  async show ({request, response, params: { id } }) {
    const customer = await Customer.find(id)

    response.status(200).json({
      message : "Here is your customer",
      data : customer
    })
  }

  async update ({response, request, params: { id } }) {

      const { name, description, customer } = request.post()

      customer.name = name
      customer.description = description

      await customer.save()

      response.status(200).json({
        message : "Successfully updated this customer",
        data : customer
      })
  }

  async destroy ({response, params: { id } }) {
    const customer = await Customer.find(id)
    
    await customer.delete()

    response.status(200).json({
      message : "Successfully deleted this customer",
      data : id
    })
  }
}

module.exports = CustomerController
