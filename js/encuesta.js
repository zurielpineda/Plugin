(function( $ ){

  var methods = {
      

      init: function( o ){
        o.show.html( o.preguntas[ o.pos ] );
      },
      changeQuestion : function( o ){
        o.pos++;
        o.show.html( o.preguntas[ o.pos ] );
      },
      
      
      mostrarpreg: function( o ){

        

        $('.caja').css('left','50px');
        $( ".caja" ).animate({ "left": "+=350px" }, "slow" );
        },

        mostrarresp: function(o){
          $('.respuestas').css('right','50px');
           $( ".respuestas" ).animate( {right: 300 }, 1000);
        }
  };//methods


  $.core = function( options ){

    //Variables que se pueden utilizar dentro de nuestra aplicación
    var settings = {

      pos: 0,
      show: $(".caja"),
      bg: '#ffff00',
      body: $( 'body' ),
      preguntas: [
        "¿Quién eres?", "¿Qué te gusta hacer?", "preg 3", "Preg 4", "pregunta 5"       
      ],
      result:[ 
      ]


    }//settings

    var o = $.extend( settings, options );

    
      //======================================
      //      Programando Actividad
      //======================================
      methods.init( o );
      methods.mostrarpreg(o);
      methods.mostrarresp(o);
      


      $(".resp").click(function(){
        
        if (o.pos < o.preguntas.length ){
          var resp = parseInt($(this).text());
          o.result.push(resp);
          console.log( o.result );
          methods.changeQuestion( o );
          methods.mostrarpreg(o);
          methods.mostrarresp(o);
     
        }else{
          o.show.html( 'has terminado tu quiz' );
        }

      });  

     
    $(".dragresp" ).draggable({revert: true});
    $( "#caja2" ).droppable({
      drop: function( event, ui ) {
        
        var respuesta = ui.draggable.text();
        console.log( respuesta );
        methods.changeQuestion( o );
        methods.mostrarpreg(o);
        methods.mostrarresp(o);
        
      }
    });
// entrar y salir de preguntas y respuestas
//regrese la respuesta
//y cuando acabe se pare
 
      
  }//core functions

})( jQuery );