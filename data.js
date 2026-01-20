// ARCHIVO DE DATOS DEL ITINERARIO
// Para editar el itinerario, simplemente modifica este archivo JSON

const itineraryData = {
    "days": [
        {
            "id": 1,
            "dayNumber": "Día 1",
            "date": "Vie 16 Oct",
            "country": "switzerland",
            "title": "San José → Zúrich",
            "location": "Aeropuerto Juan Santamaría, vuelo LX8037, 3:55 P.M",
            "transport": {
                "type": "flight",
                "icon": "✈️",
                "details": "Vuelo internacional San José - Zúrich"
            },
            "accommodation": null,
            "places": [],
            "notes": [
                "Vuelo internacional de larga distancia",
                "Preparar documentación de viaje",
                "Tener Esims Holafly"
            ]
        },
        {
            "id": 2,
            "dayNumber": "Día 2",
            "date": "Sáb 17 Oct",
            "country": "switzerland",
            "title": "Llegada a Suiza, a las 10:55 am",
            "location": "Zúrich",
            "places": [
                {
                    "name": "Zúrich",
                    "time": "Mañana",
                    "duration": "Unas horas",
                    "description": "Recorrido breve por la ciudad, dejar equipaje en estación de tren",
                    "type": "city"
                },
                {
                    "name": "Lindenhof",
                    "type": "city",
                    "time": "",
                    "duration": "",
                    "description": "Lugar con una bonita vista de Zurich",
                    "maps": "https://maps.app.goo.gl/gvXE9wJgoubAf2367",
                    "optional": false
                },
                {
                    "name": "Nuevo Lugar",
                    "type": "city",
                    "time": "",
                    "duration": "",
                    "description": "",
                    "maps": "",
                    "optional": false
                }
            ],
            "transport": {
                "type": "train",
                "icon": "🚂",
                "details": "Tren Zúrich - Lucerna",
                "note": "Ya hacemos uso del Swiss Travel Pass"
            },
            "accommodation": {
                "name": "Galaxy Apartments",
                "platform": "VRBO",
                "location": "Lucerna"
            },
            "notes": [
                "Dejar equipaje en la estación de tren de Zúrich",
                "Comprar Swiss Travel Pass si aplica"
            ]
        },
        {
            "id": 3,
            "dayNumber": "Día 3",
            "date": "Dom 18 Oct",
            "country": "switzerland",
            "title": "Cascadas y Lucerna",
            "location": "Lucerna",
            "transport": {
                "type": "stp",
                "icon": "🚂",
                "details": "Swiss Travel Pass (8 días)",
                "note": "Inicia período de STP"
            },
            "accommodation": {
                "name": "Galaxy Apartments",
                "platform": "VRBO",
                "location": "Lucerna"
            },
            "places": [
                {
                    "name": "Cascada Stäubifall",
                    "time": "Salida 5:35 AM",
                    "duration": "Vuelta a Lucerna 11:38 AM",
                    "arrival": "Llegada a Lucerna 1:41 PM",
                    "description": "Hermosa cascada en los Alpes suizos",
                    "type": "nature"
                },
                {
                    "name": "Lucerna centro",
                    "time": "Tarde",
                    "duration": "3-4 horas",
                    "description": "Recorrer el centro histórico de Lucerna",
                    "type": "city"
                }
            ],
            "notes": [
                "Salida muy temprano para aprovechar el día",
                "Llevar ropa apropiada para cascadas"
            ]
        },
        {
            "id": 4,
            "dayNumber": "Día 4",
            "date": "Lun 19 Oct",
            "country": "switzerland",
            "title": "Valle de Lauterbrunnen",
            "location": "Grindelwald",
            "transport": {
                "type": "stp",
                "icon": "🚂",
                "details": "Swiss Travel Pass activo"
            },
            "accommodation": {
                "name": "Valley Hostel",
                "platform": "Booking",
                "location": "Grindelwald"
            },
            "places": [
                {
                    "name": "Lauterbrunnen",
                    "time": "Mañana",
                    "description": "Valle de las 72 cascadas",
                    "type": "nature"
                },
                {
                    "name": "Opción 1: Interlaken",
                    "time": "Por definir",
                    "description": "Ciudad turística entre lagos",
                    "type": "city",
                    "optional": true
                },
                {
                    "name": "Opción 2: Blausee",
                    "time": "Por definir",
                    "description": "Lago azul cristalino",
                    "type": "nature",
                    "optional": true
                },
                {
                    "name": "Iseltwald o Giessbach",
                    "time": "11:40 AM - 4:32 PM",
                    "duration": "~3.5 horas en el lugar",
                    "description": "Pueblos pintorescos junto al lago",
                    "type": "village"
                },
                {
                    "name": "Grindelwald",
                    "time": "Tarde",
                    "description": "Check-in y exploración del pueblo",
                    "type": "village"
                }
            ],
            "notes": [
                "Día con varias opciones a decidir según clima y preferencias",
                "Considerar rutas: Lauterbrunnen-Wengen-Klein Scheidegg-Grindelwald-Interlaken",
                "O ruta alternativa: Interlaken-Iseltwald-Blausee-Brienz"
            ]
        },
        {
            "id": 5,
            "dayNumber": "Día 5",
            "date": "Mar 20 Oct",
            "country": "switzerland",
            "title": "Región de Interlaken",
            "location": "Grindelwald",
            "transport": {
                "type": "stp",
                "icon": "🚂",
                "details": "Swiss Travel Pass activo"
            },
            "accommodation": {
                "name": "Valley Hostel",
                "platform": "Booking",
                "location": "Grindelwald"
            },
            "places": [
                {
                    "name": "Opción 1: Interlaken",
                    "time": "Por definir",
                    "description": "Recorrer la ciudad",
                    "type": "city",
                    "optional": true
                },
                {
                    "name": "Opción 2: Blausee",
                    "time": "Por definir",
                    "description": "Lago azul cristalino",
                    "type": "nature",
                    "optional": true
                },
                {
                    "name": "Kleine Scheidegg - Grindelwald",
                    "time": "Por definir",
                    "description": "Ruta panorámica de montaña",
                    "type": "mountain",
                    "optional": true
                },
                {
                    "name": "Giessbach",
                    "time": "Por definir",
                    "description": "Cascadas y vistas al lago",
                    "type": "nature",
                    "optional": true
                },
                {
                    "name": "Berna",
                    "time": "Por definir",
                    "description": "Capital suiza - ciudad patrimonio UNESCO",
                    "type": "city",
                    "optional": true
                }
            ],
            "notes": [
                "Día flexible con múltiples opciones",
                "Decidir según clima y lugares no visitados el día anterior"
            ]
        },
        {
            "id": 6,
            "dayNumber": "Día 6",
            "date": "Mié 21 Oct",
            "country": "switzerland",
            "title": "Zermatt y el Matterhorn",
            "location": "Grindelwald",
            "transport": {
                "type": "stp",
                "icon": "🚂",
                "details": "Swiss Travel Pass - Tren a Zermatt (2 horas desde Interlaken)"
            },
            "accommodation": {
                "name": "Valley Hostel",
                "platform": "Booking",
                "location": "Grindelwald"
            },
            "places": [
                {
                    "name": "Zermatt",
                    "time": "Todo el día",
                    "duration": "Día completo",
                    "description": "Pueblo alpino sin autos al pie del Matterhorn",
                    "type": "mountain"
                },
                {
                    "name": "Punto panorámico de otoño",
                    "time": "Por definir",
                    "description": "Buscar mirador con colores otoñales",
                    "type": "viewpoint"
                }
            ],
            "notes": [
                "Zermatt está a 2 horas desde Interlaken",
                "Pueblo libre de vehículos motorizados",
                "Excelentes vistas del Matterhorn"
            ]
        },
        {
            "id": 7,
            "dayNumber": "Día 7",
            "date": "Jue 22 Oct",
            "country": "switzerland",
            "title": "Traslado a Chur",
            "location": "Chur",
            "transport": {
                "type": "stp",
                "icon": "🚂",
                "details": "Opción 1: Ruta normal vía Zúrich (3.5 horas - salida 6:59 AM, llegada 10:21 AM)",
                "alternative": "Opción 2: Tren panorámico Matterhorn Gotthard Bahn"
            },
            "accommodation": {
                "name": "Casa de Yuri",
                "location": "Chur"
            },
            "places": [
                {
                    "name": "Chur centro",
                    "time": "Tarde",
                    "duration": "3-4 horas",
                    "description": "Ciudad más antigua de Suiza, cafés y exploración",
                    "type": "city"
                }
            ],
            "notes": [
                "Considerar tomar el tren panorámico Matterhorn Gotthard Bahn",
                "Tarde libre para conocer Chur",
                "Nos hospedamos con nuestro amigo Yuri"
            ]
        },
        {
            "id": 8,
            "dayNumber": "Día 8",
            "date": "Vie 23 Oct",
            "country": "switzerland",
            "title": "Lago Seealpsee y región",
            "location": "Chur",
            "transport": {
                "type": "stp",
                "icon": "🚂",
                "details": "Swiss Travel Pass - último día",
                "routes": [
                    "Chur → Wasserauen (2-2.5 horas vía St. Gallen)",
                    "Caminata 3 km al lago (~1 hora ida)"
                ]
            },
            "accommodation": {
                "name": "Casa de Yuri",
                "location": "Chur"
            },
            "places": [
                {
                    "name": "Lago Seealpsee",
                    "time": "Mañana-Mediodía",
                    "duration": "~2 horas en el lago",
                    "description": "Hermoso lago alpino, caminata de 3 km desde Wasserauen",
                    "type": "nature",
                    "travel": "2-2.5 horas desde Chur hasta Wasserauen"
                },
                {
                    "name": "Opción regreso: Appenzell",
                    "time": "Por definir",
                    "duration": "15 min desde Wasserauen",
                    "description": "Pueblo tradicional suizo",
                    "type": "village",
                    "optional": true
                },
                {
                    "name": "Opción regreso: St. Gallen",
                    "time": "Por definir",
                    "duration": "1 hora desde Wasserauen",
                    "description": "Ciudad con biblioteca barroca patrimonio UNESCO",
                    "type": "city",
                    "optional": true
                }
            ],
            "notes": [
                "De St. Gallen a Chur: 1.5-2 horas",
                "Opciones alternativas desde Chur (descartadas): Preda y Lai da Palpuogna, St. Moritz, Lago Sils",
                "Bus a Preda opera solo hasta 18 de octubre"
            ]
        },
        {
            "id": 9,
            "dayNumber": "Día 9",
            "date": "Sáb 24 Oct",
            "country": "germany",
            "title": "Inicio ruta en carro - Alpes Bávaros",
            "location": "Füssen",
            "transport": {
                "type": "car",
                "icon": "🚗",
                "pickup": "Lindau, Alemania",
                "details": "Recogida de vehículo rentado",
                "routes": [
                    "Chur → Lindau: 1.5 horas",
                    "Lindau → Füssen: 100 km, ~1.5 horas"
                ]
            },
            "accommodation": {
                "name": "Haus San Marco",
                "platform": "Booking",
                "location": "Füssen"
            },
            "places": [
                {
                    "name": "Traslado a Lindau",
                    "time": "Mañana",
                    "duration": "1.5 horas",
                    "description": "Recoger vehículo rentado",
                    "type": "logistics"
                },
                {
                    "name": "Iglesia St. Coloman",
                    "time": "Si hay tiempo",
                    "duration": "30 min",
                    "description": "Iglesia barroca pintoresca",
                    "type": "church",
                    "optional": true,
                    "distance": "3 km de Füssen"
                },
                {
                    "name": "Lago Alpsee",
                    "time": "Si hay tiempo",
                    "duration": "1 hora",
                    "description": "Lago junto a St. Coloman",
                    "type": "nature",
                    "optional": true,
                    "distance": "3 km de Füssen"
                }
            ],
            "notes": [
                "Inicio del período con vehículo rentado",
                "Recorrido total del día: ~150 km",
                "St. Coloman y Alpsee están a 3 km uno del otro"
            ]
        },
        {
            "id": 10,
            "dayNumber": "Día 10",
            "date": "Dom 25 Oct",
            "country": "germany",
            "title": "Día adicional en Füssen",
            "location": "Füssen",
            "transport": {
                "type": "car",
                "icon": "🚗",
                "details": "Vehículo disponible para exploraciones"
            },
            "accommodation": {
                "name": "Haus San Marco",
                "platform": "Booking",
                "location": "Füssen"
            },
            "places": [],
            "notes": [
                "Día flexible para reconfigurar itinerario",
                "Tiempo adicional en la región"
            ]
        },
        {
            "id": 11,
            "dayNumber": "Día 11",
            "date": "Lun 26 Oct",
            "country": "germany",
            "title": "Neuschwanstein y lagos alpinos",
            "location": "Mittenwald",
            "transport": {
                "type": "car",
                "icon": "🚗",
                "routes": [
                    "Füssen → Eibsee: 61 km, ~1 hora 20 min",
                    "Paso por Garmisch-Partenkirchen",
                    "Final: Mittenwald"
                ]
            },
            "accommodation": {
                "name": "Ferienwohnung Amethyst",
                "platform": "Booking",
                "location": "Mittenwald"
            },
            "places": [
                {
                    "name": "Castillo Neuschwanstein",
                    "time": "Mañana",
                    "duration": "2-3 horas",
                    "description": "Castillo de cuento de hadas de Luis II de Baviera",
                    "type": "castle"
                },
                {
                    "name": "Pueblo de Füssen",
                    "time": "Mediodía",
                    "duration": "1-2 horas",
                    "description": "Exploración del centro histórico",
                    "type": "city"
                },
                {
                    "name": "Lago Eibsee",
                    "time": "Tarde",
                    "duration": "1-2 horas",
                    "description": "Lago cristalino al pie del Zugspitze, caminata alrededor del lago",
                    "type": "nature",
                    "distance": "61 km desde Füssen"
                },
                {
                    "name": "Wagenbrüchsee (atardecer)",
                    "time": "Si da tiempo",
                    "duration": "1 hora",
                    "description": "Lago para ver el atardecer",
                    "type": "nature",
                    "optional": true
                },
                {
                    "name": "Garmisch-Partenkirchen",
                    "time": "De paso",
                    "duration": "Breve parada",
                    "description": "Pueblo olímpico de invierno",
                    "type": "village",
                    "optional": true
                }
            ],
            "notes": [
                "Día con varios traslados en carro",
                "Recorrido total estimado: ~80-100 km",
                "Priorizar Neuschwanstein y Eibsee"
            ]
        },
        {
            "id": 12,
            "dayNumber": "Día 12",
            "date": "Mar 27 Oct",
            "country": "germany",
            "title": "Mittenwald y alrededores",
            "location": "Mittenwald",
            "transport": {
                "type": "mixed",
                "icon": "🚗🚂",
                "details": "Carro disponible + opción tren a Innsbruck"
            },
            "accommodation": {
                "name": "Ferienwohnung Amethyst",
                "platform": "Booking",
                "location": "Mittenwald"
            },
            "places": [
                {
                    "name": "Pueblo de Mittenwald",
                    "time": "Mañana",
                    "duration": "2-3 horas",
                    "description": "Pueblo pintoresco con casas decoradas",
                    "type": "village"
                },
                {
                    "name": "Garmisch-Partenkirchen",
                    "time": "Opcional",
                    "description": "Si no se visitó el día anterior",
                    "type": "village",
                    "optional": true
                },
                {
                    "name": "Oberammergau",
                    "time": "Opcional",
                    "description": "Pueblo famoso por sus pinturas en fachadas",
                    "type": "village",
                    "optional": true
                },
                {
                    "name": "Castillo Linderhof",
                    "time": "Si hay tiempo",
                    "duration": "2 horas",
                    "description": "Palacio de Luis II de Baviera",
                    "type": "castle",
                    "distance": "43 km, ~46 min",
                    "optional": true
                },
                {
                    "name": "Innsbruck (Austria)",
                    "time": "Tarde (4-5 horas)",
                    "duration": "Excursión de tarde",
                    "description": "Capital del Tirol, tren 1 hora desde Mittenwald",
                    "type": "city",
                    "optional": true
                }
            ],
            "notes": [
                "Para Innsbruck: revisar horarios de tren ida y vuelta",
                "Comprar tiquetes en: https://shop.oebbtickets.at/en/ticket",
                "Día flexible según intereses y clima"
            ]
        },
        {
            "id": 13,
            "dayNumber": "Día 13",
            "date": "Mié 28 Oct",
            "country": "austria",
            "title": "Kitzbühel y Berchtesgaden",
            "location": "Berchtesgaden/Ramsau",
            "transport": {
                "type": "car",
                "icon": "🚗",
                "routes": [
                    "Mittenwald → Kitzbühel: 135 km, ~1h 45min (salida 8 AM, llegada ~10 AM)",
                    "Kitzbühel → Berchtesgaden: 74 km, ~1h 10min (llegada estimada 2:30 PM)"
                ],
                "totalKm": "~210 km"
            },
            "accommodation": {
                "name": "Hospedaje en Ramsau o Berchtesgaden",
                "location": "Berchtesgaden/Ramsau"
            },
            "places": [
                {
                    "name": "Kitzbühel",
                    "time": "10 AM - 1 PM",
                    "duration": "~3 horas",
                    "description": "Hermoso pueblo alpino austríaco, recorrido y almuerzo",
                    "type": "village"
                },
                {
                    "name": "Lago Hintersee",
                    "time": "Tarde",
                    "duration": "1-2 horas",
                    "description": "Lago pintoresco cerca de Ramsau",
                    "type": "nature",
                    "location": "Ramsau bei Berchtesgaden"
                },
                {
                    "name": "Iglesia St. Sebastian (Ramsau)",
                    "time": "Tarde",
                    "duration": "30 min",
                    "description": "Famosa iglesia con el puente pintoresco",
                    "type": "church",
                    "location": "Ramsau"
                }
            ],
            "notes": [
                "Recorrido total del día: ~210 km",
                "Lago Hintersee e iglesia de Ramsau dependen del clima - pueden dejarse para mañana",
                "Opciones de hospedaje: Ramsau o Berchtesgaden (ambos son hermosos)"
            ]
        },
        {
            "id": 14,
            "dayNumber": "Día 14",
            "date": "Jue 29 Oct",
            "country": "germany",
            "title": "Berchtesgaden y Königssee",
            "location": "Berchtesgaden/Ramsau",
            "transport": {
                "type": "car",
                "icon": "🚗",
                "details": "Movimientos locales en la región"
            },
            "accommodation": {
                "name": "Hospedaje en Ramsau o Berchtesgaden",
                "location": "Berchtesgaden/Ramsau"
            },
            "places": [
                {
                    "name": "Pueblo de Berchtesgaden",
                    "time": "Mañana",
                    "duration": "2 horas",
                    "description": "Centro histórico del pueblo",
                    "type": "village"
                },
                {
                    "name": "Wallfahrtskirche Maria Gern",
                    "time": "Mañana",
                    "duration": "30 min",
                    "description": "Iglesia de peregrinación con vistas panorámicas",
                    "type": "church"
                },
                {
                    "name": "Puntos pendientes del día anterior",
                    "time": "Si aplica",
                    "description": "Lago Hintersee o Iglesia Ramsau si no se hicieron ayer",
                    "type": "flexible",
                    "optional": true
                },
                {
                    "name": "Lago Königssee - Paseo en bote",
                    "time": "Tarde",
                    "duration": "Varias horas",
                    "description": "Espectacular lago entre montañas, paseo en bote eléctrico",
                    "type": "nature",
                    "note": "Verificar logística y tiquetes"
                }
            ],
            "notes": [
                "Verificar horarios y disponibilidad para el paseo en bote en Königssee",
                "El recorrido en bote puede tomar varias horas",
                "Considerar comprar tiquetes anticipadamente"
            ]
        },
        {
            "id": 15,
            "dayNumber": "Día 15",
            "date": "Vie 30 Oct",
            "country": "austria",
            "title": "Hallstatt y región de lagos",
            "location": "Bad Ischl",
            "transport": {
                "type": "car",
                "icon": "🚗",
                "routes": [
                    "Berchtesgaden → Gosau: 71 km, ~1h 10min (salida 8 AM, llegada 9:30 AM)",
                    "Gosau → Lagos Grundlsee/Toplitzsee: 35 km, ~40 min",
                    "Lagos → Bad Ischl: 35 km, ~40 min"
                ],
                "totalKm": "~140 km"
            },
            "accommodation": {
                "name": "Hospedaje en Bad Ischl",
                "location": "Bad Ischl"
            },
            "places": [
                {
                    "name": "Gosau",
                    "time": "9:30 AM",
                    "duration": "1 hora",
                    "description": "Pueblo de montaña austríaco",
                    "type": "village"
                },
                {
                    "name": "Lago Grundlsee",
                    "time": "Mediodía",
                    "duration": "1-1.5 horas",
                    "description": "Lago alpino cristalino",
                    "type": "nature",
                    "distance": "35 km de Gosau"
                },
                {
                    "name": "Lago Toplitzsee",
                    "time": "Mediodía",
                    "duration": "1 hora",
                    "description": "Lago rodeado de montañas, bonito en otoño",
                    "type": "nature",
                    "note": "Muy cerca de Grundlsee"
                },
                {
                    "name": "Lago Wolfgangsee / Sankt Gilgen",
                    "time": "Opcional",
                    "description": "Alternativa a los lagos anteriores",
                    "type": "nature",
                    "optional": true,
                    "note": "Los lagos Grundlsee/Toplitzsee se ven mejor"
                },
                {
                    "name": "Bad Ischl",
                    "time": "Tarde",
                    "duration": "2-3 horas",
                    "description": "Pueblo balneario imperial, almuerzo y exploración",
                    "type": "village",
                    "distance": "35 km de los lagos"
                }
            ],
            "notes": [
                "Valorar según clima si conviene hacer Hallstatt este día o mañana",
                "Recorrido total estimado: ~140 km",
                "Grundlsee y Toplitzsee están muy cerca uno del otro"
            ]
        },
        {
            "id": 16,
            "dayNumber": "Día 16",
            "date": "Sáb 31 Oct",
            "country": "austria",
            "title": "Hallstatt y Salzburgo",
            "location": "Múnich",
            "transport": {
                "type": "mixed",
                "icon": "🚗🚂",
                "routes": [
                    "Tren: Obertraun → Hallstatt (estación de tren)",
                    "Carro: Bad Ischl → Salzburgo: 60 km, ~1h 20min",
                    "Tren: Salzburgo → Múnich: 1h 30min"
                ],
                "carReturn": "Salzburgo - devolución del vehículo"
            },
            "accommodation": {
                "name": "Hospedaje en Múnich",
                "location": "Múnich"
            },
            "places": [
                {
                    "name": "Hallstatt",
                    "time": "Mañana",
                    "duration": "3-4 horas",
                    "description": "Pueblo patrimonio UNESCO junto al lago",
                    "type": "village",
                    "note": "Tren desde Obertraun"
                },
                {
                    "name": "Salzburgo",
                    "time": "Tarde",
                    "duration": "Resto del día",
                    "description": "Ciudad natal de Mozart, devolución del carro",
                    "type": "city",
                    "distance": "60 km desde Bad Ischl"
                },
                {
                    "name": "Traslado a Múnich",
                    "time": "Noche",
                    "duration": "1h 30min en tren",
                    "description": "Viaje nocturno a Múnich",
                    "type": "logistics"
                }
            ],
            "notes": [
                "Comprar tiquetes de tren a Hallstatt en: https://shop.oebbtickets.at/de/ticket",
                "Devolver vehículo rentado en Salzburgo",
                "Calcular hora de salida a Múnich según actividades del día",
                "Lugares en Salzburgo no definidos aún"
            ]
        },
        {
            "id": 17,
            "dayNumber": "Día 17",
            "date": "Dom 1 Nov",
            "country": "germany",
            "title": "Múnich",
            "location": "Múnich",
            "transport": {
                "type": "public",
                "icon": "🚶",
                "details": "Transporte público en la ciudad"
            },
            "accommodation": {
                "name": "Hospedaje en Múnich",
                "location": "Múnich"
            },
            "places": [
                {
                    "name": "Múnich",
                    "time": "Todo el día",
                    "description": "Día completo para recorrer Múnich",
                    "type": "city",
                    "note": "Lugares específicos no definidos"
                }
            ],
            "notes": [
                "Día completo en Múnich",
                "Lugares específicos por definir",
                "Considerar: Marienplatz, Residenz, Jardín Inglés, museos"
            ]
        },
        {
            "id": 18,
            "dayNumber": "Día 18",
            "date": "Lun 2 Nov",
            "country": "switzerland",
            "title": "Regreso a casa",
            "location": "Zúrich → San José",
            "transport": {
                "type": "mixed",
                "icon": "🚂✈️",
                "routes": [
                    "Tren: Múnich → Zúrich temprano",
                    "Vuelo: Zúrich → San José 1:50 PM"
                ]
            },
            "accommodation": null,
            "places": [
                {
                    "name": "Traslado Múnich → Zúrich",
                    "time": "Temprano",
                    "description": "Viaje en tren al aeropuerto",
                    "type": "logistics"
                },
                {
                    "name": "Vuelo de regreso",
                    "time": "1:50 PM",
                    "description": "Vuelo Zúrich - San José",
                    "type": "logistics"
                }
            ],
            "notes": [
                "Comprar tiquetes de tren en: https://int.bahn.de/es/",
                "Salida del vuelo a las 1:50 PM",
                "Calcular tiempo suficiente para llegar al aeropuerto"
            ]
        }
    ]
};