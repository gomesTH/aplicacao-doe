document
        .querySelector('header button')
        .addEventListener("click", function() {
          document
              .querySelector('.form')
              .classList.toggle('hide')
              /*A Funcionalidade toggle, tem a função de 
              adicionar ou remover classes dentro do form*/
        })