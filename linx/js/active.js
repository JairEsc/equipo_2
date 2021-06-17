(function($) {
    //codigo de pixel.
    'use strict';
    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function() {
        $('.preloader').delay(0).fadeOut('slow', function() {
            $(this).remove();
        });
    });
    // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#pixelNav').classyNav();
    }

    // :: 3.0 Sliders Active Code
    if ($.fn.owlCarousel) {
        $(document).ready(function() {});
        var welcomeSlide = $('.hero-slideshow');
        var testiSlide = $('.testimonial-slides');

        welcomeSlide.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            dots: false,
            autoplay: false,
            smartSpeed: 500,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        welcomeSlide.on('translate.owl.carousel', function() {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function() {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function() {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function() {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function() {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function() {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        testiSlide.owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            autoplay: false,
            smartSpeed: 500
        });
    }


    // :: 5.0 Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function() {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // :: 6.0 Magnific Popup Active Code
    if ($.fn.magnificPopup) {
        $('.zoom-img').magnificPopup({
            type: 'image'
        });
    }
    // :: 7.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: ''
        });
    }

    // :: 8.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 9.0 Progress Bar Active Code
    if ($.fn.circleProgress) {
        $('#c1').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }
    if ($.fn.circleProgress) {
        $('#c2').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }
    if ($.fn.circleProgress) {
        $('#c3').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }
    if ($.fn.circleProgress) {
        $('#c4').circleProgress({
            size: 200,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#ff7902',
            thickness: '5',
            reverse: true,
        });
    }

    // :: 10.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // :: 11.0 Prevent Default a Click
    $('a[href="#"]').on('click', function($) {
        $.preventDefault();
    });

    // :: 12.0 Jarallax Active Code
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // :: 13.0 Sticky Active Code
    if ($.fn.sticky) {
        $("#sticker").sticky({
            topSpacing: 0
        });
    }

    // :: 14.0 Wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }
    $(document).ready(function() {
        $('#header').load("footer.html");
    });
})(jQuery);
//codigo propio;

var breathingBtn = document.getElementsByClassName("btnBreath")[0]; //En /team. boton central
var modalColab = document.getElementById("emergVentColab"); //Modal de cada area.
var modalColabIMG = document.getElementById('area_logo')
var modalColabTITLE = document.getElementById('area_name')
var modal2 = document.getElementById("emergVent2"); //modal del buscador
//diseño del menú interactivo
var lineas_ocultas = document.getElementsByClassName("Locultos");
var img_ocultas = document.getElementsByClassName("Cocultos");
//
//arreglos auxiliares.
var lineas_porID = [];
var miembros_porID = [];
var miembros_porID_fotos = [];
var img_porID = [];
for (var i = 0; i < lineas_ocultas.length; i++) {
    lineas_porID.push(document.getElementById("line" + (40 * i).toString())) //guarda lineas
    if (i == 0 || i == 1) {
        miembros_porID.push(document.getElementById("miembro" + i.toString()));
        miembros_porID_fotos.push(document.getElementById("area_logo" + i.toString()));
        console.log("area_logo" + i.toString())
    } else {
        miembros_porID.push(document.getElementById("miembro" + (i % 2 == 0 ? (-i / 2) : (i + 1) / 2).toString())) //lo va llenando desde en medio hacia ambos lados.
        miembros_porID_fotos.push(document.getElementById("area_logo" + (i % 2 == 0 ? (-i / 2) : (i + 1) / 2).toString())) //las guarda en un orden bonito
    }
}
for (var i = 0; i < img_ocultas.length; i++) {
    img_porID.push(document.getElementById("deg" + (40 * i).toString()))
}

// botones:
var btnAdmin = document.getElementById("admin");
var btnCirculoCentral = document.getElementById("CirculoCentral");
var historial = document.getElementById("historial");
var btnSearch = document.getElementById("searchBtn");
var searchInput = document.getElementById("searchInput");
var colab_actual = "";
var anterior = document.getElementById("anterior");
var siguiente = document.getElementById("siguiente");
var galeria_pag = 0;
var historial_activo = false;
// en /index. boton de desplegue y texto oculto.
que_es_linx = document.getElementById("que_es_linx");
que_es_linx_text = document.getElementById("que_es_linx_text");

