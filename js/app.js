$(document).ready(function(){
    $('.power').click(function(){
        $('#power-on').append('<div><div><p>Realizar un deposito a plazo fijo</p><p>Realizar un deposito a plazo fijo</p></div><div><p>Deposito</p><input placeholder="Monto" class="monto"><input placeholder="Años" class="años"><button class="btn btn-simular">Simular</button><table><thead><tr><th>Name</th><th>Item Name</th><th>Item Price</th></tr></thead></table></div></div>')
    })

    $('.btn-simular').click(function(){
        alert('hola')
        var monto= $('.monto').val()
        var años= $('.años').val()
        console.log(monto)
        var url = 'http://lectorweb.uniclickdigital.com/api/ahorro/' + $(monto) + '/'+ $(años);
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        const response = data.response;
        console.log(response)
      })
      .catch(function(error) {
        console.log(error);
      });
    })
    
})