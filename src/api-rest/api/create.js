const connection = require("./../config/database.js");

const addToCart = (id) => {
    const sqlQuery = `INSERT INTO Table (id_box) VALUES (${id})`

    connection.query(sqlQuery, (err, res) => {
        if (err) {
            console.log('Erreur dans la requête d\'insertion :', err)
            res.status(500).json({ error: 'Erreur dans la requête d\'insertion'})
            return
        }
        alert('Box ajoutée avec succès.')
    })
}