// Get the <span> element that closes the modal
var spanColab = document.getElementsByClassName("close")[1];
var spanAdmin = document.getElementsByClassName("close")[0];
var spanCloseSearch = document.getElementById("closeSearch");

var json_deg = [{ 'deg': 'deg0', 'img': '/equipo/linx/img/logos/teams/ANALISIS.jpg', 'title': 'Análisis Térmico' },
    { 'deg': 'deg40', 'img': '/equipo/linx/img/logos/teams/ELECTRONICA.png', 'title': 'Electricidad' },
    { 'deg': 'deg80', 'img': '/equipo/linx/img/logos/teams/INVESTIGACION.jpg', 'title': 'Investigación' },
    { 'deg': 'deg120', 'img': '/equipo/linx/img/logos/teams/MANUFACTURA.jpg', 'title': 'Manufactura' },
    { 'deg': 'deg160', 'img': '/equipo/linx/img/logos/teams/RECLUTAMIENTO.jpg', 'title': 'Marketing' },
    { 'deg': 'deg200', 'img': '/equipo/linx/img/logos/teams/PLANEACION.jpg', 'title': 'Planeación' },
    { 'deg': 'deg240', 'img': '/equipo/linx/img/logos/teams/POTENCIA.jpg', 'title': 'Potencia' },
    { 'deg': 'deg280', 'img': '/equipo/linx/img/logos/teams/SOFTWARE.jpg', 'title': 'Software' },
    { 'deg': 'deg320', 'img': '/equipo/linx/img/logos/teams/SIMULACION.jpg', 'title': 'Simulación' }
];

