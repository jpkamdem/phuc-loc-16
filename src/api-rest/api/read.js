const connection = require("./../config/database.js");

const getBoxes = (req, res) => {
  const sqlQuery = `
    SELECT
            b.id_box,
            b.nom,
            b.pieces,
            b.prix,
            b.image,
            (
                SELECT JSON_ARRAYAGG(JSON_OBJECT('nom', a.nom, 'quantite', ba.quantite))
                FROM Aliments a
                INNER JOIN Box_Aliments ba ON a.id_aliment = ba.id_aliment
                WHERE ba.id_box = b.id_box
            ) AS aliments,
            (
                SELECT JSON_ARRAYAGG(JSON_OBJECT('nom', s.nom))
                FROM Saveurs s
                INNER JOIN Box_Saveurs bs ON s.id_saveur = bs.id_saveur
                WHERE bs.id_box = b.id_box
            ) AS saveurs
        FROM
            Box b
    `;

    connection.query(sqlQuery, (err, results) => {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête :', err)
            res.status(500).json({ error: "Erreur lors de la récuparation des données"})
            return
        }

        const boxes = results.map(box => ({
            id_box: box.id_box,
            nom: box.nom,
            pieces: box.pieces,
            prix: box.prix,
            image: box.image,
            aliments: JSON.parse(box.aliments),
            saveurs: JSON.parse(box.saveurs)
        }))
        res.json(boxes)
    })
};

module.exports = { getBoxes };
