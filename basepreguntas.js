var contador_preguntas = 1
const PUNTOS_POSITIVOS = +5
const PUNTOS_NEGATIVOS = -2.5
const resultados = []
const preguntas = [
    {
        id: 1,
        encabezado: "¿En que año fallecio la reina Isabel?",
        opciones: [
            {
                id: 1,
                respuesta: "1986 ",
                correcto: false
            },
            {
                id: 2,
                respuesta: "2021",
                correcto: false
            },
            {
                id: 3,
                respuesta: "2022 ",
                correcto: true
            },
            {
                id: 4,
                respuesta: "1942",
                correcto: false
            }
        ]
    },
    {
        id: 2,
        encabezado: "Cuantos departamentos tiene colombia?",
        opciones: [
            {
                id: 1,
                respuesta: "38 ",
                correcto: false
            },
            {
                id: 2,
                respuesta: "42",
                correcto: false
            },
            {
                id: 3,
                respuesta: "32",
                correcto: true
            },
            {
                id: 4,
                respuesta: "24",
                correcto: false
            }
        ]
    },
    {
        id: 3,
        encabezado: "¿En que aguas habita el delfin rosado?",
        opciones: [
            {
                id: 1,
                respuesta: "Agua Dulce",
                correcto: true
            },
            {
                id: 2,
                respuesta: "Agua no Residuales",
                correcto: false
            },
            {
                id: 3,
                respuesta: "Agua Salada",
                correcto: false
            },
            {
                id: 4,
                respuesta: "Agua Salobre",
                correcto: false
            }
        ]
    },
    {
        id: 4,
        encabezado: "¿Cual es la capital de Ecuador? ",
        opciones: [
            {
                id: 1,
                respuesta: "Quito",
                correcto: true
            },
            {
                id: 2,
                respuesta: "Lima",
                correcto: false
            },
            {
                id: 3,
                respuesta: "Caracas",
                correcto: false
            },
            {
                id: 4,
                respuesta: "Quito",
                correcto: false
            }
        ]
    },
    {
        id: 5,
        encabezado: "¿Cuantos huesos tiene el ser humano?",
        opciones: [
            {
                id: 1,
                respuesta: "224",
                correcto: false
            },
            {
                id: 2,
                respuesta: "306",
                correcto: false
            },
            {
                id: 3,
                respuesta: "206",
                correcto: true
            },
            {
                id: 4,
                respuesta: "235",
                correcto: false
            }
        ]
    },
    {
        id: 6,
        encabezado: "¿De que año es la constitucion politica de colombia?",
        opciones: [
            {
                id: 1,
                respuesta: "1860",
                correcto: false
            },
            {
                id: 2,
                respuesta: "1991",
                correcto: true
            },
            {
                id: 3,
                respuesta: "1999",
                correcto: false
            },
            {
                id: 4,
                respuesta: "1998",
                correcto: false
            }
        ]
    },
    {
        id: 7,
        encabezado: "¿En que año termino la segunda guerra mundial?",
        opciones: [
            {
                id: 1,
                respuesta: "1743",
                correcto: false
            },
            {
                id: 2,
                respuesta: "1948",
                correcto: false
            },
            {
                id: 3,
                respuesta: "1945",
                correcto: true
            },
            {
                id: 4,
                respuesta: "1745",
                correcto: false
            }
        ]
    },
    {
        id: 8,
        encabezado: "¿Cual es el simbolo quimico del dioxido de carbono?",
        opciones: [
            {
                id: 1,
                respuesta: "Ca",
                correcto: false
            },
            {
                id: 2,
                respuesta: "H2O",
                correcto: false
            },
            {
                id: 3,
                respuesta: "Co2",
                correcto: true
            },
            {
                id: 4,
                respuesta: "Cl",
                correcto: false
            }
        ]
    },
    {
        id: 9,
        encabezado: "¿Cual es la medida de un angulo recto?",
        opciones: [
            {
                id: 1,
                respuesta: "75º",
                correcto: false
            },
            {
                id: 2,
                respuesta: "180º",
                correcto: false
            },
            {
                id: 3,
                respuesta: "90º",
                correcto: true
            },
            {
                id: 4,
                respuesta: "45º",
                correcto: false
            }
        ]
    },
    {
        id: 10,
        encabezado: "¿Cual es el rio mas largo del mundo?",
        opciones: [
            {
                id: 1,
                respuesta: "Rio Grande",
                correcto: false
            },
            {
                id: 2,
                respuesta: "Rio Nilo",
                correcto: false
            },
            {
                id: 3,
                respuesta: "Rio Amazonas",
                correcto: true
            },
            {
                id: 4,
                respuesta: "Rio misisipi",
                correcto: false
            }
        ]
    },
]

