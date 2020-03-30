const generateUniqueId = require('../util/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
  /**Listagem de ONG's */
  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  /**Cadastro de ONG's */
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return response.json({ id });
  }
}