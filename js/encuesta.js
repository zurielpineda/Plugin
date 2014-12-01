(function( $ ){

  var methods = {
      

      init: function( o ){
        o.show.html( o.preguntas[ o.pos ] );
      },
      changeQuestion : function( o ){
        o.pos++;
        o.show.html( o.preguntas[ o.pos ] );
      },
      changeBck: function( o ){
        o.body.css( 'background', o.bg );
      }
     
  };//methods


  $.core = function( options ){

    //Variables que se pueden utilizar dentro de nuestra aplicación
    var settings = {

      pos: 0,
      show: $("#caja"),
      bg: '#ffff00',
      body: $( 'body' ),
      preguntas: [ "",
        "¿Quién eres?", "¿Qué te gusta hacer?", "preg 3", "Preg 4"       
      ],
      result:[ 
      ]


    }//settings

    var o = $.extend( settings, options );


      //======================================
      //      Programando Actividad
      //======================================
      methods.init( o );

      $( '#fondo' ).click(function(){
        methods.changeBck( o );
      });

      $( '#sig' ).click(function(){
        
        if (o.pos < o.preguntas.length - 1){
          methods.changeQuestion( o );
        }else{
          o.show.html( 'has terminado tu quiz' );
        }

      });

      $(".resp").click(function(){
        var resp = parseInt($(this).text());
       o.result.push(resp);
       console.log( o.result );
      
      });

      $("#sig").click(function(){
      $("#caja").animate({
        left:'750px',
        height:'50px',
        width:'350px'

                        });
      });     
  
      $("#sig").click(function(){
      $(".resp").animate({

        margin: '10px',
        height: '50px',
        width: '50px'
                        });
      });     
    
  

      
  }//core functions

})( jQuery );