var json_miembros = [{ 'area': 'Análisis Térmico', 'miembros': [{ 'nombre': 'PABLO CABRERA', 'img': 'equipo/linx/img/logos/teams/ÁREA DE MECÁNICA- ANÁLISIS TÉRMICO PABLO CABRERA/PABLO CABRERA.png', 'carrera': 'Licenciado en Física' }, { 'nombre': 'Espinosa Hernandez Allan Ricardo', 'img': 'equipo/linx/img/logos/teams/ÁREA DE MECÁNICA- ANÁLISIS TÉRMICO PABLO CABRERA/Allan Ricardo Espinosa Hernandez.jpg', 'carrera': 'Ingenieria Mecánica' }] },
    { 'area': 'Electricidad', 'miembros': [{ 'nombre': 'MARCO CARBAJAL', 'img': 'equipo/linx/img/logos/teams/ÁREA DE ELECTRÓNICA- POTENCIA-MARCO CARBAJAL/MARCO CARBAJAL.jpeg', 'carrera': 'Maestro en Ciencias de Ingeniería' }] },
    { 'area': 'Investigación', 'miembros': [{ 'nombre': 'ALDO ROMÁN', 'img': 'equipo/linx/img/logos/teams/ÁREA DE INVESTIGACIÓN-ALDO ROMÁN/ALDO ROMÁN.jpeg', 'carrera': 'Licenciado en Física ' }, { 'nombre': 'Alejandra Ibarra Morales', 'img': 'equipo/linx/img/logos/teams/ÁREA DE INVESTIGACIÓN-ALDO ROMÁN/Alejandra Ibarra Morales.jpg', 'carrera': 'Rayos cósmicos ' }, { 'nombre': 'Barragan Mayet Heber Octavio', 'img': 'equipo/linx/img/logos/teams/ÁREA DE INVESTIGACIÓN-ALDO ROMÁN/Barragan Mayet Heber Octavio.png', 'carrera': 'Proceso de Metalización' }] },
    { 'area': 'Manufactura', 'miembros': [{ 'nombre': 'ERNESTO LÓPEZ', 'img': 'equipo/linx/img/logos/teams/MANUFACTURA Y DISEÑO- ERNESTO LÓPEZ/ERNESTO LÓPEZ.jpeg', 'carrera': 'Ingeniero en Mecatrónica' }, { 'nombre': 'Jennifer Metzin Monroy González', 'img': 'equipo/linx/img/logos/teams/MANUFACTURA Y DISEÑO- ERNESTO LÓPEZ/Jennifer Metzin Monroy González.jpg', 'carrera': 'Diseño Industrial' }, { 'nombre': 'Cabrera García Lizbet Gisela', 'img': 'equipo/linx/img/logos/teams/MANUFACTURA Y DISEÑO- ERNESTO LÓPEZ/Lizbet Gisela Cabrera Garcia.jpg', 'carrera': 'Ingeniería Aeronáutica' }, { 'nombre': 'González Maravilla Eduardo David', 'img': 'equipo/linx/img/logos/teams/MANUFACTURA Y DISEÑO- ERNESTO LÓPEZ/Eduardo David Gonzalez Maravilla.jpg', 'carrera': 'Ingeniería Mecánica' }, { 'nombre': 'Rámirez Castañon Jorge Francisco', 'img': 'equipo/linx/img/logos/teams/MANUFACTURA Y DISEÑO- ERNESTO LÓPEZ/Jorge Francisco Ramírez Castañón.jpg', 'carrera': 'Ingeniería Mecatrónica' }, { 'nombre': 'Jiménez Rincon Juana Ines', 'img': 'equipo/linx/img/logos/teams/MANUFACTURA Y DISEÑO- ERNESTO LÓPEZ/Juana Inés Jiménez Rincón.jpg', 'carrera': 'Física' }], 'historial': [{ 'nombre': 'Hernandez Capulin Raúl', 'img': 'equipo/linx/img/logos/teams/MANUFACTURA Y DISEÑO- ERNESTO LÓPEZ/historial/1.jpg', 'carrera': 'Licenciatura en Química' }, { 'nombre': 'Marco Daniel Díaz Banda', 'img': 'equipo/linx/img/logos/teams/MANUFACTURA Y DISEÑO- ERNESTO LÓPEZ/historial/2.jpg', 'carrera': 'Ingeniería mecánica' }, { 'nombre': 'Acuña Apreza Jonathan', 'img': 'equipo/linx/img/logos/teams/MANUFACTURA Y DISEÑO- ERNESTO LÓPEZ/historial/3.jpg', 'carrera': 'Ingeniería mecánica' }, { 'nombre': 'Romo Aguilar Fatima', 'img': 'equipo/linx/img/logos/teams/MANUFACTURA Y DISEÑO- ERNESTO LÓPEZ/historial/4.jpg', 'carrera': 'Diseño Industrial' }, { 'nombre': '', 'img': 'equipo/linx/img/logos/teams/MANUFACTURA Y DISEÑO- ERNESTO LÓPEZ/historial/5.png', 'carrera': '' }] },
    { 'area': 'Marketing', 'miembros': [{ 'nombre': 'LUISA FLORES', 'img': 'equipo/linx/img/logos/teams/ÁREA DE MARKETING DE TALENTO-LUISA FLORES/LUISA FLORES.jpg', 'carrera': 'Licenciada en Psicología' }, { 'nombre': 'Reyes Franco Carlos Augusto', 'img': 'equipo/linx/img/logos/teams/ÁREA DE MARKETING DE TALENTO-LUISA FLORES/Reyes Franco Carlos Augusto.jpeg', 'carrera': 'Arquitectura' }, { 'nombre': 'Escobar Sánchez Jair', 'img': 'equipo/linx/img/logos/teams/ÁREA DE MARKETING DE TALENTO-LUISA FLORES/Jair Escobar Sánchez.jpg', 'carrera': 'Matemático' }] },
    { 'area': 'Planeación', 'miembros': [{ 'nombre': 'CLAUDIA PATRICIO', 'img': 'equipo/linx/img/logos/teams/ÁREA DE PLANEACIÓN-CLAUDIA PATRICIO/CLAUDIA PATRICIO.jpg', 'carrera': 'Ingeniera Industrial' }] },
    { 'area': 'Potencia', 'miembros': [{ 'nombre': 'JUAN CARLOS SÁNCHEZ ', 'img': 'equipo/linx/img/logos/teams/INSTRUMENTACIÓN- JUAN CARLOS SÁNCHEZ/JUAN CARLOS SÁNCHEZ.jpeg', 'carrera': 'Técnico Académico Asociado' }, { 'nombre': 'Cortés Rosales José Francisco', 'img': 'equipo/linx/img/logos/teams/INSTRUMENTACIÓN- JUAN CARLOS SÁNCHEZ/José Francisco Cortes Rosales.JPG', 'carrera': 'Ingeniería Robótica Industrial' }, { 'nombre': 'Martínez Jiménez Mayra', 'img': 'equipo/linx/img/logos/teams/INSTRUMENTACIÓN- JUAN CARLOS SÁNCHEZ/Mayra Martínez Jiménez.jpeg', 'carrera': 'Ingeniería en Comunicaciones y Electrónica' }] },
    { 'area': 'Simulación', 'miembros': [{ 'nombre': 'DAVID PADILLA', 'img': 'equipo/linx/img/logos/teams/SIMULACIÓN Y CARGA DAVID PADILLA/DAVID PADILLA.jpeg', 'carrera': 'Ingeniero Mecánico' }, { 'nombre': 'Caracheo González José Jorge', 'img': 'equipo/linx/img/logos/teams/SIMULACIÓN Y CARGA DAVID PADILLA/José Jorge Caracheo González.JPG', 'carrera': 'Ingeniería Geológica' }, { 'nombre': 'De la Rosa Avila Edgar', 'img': 'equipo/linx/img/logos/teams/SIMULACIÓN Y CARGA DAVID PADILLA/Edgar De La Rosa Avila.jpg', 'carrera': 'Ingeniería Mecánica' }, { 'nombre': 'Paz Hernández Ricardo', 'img': 'equipo/linx/img/logos/teams/SIMULACIÓN Y CARGA DAVID PADILLA/Ricardo Paz Hernandez.jpg', 'carrera': 'Ingeniería Mecánica' }, { 'nombre': 'Zuñiga Contretas Fernando David', 'img': 'equipo/linx/img/logos/teams/SIMULACIÓN Y CARGA DAVID PADILLA/Zuñiga Contretas Fernando David.JPG', 'carrera': 'Ingeniería Mecánica' }] },
    {
        'area': 'Software',
        'miembros': [{ 'nombre': 'LEONARDO LÓPEZ', 'img': 'equipo/linx/img/logos/teams/SOFTWARE Y COMUNICACIONES-LEONARDO LÓPEZ/LEONARDO LÓPEZ.jpg', 'carrera': 'Ingeniero en Telecomunicaciones' }, { 'nombre': 'Castillo Alcántara Rodrigo', 'img': 'equipo/linx/img/logos/teams/SOFTWARE Y COMUNICACIONES-LEONARDO LÓPEZ/Rodrigo Castillo Alcantara.jpeg', 'carrera': 'Ingeniería Eléctrica Electrónica' }, { 'nombre': 'De Aquino López José Manuel', 'img': 'equipo/linx/img/logos/teams/SOFTWARE Y COMUNICACIONES-LEONARDO LÓPEZ/José Manuel De Aquino López.jpg', 'carrera': 'Física' }, { 'nombre': 'Guzmán Torres Elena', 'img': 'equipo/linx/img/logos/teams/SOFTWARE Y COMUNICACIONES-LEONARDO LÓPEZ/ElenaGuzmanTorres.jpg', 'carrera': 'Ingeniería en Telecomunicaciones' }, { 'nombre': 'Mendoza Bedolla Rebeca', 'img': 'equipo/linx/img/logos/teams/SOFTWARE Y COMUNICACIONES-LEONARDO LÓPEZ/Rebeca Mendoza Bedolla.JPG', 'carrera': 'Ingeniería Eléctrica- Electrónica' }, { 'nombre': 'Salazar Pérez Eduardo', 'img': 'equipo/linx/img/logos/teams/SOFTWARE Y COMUNICACIONES-LEONARDO LÓPEZ/Eduardo Salazar Pérez.JPG', 'carrera': 'Ingeniería Mecatrónica' }, { 'nombre': 'Silva López David Alejandro', 'img': 'equipo/linx/img/logos/teams/SOFTWARE Y COMUNICACIONES-LEONARDO LÓPEZ/David Alejandro Silva López.jpeg', 'carrera': 'Ingeniería Eléctrica- Electrónica' },
            { 'nombre': 'Fernando Contreras Pastrana', 'img': 'equipo/linx/img/logos/teams/SOFTWARE Y COMUNICACIONES-LEONARDO LÓPEZ/Fernando Contreras Pastrana.jpg', 'carrera': 'Licenciatrura en Química' }
        ]
    }
]


