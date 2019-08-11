//Ruta para editar un perrito
router.route('/dogs/:dog_id')
  // El estandár para editar es PUT
  .put(function(req, res) {
    // Usamos la funcion findById de mongoose para encontrar
    // el perrito que queremos editar 
    Dog.findById(req.params.dog_id, function(err, dog) {
      
      if (err){//si hay errores los regresamos
        res.send(err);
      }
      
      //Modificamos el registro
      dog.age = req.body.age; 
      // Guardamos
      dog.save(function(err) {
        if (err){
            res.send(err);
        }
        res.json({ message: 'El perrito ' +  dog.name + ' fue actualizado correctamente'});
      });
    });
  });
