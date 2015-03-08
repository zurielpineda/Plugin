(function( $ ){

  var methods = {
      

      init: function( o ){
        var block = 'bloque'+o.bloque;
        o.show.html( o.preguntas[ block ][ o.pos ] );
      },
      changeQuestion : function( o ){
        o.pos++;
        var block = 'bloque'+o.bloque;
        o.show.html( o.preguntas[ block ][ o.pos ] );
      },
      
      
      mostrarpreg: function( o )

        {
  
          $('.caja').css('left','50px');
          $( ".caja" ).animate({ "left": "+=350px" }, "slow" );
        },

        mostrarresp: function(o){
          $('.respuestas').css('right','50px');
           $( ".respuestas" ).animate( {right: 300 }, 1000);
        },

        MostrarBloque: function(o)
        {
          $("#bloque" + o.bloque).show(1000);
        },

         OcultarBloque: function(o)
        {
          $("#bloque" + o.bloque).hide(2000);
        }
  };//methods


  $.core = function( options ){

    //Variables que se pueden utilizar dentro de nuestra aplicación
    var settings = {
      bloque: 1,
      pos: 0,
      show: $(".caja"),
      bg: '#ffff00',
      body: $( 'body' ),
      preguntas: {
        bloque1: ["¿Quién eres?", "¿Qué te gusta hacer?", "preg 3", "Preg 4", "preguntas 5"],
        bloque2: ["Pregunta 6", "Pregunta 7", "preg 8", "Preg 9", "pregunta 10"],
      },
      result:[ 
      ]


    }//settings

    var o = $.extend( settings, options );

    
      //======================================
      //      Programando Actividad
      //======================================
      methods.MostrarBloque(o);
      methods.init(o);
      methods.mostrarpreg(o);
      methods.mostrarresp(o);
      

      //Seleccionar con click
      
      $(".resp").click(function()
      {
            var block = "bloque"+ o.bloque;
            
            if (o.pos < o.preguntas[ block ].length)
          {
              var resp = parseInt($(this).text());
                
              o.result.push(resp);
              if( o.pos == o.preguntas[ block ].length - 1 )
              {
                methods.OcultarBloque(o);
                o.bloque += 1;
                o.pos = 0;
                methods.MostrarBloque(o);  
              } 
              else
              {
                methods.changeQuestion(o);
                methods.mostrarpreg(o);
                methods.mostrarresp(o);
              }
              console.log( o.result );
          }
      });  

     // drag and drop
     
      $(".dragresp" ).draggable({revert: true});
      
      $( "#caja2" ).droppable(
      {
        drop: function( event, ui ) 
        {
            var block = "bloque" + o.bloque;
            if (o.pos < o.preguntas[block].length)
            {
              var respuesta = parseInt($(ui.draggable).text());
              o.result.push(respuesta);
              console.log( o.result );
              methods.changeQuestion( o );
              methods.mostrarpreg(o);
              methods.mostrarresp(o);

              

            }
            else
            {
            
              methods.OcultarBloque(o);
                o.bloque += 1;
                o.pos = 0;
                methods.MostrarBloque(o); 
            }
        }
      });

      //Seleccionar
      
      $(document).ready(function()
  {
      $("#checkbox_comprobar").click(function() 
      { 
        
        var respuesta = [];
        $('select').each(function() 
           {
              
              respuesta.push( parseInt( $(this).val() ) );
           });
            console.log( respuesta );
           console.log($.inArray ( 5 , respuesta));
          
          var vacio = $.inArray ( 5 , respuesta);
          if (vacio == -1)
          
              {
                alert("Continua");
              }
          else  
          {
                        alert("Elementos vacios");
          };
  

      });
  
  
  });

// entrar y salir de preguntas y respuestas
//regrese la respuesta
//y cuando acabe se pare
 
      
  }//core functions

})( jQuery );