$("#searchInput").onkeyup = ((ev) => {
    if (ev.key == 'Enter') {
        btnSearch.onclick(); //que cuando haya algo escrito y se de 'enter', haga la busqueda.
    }
})

function limpiarMiembros() {
    for (var i = 0; i < miembros_porID.length; i++) {
        miembros_porID[i].childNodes[1].innerHTML = "";
        miembros_porID[i].childNodes[3].innerHTML = "";
        miembros_porID_fotos[i].src = '';
        miembros_porID_fotos[i].style.background = 'black';
        miembros_porID[i].parentNode.parentNode.classList.add('single-team-member')
    }
} //Existen 9 espacios para fotos, desde -4 hasta 4. Esta función le quita la foto a todos.

function llenarMiembros(json) {
    if (json.length % 2 == 0) {
        miembros_porID[0].childNodes[1].innerHTML = ""
        miembros_porID[0].childNodes[3].innerHTML = ""
        miembros_porID_fotos[0].style.background = 'black';
        miembros_porID[0].parentNode.parentNode.classList.remove('single-team-member')
        for (var i = 1; i < miembros_porID.length; i++) {
            if (i < json.length + 1) {
                miembros_porID[i].childNodes[1].innerHTML = json[i - 1].nombre
                miembros_porID[i].childNodes[3].innerHTML = json[i - 1].carrera
                //DIAGONAL ENCONTRADA
                miembros_porID_fotos[i].src = '/' + json[i - 1].img
            } else {
                miembros_porID[i].childNodes[1].innerHTML = ""
                miembros_porID[i].childNodes[3].innerHTML = ""
                miembros_porID_fotos[i].style.background = 'black';
                miembros_porID[i].parentNode.parentNode.classList.remove('single-team-member')
            }
        }
    } else {
        for (var i = 0; i < miembros_porID.length; i++) {
            if (i < json.length) {
                miembros_porID[i].childNodes[1].innerHTML = json[i].nombre
                miembros_porID[i].childNodes[3].innerHTML = json[i].carrera
                //DIAGONAL ENCONTRADA
                miembros_porID_fotos[i].src = '/' + json[i].img
            } else {
                miembros_porID[i].childNodes[1].innerHTML = ""
                miembros_porID_fotos[i].style.background = 'black';
                miembros_porID[i].childNodes[3].innerHTML
                miembros_porID[i].parentNode.parentNode.classList.remove('single-team-member')
            }
        }
    }
} //recibe un arreglo con nombre, carrera y url(), y dependiendo del tamaño, va llenando los 9 espacios de fotos.

