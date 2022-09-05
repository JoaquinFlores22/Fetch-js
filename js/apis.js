

fetch()
  .then((resp) => resp.json(carrito))
  .then((data) => {
    console.log();
    console.log(data[0].title);
  })
  .catch((error) => {
    console.info("que error? ", error);
    Swal.fire("error");
  });