function inicializar() {
    pintar_preguntas(contador_preguntas)

}


function pintar_preguntas(id_pregunta) {
    let pregunta = preguntas.filter((pregunta) => { return pregunta.id === id_pregunta })

    pregunta = pregunta[0]
    //condicional//
    if (pregunta) {
        const encabezado = document.getElementById('encabezado')
        const opcion1 = document.getElementById('opcion1')
        const opcion2 = document.getElementById('opcion2')
        const opcion3 = document.getElementById('opcion3')
        const opcion4 = document.getElementById('opcion4')
        encabezado.innerHTML = pregunta.encabezado
        opcion1.innerHTML = traer_respuesta(1, pregunta)
        opcion2.innerHTML = traer_respuesta(2, pregunta)
        opcion3.innerHTML = traer_respuesta(3, pregunta)
        opcion4.innerHTML = traer_respuesta(4, pregunta)
    } else {
        calcularPuntaje()
    }
}

//calcular el porcentaje//
async function calcularPuntaje() {
    let puntosTotales = 0
    await resultados.map(result => {
        if (result) {
            puntosTotales = puntosTotales + PUNTOS_POSITIVOS
        } else {
            puntosTotales = puntosTotales - PUNTOS_NEGATIVOS
        }
    })
    if (puntosTotales < 0) puntosTotales = 0
    alert("PUNTOS TOTALES: " + puntosTotales)
}

//filtro//
function traer_respuesta(id_respuesta, pregunta) {
    return pregunta.opciones.filter((opcion) => { return opcion.id === id_respuesta })[0].respuesta
}

function respuesta_correcta(id_respuesta, pregunta) {
    return pregunta.opciones.filter((opcion) => { return opcion.id === id_respuesta })[0].correcto
}

function validar_respuesta(id_respuesta) {
    let pregunta = preguntas.filter((pregunta) => { return pregunta.id === contador_preguntas })
    pregunta = pregunta[0]
    const opciones = document.getElementsByClassName("opcion")
    if (respuesta_correcta(id_respuesta, pregunta)) {
        resultados.push(true)
    } else {
        resultados.push(false)
    }
    console.log(resultados)
    Array.from(opciones).forEach(element => {
        const opcion = "opcion" + id_respuesta
        if (opcion === element.id && respuesta_correcta(id_respuesta, pregunta)) {
            element.classList.add("respuesta_correcta")
        } else {
            element.classList.add("respuesta_incorrecta")
        }

    });
}

/*incremente la pregunta*/
function siguiente_pregunta() {
    contador_preguntas = contador_preguntas + 1
    console.log(contador_preguntas)
    /*remueve la seleccion de la pregunta anterior*/
    document.getElementById('opcion1').classList.remove("respuesta_incorrecta");
    document.getElementById('opcion2').classList.remove("respuesta_incorrecta");
    document.getElementById('opcion3').classList.remove("respuesta_incorrecta");
    document.getElementById('opcion4').classList.remove("respuesta_incorrecta");
    document.getElementById('opcion1').classList.remove("respuesta_correcta");
    document.getElementById('opcion2').classList.remove("respuesta_correcta");
    document.getElementById('opcion3').classList.remove("respuesta_correcta");
    document.getElementById('opcion4').classList.remove("respuesta_correcta");
    pintar_preguntas(contador_preguntas)
}
inicializar()