VISION = [document.getElementById("mision"), document.getElementById("vision"), document.getElementById("valores")];
VISION_json = [{ 'id': 'Misión', 'text': 'LINX, es un laboratorio académico, multidisciplinario, multidimensional que, a través de sus investigaciones como sus proyectos, tiene el compromiso de formar los recursos humanos, generar el conocimiento técnico y crear la infraestructura específica que el país necesita para su efectiva participación de la exploración del espacio exterior, tanto con fines científicos, como tecnológicos o sociales.', 'img': '' },
        { 'id': 'Visión', 'text': 'LINX pretende aportar a la sociedad, información, innovación, transformación descriptiva y de excelencia, apoyándose en la tecnología y la ciencia, pero sin dejar de lado lo humano, inspirando a sus colaboradores a ser mejoresprofesionistas, personas y aportadores de conocimiento; dicho compromiso, es firme para con la comunidad universitaria, la sociedad y el país.', 'img': '' },
        { 'id': 'Valores', 'text': 'Pasión: Disfrutar, poner entusiasmo y motivación a tu trabajo. Honestidad: Manejarse con congruencia, en lo que se piensa, siente, dice y hace. Compromiso: Los objetivos del laboratorio también son tuyos, da todo para conseguirlos. Innovación: Deseo de una permanente renovación, cambiar, evolucionar, adaptarse a lo que el mundo te demande. Excelencia: Buscar la perfección en todo lo que hacemos por mínimo que sea. Eficiencia: Capacidad para realizar nuestro trabajo y cumplir adecuadamente nuestros objetivos.', 'img': '' }
    ] //textos de la mision, vision y valores

