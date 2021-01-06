const profileRoutes = (app, fs) => {
  // variables
  const dataPath = './data/profiles.json';
  const personDataPath = './data/persons.json';

  // READ
  app.get('/profiles/:uname', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      if (req && req.params && req.params.uname) {
        let localData = JSON.parse(data);
        if (localData[req.params.uname]) {
            fs.readFile(personDataPath, 'utf8', (err, dat) => {
              let personsData = JSON.parse(dat);
              let personsDataRemapped = personsData[req.params.uname].map((person) => {
                return {
                  id: person.id,
                  firstname: person.firstname,
                  surname: person.surname,
                  dob: person.dob,
                  image: person.image
                }
              })
              res.send({ "success": true, "data": personsDataRemapped});
            })
        } else {
          res.send({ "success": false, error: "user doesn't exist"});
        }
      } else {
        res.send({ "success": false, error: "incorrect username"});
      }
    });
  });

  app.get('/profile/:id/:uname', (req, res) => {
    fs.readFile(personDataPath, 'utf8', (err, data) => {
      let personsData = JSON.parse(data);
      if (req && req.params && req.params.id && req.params.uname) {
        if (personsData[req.params.uname] && personsData[req.params.uname].length > 0) {
          const returnedPerson = personsData[req.params.uname].filter((personData) => {
            return personData.id === req.params.id
          })
          if (returnedPerson.length === 1) {
            res.send({ success: true, data: returnedPerson[0] })
          } else {
            res.send({ success: false, "error": "Something is wrong with your tree" })
          }
        } else {
          res.send({ success: false, "error": "No people in your tree" })
        }
      } else {
        res.send({ success: false, "error": "Bad request" })
      }
    })
  });
};

module.exports = profileRoutes;
