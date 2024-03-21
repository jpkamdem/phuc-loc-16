const connection = require("./../config/database.js");

const addToCart = (id) => {
    console.log(id)
    const sqlQuery = `INSERT INTO Panier (id_box) VALUES (${id.id_box})`

    connection.query(sqlQuery, (err, res) => {
        if (err) {
            console.log('Erreur dans la requête d\'insertion :', err)
            return
        }
        alert('Box ajoutée avec succès.')
    })
}

module.exports = { addToCart }