$("#que_es_linx").on("click", () => {
    if (typeof $("#que_es_linx_text").attr("hidden") !== 'undefined' && $("#que_es_linx_text").attr("hidden") !== false) { // NO esta visible
        que_es_linx.classList.remove("fa-chevron-down")
        que_es_linx.classList.add("fa-chevron-up")

        que_es_linx_text.removeAttribute("hidden")
    } else {
        que_es_linx.classList.remove("fa-chevron-up")
        que_es_linx.classList.add("fa-chevron-down")
        que_es_linx_text.setAttribute("hidden", "hidden")
    }
})

if (siguiente) {
    var colmena = ['La misión COLMENA1 es pionera en su tipo a nivel mundial. Tiene por objetivo desarrollar capacidades espaciales únicas, que le permitirán a México realizar aportaciones en pie de igualdad con otras naciones en el nuevo mercado de minería espacial que se desarrollará en las próximas décadas en lunas y asteroides del sistema solar interno.', 'Un solo asteroide de 1 km de diámetro, por ejemplo, se estima que tenga alrededor de un trillón de dólares en platino. La Luna tiene agua, que puedenconvertirse en Hidrógeno y Oxígeno para ser usado como combustible de cohetes y Helio-3, que es el combustible ideal para reactores de fusión y es inexistente en la Tierra.'] //textos de proyecto colmena.
    var colmena_en_uso = 0;
    siguiente.onclick = function() {
        console.log("sig");
        var colmena_descr = document.querySelector('#colmena_descr'); //texto del proyecto
        var colmena_img = document.querySelector('#colmena_img'); //imagen del proyecto.
        colmena_descr.style.opacity = 0;
        colmena_img.style.opacity = 0;
        setTimeout(function() { //efecto de difuminado.
            colmena_en_uso = (colmena_en_uso + 1) % 2
            colmena_descr.innerHTML = colmena[colmena_en_uso];
            colmena_img.src = "/linx/img/logos/divulgacion/GLOBO.jpg"
            colmena_descr.style.opacity = 1;
            colmena_img.style.opacity = 1;
        }, 1000);
    }
}
$("#historial").on("click", () => { //cambia las fotos del área por las del historial
    //bug: tengo que dar doble click la primera vez.
    historial_activo = !historial_activo;
    limpiarMiembros();
    json_miembros.forEach((elem, value) => {
        if (elem.area == modalColabTITLE.innerHTML) {
            //cambiar formato para las fotos, quizás agregar espacios. Luego llenar
            //esos espacios (otra funcion)
            if (historial_activo == false) { //cuando se desactiva el boton de historial, se regresa a los miembors actuales.
                llenarMiembros(elem.historial)
            } else {
                llenarMiembros(elem.miembros)
            }
        }
    })
})
$(".botonesVision").on("click", function(event) {
    VISION_json.forEach((item) => {
        document.getElementById(item.id).childNodes[1].innerHTML = ""
        document.getElementById(item.id).classList.remove("botonesVisionGordito")
        if (item.id == ((event.target).innerText)) {
            document.getElementById(item.id).childNodes[1].innerHTML = item.text;
            event.target.classList.add("botonesVisionGordito")
        }
    })
})
$(".botonesNP").on("click", function(event) { //next/previous.
    if (event.target.id == 'galeriaN') { ///click next
        galeria_pag += 1
        for (var i = 0; i < 8; i++) {
            document.getElementById("galeria" + ((i % 8) + 1).toString()).style.backgroundImage = "url(/linx/img/media/" + (8 * galeria_pag + i + 1).toString() + ".jpg)";
        } //aquí ocupo explícitamente un orden de las imágenes N.jpg
    }
    if (event.target.id == 'galeriaP') { ///click prev
        galeria_pag -= 1
        for (var i = 0; i < 8; i++) {
            document.getElementById("galeria" + ((i % 8) + 1).toString()).style.backgroundImage = "url(/linx/img/media/" + (8 * galeria_pag + i + 1).toString() + ".jpg)";
        }
    }
})

$(".colab").on('click', function(event) { //click a cualquier área del menú interactivo
    json_deg.forEach((item, value) => { //busca a cuál de lio click;
        if (item.deg == event.target.id || item.deg == event.target.parentNode.id) {
            limpiarMiembros();
            modalColabIMG.src = item.img
            modalColabTITLE.innerText = item.title
            json_miembros.forEach((elem, value) => {
                if (elem.area == item.title) { //busca en el json de miembros, aquel en el que se dio click.
                    llenarMiembros(elem.miembros)
                }
            })
        }
    })
    modalColab.style.display = "block"; //se muestra el modal.
    modalColab.style.zIndex = 2
});
if(window.screen.width<1000){
    breathingBtn.style.width='18vw';
    breathingBtn.style.height='18vw';
    breathingBtn.style.margin = '-9vw';
    document.querySelector(".menu_inter").style.height=window.screen.height.toString()+'px';
}
$("#CirculoCentral").on('click', () => {
    if (breathingBtn.classList.contains("btnBreath")) { //hacer grande
        breathingBtn.classList.remove("btnBreath")
        breathingBtn.style.zIndex = 1;
        var name = ""
        if(window.screen.width<1000){
            breathingBtn.style.width='18vw'
            breathingBtn.style.height='18vw'
            breathingBtn.style.margin = '-9vw';
            for (var i = 0; i < lineas_porID.length; i++) {
                name = 'line' + (40 * i).toString();
                lineas_porID[i].classList.add(name)
                lineas_porID[i].style.zIndex = 0;
                lineas_porID[i].style.width = '18vw';
                lineas_porID[i].style.margin = '-9vw';
                lineas_porID[i].classList.remove("Locultos")
                lineas_porID[i].classList.add("animacion"+(40*i).toString()+'1')
            }
            for (var i = 0; i < img_porID.length; i++) {
                name = 'deg' + (40 * i).toString();
                img_porID[i].classList.add(name)
                img_porID[i].style.zIndex = 0;
                img_porID[i].style.width = '18vw';
                img_porID[i].style.height = '18vw';
                img_porID[i].style.margin = '-9vw';
                
                img_porID[i].classList.remove("Cocultos")
            }
        }
        else{
            for (var i = 0; i < lineas_porID.length; i++) {
                name = 'line' + (40 * i).toString();
                lineas_porID[i].classList.add(name)
                lineas_porID[i].style.zIndex = 0;
                lineas_porID[i].classList.remove("Locultos")
                lineas_porID[i].classList.add("animacion"+(40*i).toString()+'0')

            }
            for (var i = 0; i < img_porID.length; i++) {
                name = 'deg' + (40 * i).toString();
                img_porID[i].classList.add(name)
                img_porID[i].style.zIndex = 0;
                img_porID[i].classList.remove("Cocultos")
            }
        }
    } else { //hacer pequeño y volverlo a hacerlo respirar.
        breathingBtn.classList.add("btnBreath")

        var name = ""
        for (var i = 0; i < lineas_porID.length; i++) {
            name = 'line' + (40 * i).toString();
            lineas_porID[i].classList.remove(name)
            lineas_porID[i].style.zIndex = -1;
            lineas_porID[i].classList.add("Locultos")
        }
        for (var i = 0; i < img_porID.length; i++) {
            name = 'deg' + (40 * i).toString();
            img_porID[i].classList.remove(name)
            img_porID[i].style.zIndex = 0;
            img_porID[i].classList.add("Cocultos")
        }
    }



})
btnSearch.onclick = function() {
    searchInput.removeAttribute("hidden");
    for (var i = 0; i < 100; i++) {
        if (document.getElementById("resultado" + i.toString())) {
            a = document.getElementById("resultado" + i.toString())
            a.parentNode.removeChild(a);
        } else {
            break;
        }
    }
    textoIngresado = searchInput.value;
    searchInput.focus();
    searchInput.style.width = '100px';
    if (searchInput.value.length > 0) {
        console.log(modal2);

        modal2.style.display = "block";
        console.log(filtro(searchInput.value));


        if (filtroEncontrado == true) {
            document.getElementById("muestran").innerHTML = "Se muestran resultados para '" + searchInput.value.toLowerCase() + "'";
            var actual;
            for (var i = 0; i < filtro(searchInput.value).length; i++) {
                var clone = document.getElementById('resultado').cloneNode(true);
                // cambio id.
                clone.id = 'resultado' + i.toString();
                var childNodes = clone.childNodes;
                childNodes[1].childNodes[1].childNodes[7].childNodes[1].childNodes[1].id = "titulo" + i.toString();
                childNodes[1].childNodes[1].childNodes[7].childNodes[1].childNodes[3].id = "contenido" + i.toString();
                document.getElementById("emergVent2Content").append(clone);
                console.log(document.getElementById("resultado" + i.toString()));
                document.getElementById("resultado" + i.toString()).removeAttribute("hidden");
                document.getElementById("titulo" + i.toString()).innerHTML = filtro(searchInput.value.toLowerCase())[i].title
                var contenidoActual = filtro(searchInput.value.toLowerCase())[i].content;
                var contextoActual = contexto(contenidoActual, searchInput.value.toLowerCase());
                //pone en negrita la busqueda encontrada
                if (contextoActual[0]) {
                    document.getElementById("contenido" + i.toString()).innerHTML += contextoActual[0]
                }
                document.getElementById("contenido" + i.toString()).innerHTML += contextoActual[1].bold() //negritas.
                if (contextoActual[2]) {
                    document.getElementById("contenido" + i.toString()).innerHTML += contextoActual[2]
                }

                //como extra: considerar subcadenas y hacer recursiva la busqueda
            }
        } else {
            document.getElementById("muestran").innerHTML = "No se encontraron resultados para '" + searchInput.value + "'";
        }
    }
}
document.onclick = function() { //quizás para ocultar el input de busqueda cuando no se está usando.
        if (searchInput.matches(':focus') == false) {
            searchInput.style.width = '60px';
        }
    }
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modalColab) {
        modalColab.style.display = "none";
    }


}
var filtroEncontrado = Boolean;
var art = [{ 'title': "Titulo1", 'content': "contendio1, hola" },
    { 'title': "Titulo2", 'content': "contendio2, adiós" },
    { 'title': "Titulo3", 'content': "contendio2, hola y adios" },
    { 'title': "Titulo4", 'content': "contendio4, hola y adios" }
];
var str = String;

function contexto(string, coincidencia) { //para poner en negritas la busqueda y agregar texto del contenido antes y después
    indice = string.indexOf(coincidencia);
    minimo = Math.min(indice, 21);
    maximo = Math.min(-indice - coincidencia.length + string.length, 21)
    previo = string[indice - minimo]
    for (var i = 1; i < minimo; i++) {
        previo = previo + string[indice - minimo + i]
    }
    despues = string[indice + coincidencia.length]
    for (var i = 1; i < maximo; i++) {
        despues = despues + string[indice + coincidencia.length + i]
    }
    sobre = string[indice]
    for (var i = 1; i < coincidencia.length; i++) {
        sobre = sobre + string[indice + i]
    }
    if (indice > 0) {
        return (
            [previo, sobre, despues]
        )
    } else {
        return (
            ["", sobre, despues]
        )
    }
}

function FraseIncluida(art) { //el input es str. Lo busca en el json llamado art.
    return (art['title'].toLowerCase().includes(str.toLowerCase()) || art['content'].toLowerCase().includes(str.toLowerCase()))
}

function filtro(texto) { //recibe el input del buscador.
    str = texto;

    if (art.filter(FraseIncluida).length > 0) {
        filtroEncontrado = true;

        return ((art.filter(FraseIncluida)))
    } else {
        filtroEncontrado = false;
        console.log("no se encontro")
    }
}
