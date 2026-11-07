// ===================================
// LANDING PAGE JS - Santiago
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO: 50 arreglos florales ---
const products = [
    {
        "id": 1,
        "code": "001",
        "name": "Latido Carmesí",
        "price": 28000,
        "image": "../assets/latido-carmesi-rosa-real.webp",
        "description": "Ramo con 4 rosas rojas.",
        "categories": [
            "ramos",
            "rosas",
            "precio-bajo"
        ]
    },
    {
        "id": 2,
        "code": "002",
        "name": "Encuentro de Luz",
        "price": 31000,
        "image": "../assets/encuentro-de-luz-rosa-real.webp",
        "description": "Ramo que combina rosas, girasol y astromelias.",
        "categories": [
            "ramos",
            "rosas",
            "girasoles",
            "precio-medio"
        ]
    },
    {
        "id": 3,
        "code": "003",
        "name": "Amanecer Dorado",
        "price": 31000,
        "image": "../assets/amanecer-dorado-rosa-real.webp",
        "description": "Ramo con 6 rosas amarillas.",
        "categories": [
            "ramos",
            "rosas",
            "precio-medio"
        ]
    },
    {
        "id": 4,
        "code": "004",
        "name": "Jardín de Alegría",
        "price": 38000,
        "image": "../assets/jardin-de-alegria-rosa-real.webp",
        "description": "Arreglo con 5 rosas y 3 girasoles.",
        "categories": [
            "especiales",
            "rosas",
            "girasoles",
            "precio-medio"
        ]
    },
    {
        "id": 5,
        "code": "005",
        "name": "Fiesta de Pétalos",
        "price": 38000,
        "image": "../assets/fiesta-de-petalos-rosa-real.webp",
        "description": "Ramo con 6 rosas frescas y 6 gerberas.",
        "categories": [
            "ramos",
            "rosas",
            "gerberas",
            "precio-medio"
        ]
    },
    {
        "id": 6,
        "code": "006",
        "name": "Caricia Rosada",
        "price": 38000,
        "image": "../assets/caricia-rosada-rosa-real.webp",
        "description": "Ramo romántico con 8 rosas rosadas.",
        "categories": [
            "ramos",
            "rosas",
            "precio-medio"
        ]
    },
    {
        "id": 7,
        "code": "007",
        "name": "Dulce Armonía",
        "price": 44000,
        "image": "../assets/dulce-armonia-rosa-real.webp",
        "description": "Ramo con 3 rosas rosadas y 4 gerberas surtidas.",
        "categories": [
            "ramos",
            "rosas",
            "gerberas",
            "precio-medio"
        ]
    },
    {
        "id": 8,
        "code": "008",
        "name": "Beso de Chocolate",
        "price": 44000,
        "image": "../assets/beso-de-chocolate-rosa-real.webp",
        "description": "Ramo de rosas acompañado de chocolates Ferrero.",
        "categories": [
            "ramos",
            "rosas",
            "precio-medio"
        ]
    },
    {
        "id": 9,
        "code": "009",
        "name": "Atardecer de Ensueño",
        "price": 50000,
        "image": "../assets/atardecer-de-ensueno-rosa-real.webp",
        "description": "Ramo con 10 rosas en tonos morados y rosados.",
        "categories": [
            "ramos",
            "rosas",
            "precio-medio"
        ]
    },
    {
        "id": 10,
        "code": "010",
        "name": "Suspiro en Cristal",
        "price": 56000,
        "image": "../assets/suspiro-en-cristal-rosa-real.webp",
        "description": "Florero con 12 rosas rosadas.",
        "categories": [
            "especiales",
            "rosas",
            "precio-medio"
        ]
    },
    {
        "id": 11,
        "code": "011",
        "name": "Abrazo de Quince",
        "price": 56000,
        "image": "../assets/abrazo-de-quince-rosa-real.webp",
        "description": "Quince rosas para regalar un gesto de ternura.",
        "categories": [
            "ramos",
            "rosas",
            "precio-medio"
        ]
    },
    {
        "id": 12,
        "code": "012",
        "name": "Encanto Sutil",
        "price": 56000,
        "image": "../assets/encanto-sutil-rosa-real.webp",
        "description": "Composición floral de estilo elegante y delicado.",
        "categories": [
            "especiales",
            "precio-medio"
        ]
    },
    {
        "id": 13,
        "code": "013",
        "name": "Brisa Floral",
        "price": 56000,
        "image": "../assets/brisa-floral-rosa-real.webp",
        "description": "Una composición que reúne frescura y armonía.",
        "categories": [
            "especiales",
            "precio-medio"
        ]
    },
    {
        "id": 14,
        "code": "014",
        "name": "Sol de Pasión",
        "price": 61000,
        "image": "../assets/sol-de-pasion-rosa-real.webp",
        "description": "Arreglo floral de inspiración luminosa y apasionada.",
        "categories": [
            "especiales",
            "precio-medio"
        ]
    },
    {
        "id": 15,
        "code": "015",
        "name": "Canasta Primavera",
        "price": 63000,
        "image": "../assets/canasta-primavera-rosa-real.webp",
        "description": "Canasta surtida con gerberas, rosas y claveles.",
        "categories": [
            "canastas",
            "rosas",
            "gerberas",
            "precio-medio"
        ]
    },
    {
        "id": 16,
        "code": "016",
        "name": "Rayos de Cariño",
        "price": 63000,
        "image": "../assets/rayos-de-carino-rosa-real.webp",
        "description": "Ramo con 2 girasoles, 5 rosas y claveles.",
        "categories": [
            "ramos",
            "rosas",
            "girasoles",
            "precio-medio"
        ]
    },
    {
        "id": 17,
        "code": "017",
        "name": "Romance de Lilium",
        "price": 63000,
        "image": "../assets/romance-de-lilium-rosa-real.webp",
        "description": "Ramo que reúne rosas y lilium.",
        "categories": [
            "ramos",
            "rosas",
            "lilium",
            "precio-medio"
        ]
    },
    {
        "id": 18,
        "code": "018",
        "name": "Docena Radiante",
        "price": 75000,
        "image": "../assets/docena-radiante-rosa-real.webp",
        "description": "Doce rosas acompañadas de un girasol.",
        "categories": [
            "ramos",
            "rosas",
            "girasoles",
            "precio-medio"
        ]
    },
    {
        "id": 19,
        "code": "019",
        "name": "Dulzura del Sol",
        "price": 75000,
        "image": "../assets/dulzura-del-sol-rosa-real.webp",
        "description": "Girasoles con chocolates y banda personalizada.",
        "categories": [
            "ramos",
            "girasoles",
            "precio-medio"
        ]
    },
    {
        "id": 20,
        "code": "020",
        "name": "Luz de Jardín",
        "price": 88000,
        "image": "../assets/luz-de-jardin-rosa-real.webp",
        "description": "Bouquet mixto con girasol y rosas.",
        "categories": [
            "ramos",
            "rosas",
            "girasoles",
            "premium",
            "precio-alto"
        ]
    },
    {
        "id": 21,
        "code": "021",
        "name": "Delicadeza Real",
        "price": 100000,
        "image": "../assets/delicadeza-real-rosa-real.webp",
        "description": "Arreglo floral de presentación fina y delicada.",
        "categories": [
            "especiales",
            "premium",
            "precio-alto"
        ]
    },
    {
        "id": 22,
        "code": "022",
        "name": "Resplandor Carmesí",
        "price": 113000,
        "image": "../assets/resplandor-carmesi-rosa-real.webp",
        "description": "Ramo de rosas rojas y girasoles.",
        "categories": [
            "ramos",
            "rosas",
            "girasoles",
            "premium",
            "precio-alto"
        ]
    },
    {
        "id": 23,
        "code": "023",
        "name": "Promesa de Cincuenta",
        "price": 188000,
        "image": "../assets/promesa-de-cincuenta-rosa-real.webp",
        "description": "Ramo de 50 rosas con gypsophila y banda personalizada.",
        "categories": [
            "ramos",
            "rosas",
            "premium",
            "precio-alto"
        ]
    },
    {
        "id": 24,
        "code": "024",
        "name": "Dulce Compromiso",
        "price": 213000,
        "image": "../assets/dulce-compromiso-rosa-real.webp",
        "description": "Ramo para expresar una promesa de amor.",
        "categories": [
            "ramos",
            "premium",
            "precio-alto"
        ]
    },
    {
        "id": 25,
        "code": "025",
        "name": "Pasión y Susurros",
        "price": 263000,
        "image": "../assets/pasion-y-susurros-rosa-real.webp",
        "description": "Composición floral inspirada en la pasión y la elegancia.",
        "categories": [
            "especiales",
            "premium",
            "precio-alto"
        ]
    },
    {
        "id": 26,
        "code": "026",
        "name": "Trío de Alegría",
        "price": 19000,
        "image": "../assets/trio-de-alegria-rosa-real.webp",
        "description": "Ramo con 3 gerberas.",
        "categories": [
            "ramos",
            "gerberas",
            "precio-bajo"
        ]
    },
    {
        "id": 27,
        "code": "027",
        "name": "Tres Soles",
        "price": 19000,
        "image": "../assets/tres-soles-rosa-real.webp",
        "description": "Ramo con 3 girasoles.",
        "categories": [
            "ramos",
            "girasoles",
            "precio-bajo"
        ]
    },
    {
        "id": 28,
        "code": "028",
        "name": "Rubor de Gerberas",
        "price": 23000,
        "image": "../assets/rubor-de-gerberas-rosa-real.webp",
        "description": "Ramo con 3 gerberas rosadas.",
        "categories": [
            "ramos",
            "gerberas",
            "precio-bajo"
        ]
    },
    {
        "id": 29,
        "code": "029",
        "name": "Sol Campestre",
        "price": 25000,
        "image": "../assets/sol-campestre-rosa-real.webp",
        "description": "Ramo con 3 girasoles y statice.",
        "categories": [
            "ramos",
            "girasoles",
            "precio-bajo"
        ]
    },
    {
        "id": 30,
        "code": "030",
        "name": "Pequeño Romance",
        "price": 25000,
        "image": "../assets/pequeno-romance-rosa-real.webp",
        "description": "Ramo con 4 rosas rosadas y 2 gerberas.",
        "categories": [
            "ramos",
            "rosas",
            "gerberas",
            "precio-bajo"
        ]
    },
    {
        "id": 31,
        "code": "031",
        "name": "Cruz de Paz",
        "price": 113000,
        "image": "../assets/cruz-de-paz-rosa-real.webp",
        "description": "Corona fúnebre en forma de cruz.",
        "categories": [
            "funebres",
            "coronas-funebres",
            "premium",
            "precio-alto"
        ]
    },
    {
        "id": 32,
        "code": "032",
        "name": "Memoria Blanca",
        "price": 113000,
        "image": "../assets/memoria-blanca-rosa-real.webp",
        "description": "Corona con 24 rosas blancas y 10 lilium blancos.",
        "categories": [
            "funebres",
            "coronas-funebres",
            "rosas",
            "lilium",
            "premium",
            "precio-alto"
        ]
    },
    {
        "id": 33,
        "code": "033",
        "name": "Canasta de Consuelo",
        "price": 56000,
        "image": "../assets/canasta-de-consuelo-rosa-real.webp",
        "description": "Canasta fúnebre con rosas, lilium y claveles blancos.",
        "categories": [
            "funebres",
            "coronas-funebres",
            "rosas",
            "lilium",
            "precio-medio"
        ]
    },
    {
        "id": 34,
        "code": "034",
        "name": "Recuerdo Sereno",
        "price": 69000,
        "image": "../assets/recuerdo-sereno-rosa-real.webp",
        "description": "Corona fúnebre con 10 rosas blancas y 8 gerberas.",
        "categories": [
            "funebres",
            "coronas-funebres",
            "rosas",
            "gerberas",
            "precio-medio"
        ]
    },
    {
        "id": 35,
        "code": "035",
        "name": "Tributo de Luz",
        "price": 100000,
        "image": "../assets/tributo-de-luz-rosa-real.webp",
        "description": "Corona fúnebre con 12 rosas y 8 lilium.",
        "categories": [
            "funebres",
            "coronas-funebres",
            "rosas",
            "lilium",
            "premium",
            "precio-alto"
        ]
    },
    {
        "id": 36,
        "code": "036",
        "name": "Paz Eterna",
        "price": 119000,
        "image": "../assets/paz-eterna-rosa-real.webp",
        "description": "Homenaje fúnebre con 50 rosas.",
        "categories": [
            "funebres",
            "coronas-funebres",
            "rosas",
            "premium",
            "precio-alto"
        ]
    },
    {
        "id": 37,
        "code": "037",
        "name": "Legado de Amor",
        "price": 300000,
        "image": "../assets/legado-de-amor-rosa-real.webp",
        "description": "Corona fúnebre con rosas blancas y rojas.",
        "categories": [
            "funebres",
            "coronas-funebres",
            "rosas",
            "premium",
            "precio-alto"
        ]
    },
    {
        "id": 38,
        "code": "038",
        "name": "Homenaje del Alma",
        "price": 81000,
        "image": "../assets/homenaje-del-alma-rosa-real.webp",
        "description": "Homenaje floral de estilo elegante y espiritual.",
        "categories": [
            "funebres",
            "coronas-funebres",
            "premium",
            "precio-alto"
        ]
    },
    {
        "id": 39,
        "code": "039",
        "name": "Amor que Permanece",
        "price": 238000,
        "image": "../assets/amor-que-permanece-rosa-real.webp",
        "description": "Homenaje floral para expresar amor y serenidad.",
        "categories": [
            "funebres",
            "coronas-funebres",
            "premium",
            "precio-alto"
        ]
    },
    {
        "id": 40,
        "code": "040",
        "name": "Luz del Recuerdo",
        "price": 69000,
        "image": "../assets/luz-del-recuerdo-rosa-real.webp",
        "description": "Corona con 5 rosas y 7 lilium.",
        "categories": [
            "funebres",
            "coronas-funebres",
            "rosas",
            "lilium",
            "precio-medio"
        ]
    },
    {
        "id": 41,
        "code": "041",
        "name": "Sinfonía de Lilium",
        "price": 44000,
        "image": "../assets/sinfonia-de-lilium-rosa-real.webp",
        "description": "Bouquet con 10 lilium frescos.",
        "categories": [
            "ramos",
            "lilium",
            "precio-medio"
        ]
    },
    {
        "id": 42,
        "code": "042",
        "name": "Tulipanes de Ensueño",
        "price": 44000,
        "image": "../assets/tulipanes-de-ensueno-rosa-real.webp",
        "description": "Ramo con 10 tulipanes bicolor.",
        "categories": [
            "ramos",
            "tulipanes",
            "precio-medio"
        ]
    },
    {
        "id": 43,
        "code": "043",
        "name": "Nube de Tulipanes",
        "price": 63000,
        "image": "../assets/nube-de-tulipanes-rosa-real.webp",
        "description": "Ramo con 15 tulipanes blancos y gypsophila tinturada.",
        "categories": [
            "ramos",
            "tulipanes",
            "precio-medio"
        ]
    },
    {
        "id": 44,
        "code": "044",
        "name": "Seis Amaneceres",
        "price": 31000,
        "image": "../assets/seis-amaneceres-rosa-real.webp",
        "description": "Ramo con 6 girasoles naturales.",
        "categories": [
            "ramos",
            "girasoles",
            "precio-medio"
        ]
    },
    {
        "id": 45,
        "code": "045",
        "name": "Gran Amor Real",
        "price": 400000,
        "image": "../assets/gran-amor-real-rosa-real.webp",
        "description": "Ramo de 100 rosas con 50 chocolates Tiara y banda.",
        "categories": [
            "ramos",
            "rosas",
            "premium",
            "precio-alto"
        ]
    },
    {
        "id": 46,
        "code": "046",
        "name": "Campo de Sol",
        "price": 63000,
        "image": "../assets/campo-de-sol-rosa-real.webp",
        "description": "Ramo de girasoles.",
        "categories": [
            "ramos",
            "girasoles",
            "precio-medio"
        ]
    },
    {
        "id": 47,
        "code": "047",
        "name": "Encuentro Primaveral",
        "price": 63000,
        "image": "../assets/encuentro-primaveral-rosa-real.webp",
        "description": "Arreglo de rosas y gerberas naturales.",
        "categories": [
            "especiales",
            "rosas",
            "gerberas",
            "precio-medio"
        ]
    },
    {
        "id": 48,
        "code": "048",
        "name": "Canasta de Encanto",
        "price": 113000,
        "image": "../assets/canasta-de-encanto-rosa-real.webp",
        "description": "Canasta con gerberas y tulipanes.",
        "categories": [
            "canastas",
            "gerberas",
            "tulipanes",
            "premium",
            "precio-alto"
        ]
    },
    {
        "id": 49,
        "code": "049",
        "name": "Escalera de Pureza",
        "price": 40000,
        "image": "../assets/escalera-de-pureza-rosa-real.webp",
        "description": "Composición floral de siete niveles inspirada en la pureza.",
        "categories": [
            "especiales",
            "precio-medio"
        ]
    },
    {
        "id": 50,
        "code": "050",
        "name": "Jardín Rosa Real",
        "price": 100000,
        "image": "../assets/jardin-rosa-real-rosa-real.webp",
        "description": "Ramo especial de flores surtidas.",
        "categories": [
            "ramos",
            "premium",
            "precio-alto"
        ]
    }
];


/* ============================================================
   PROMOCIÓN DE LA SEMANA
   Contador semanal (cierra cada domingo a las 23:59) y banner
   de sección. Todo el movimiento se hace con transform/opacity,
   así el navegador lo resuelve en la GPU y no re-calcula el layout.
   ============================================================ */
var semanaCdTimer = null;

/* La promo cierra el domingo de la semana en curso a las 23:59:59
   (hora local del visitante). Se recalcula sola: el lunes parte de nuevo,
   así que no hay que editar fechas cada semana. */
function semanaDeadline() {
    var now = new Date();
    var end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
    var dow = now.getDay(); // 0 = domingo
    end.setDate(end.getDate() + (dow === 0 ? 0 : 7 - dow));
    return end.getTime();
}

function semanaTimeLeft() {
    var diff = semanaDeadline() - Date.now();
    if (diff <= 0) return null;
    return {
        d: Math.floor(diff / 86400000),
        h: Math.floor(diff / 3600000) % 24,
        m: Math.floor(diff / 60000) % 60,
        s: Math.floor(diff / 1000) % 60
    };
}

function semanaCountdownHTML(compact) {
    var labels = { d: 'días', h: 'hrs', m: 'min', s: 'seg' };
    var units = ['d', 'h', 'm', 's'].map(function (u) {
        return '<div class="semana-cd-unit"><span class="semana-cd-num" data-cd="' + u + '">--</span>' +
               '<span class="semana-cd-lbl">' + labels[u] + '</span></div>';
    }).join('');
    return '<div class="semana-countdown' + (compact ? ' semana-cd-compact' : '') + '" data-semana-cd>' + units + '</div>';
}

function startSemanaCountdown() {
    if (semanaCdTimer) { clearInterval(semanaCdTimer); semanaCdTimer = null; }
    function tick() {
        var t = semanaTimeLeft();
        var boxes = document.querySelectorAll('[data-semana-cd]');
        if (!boxes.length) return;
        for (var i = 0; i < boxes.length; i++) {
            if (!t) { boxes[i].innerHTML = '<div class="semana-cd-unit"><span class="semana-cd-num">¡HOY!</span><span class="semana-cd-lbl">último día</span></div>'; continue; }
            var nums = boxes[i].querySelectorAll('[data-cd]');
            for (var j = 0; j < nums.length; j++) {
                var v = t[nums[j].getAttribute('data-cd')];
                var txt = v < 10 ? '0' + v : '' + v;
                if (nums[j].textContent !== txt) nums[j].textContent = txt;
            }
        }
    }
    tick();
    semanaCdTimer = setInterval(tick, 1000);
}

function semanaBannerHTML(count) {
    return '<div class="semana-banner">' +
             '<div class="semana-banner-text">' +
               '<h2><span class="semana-crown">✦</span>Promoción de la <span class="semana-gold">Semana</span></h2>' +
               '<p>' + count + ' arreglos seleccionados con hasta <strong>22% de descuento</strong> · Solo hasta el domingo</p>' +
             '</div>' +
             semanaCountdownHTML(false) +
           '</div>';
}

function semanaCardOverlay(product) {
    if (!product.semana) return '';
    var badge = '';
    if (product.originalPrice && product.originalPrice > product.price) {
        var off = Math.round((1 - product.price / product.originalPrice) * 100);
        badge = '<div class="semana-savings">-' + off + '%<small>DCTO</small></div>';
    }
    return '<div class="semana-ribbon"><span class="semana-spark">✦</span> PROMO DE LA SEMANA <span class="semana-spark">✦</span></div>' + badge;
}

// --- VARIABLES GLOBALES ---
let currentLandingFilter = 'todos';
let currentSearchQuery = '';
let LANDING_PRIORITY_TAG = '';

// --- QUITAR TILDES para búsqueda ---
function removeAccents(str) {
    return str.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

// --- FORMATEO DE PRECIO (CLP) ---
function formatCLP(price) {
    if (price === 0) return 'Cotización';
    return new Intl.NumberFormat('es-CL', {
        style: 'currency', currency: 'CLP', minimumFractionDigits: 0, maximumFractionDigits: 0
    }).format(price);
}
// Alias por compatibilidad
function formatCOP(price) { return formatCLP(price); }

/* ============================================================
   PROMOCIÓN ARREGLOS FÚNEBRES
   Los productos con funebrePromo: true se muestran justo debajo
   de la Promoción de la Semana, con su propio banner, y en un
   flyer flotante que se cierra solo a los 5 segundos.
   ============================================================ */
function funebreBannerHTML(list) {
    var maxOff = 0;
    list.forEach(function (p) {
        if (p.originalPrice > p.price) maxOff = Math.max(maxOff, Math.round((1 - p.price / p.originalPrice) * 100));
    });
    return '<div class="funebre-banner" id="promo-funebre">' +
             '<div class="funebre-banner-text">' +
               '<h2>Promoción <span class="funebre-silver">Arreglos Fúnebres</span></h2>' +
               '<p>Expresa tus condolencias con un homenaje floral y entrega a domicilio en Santiago</p>' +
             '</div>' +
             '<div class="funebre-banner-tag">Hasta ' + maxOff + '% de descuento</div>' +
           '</div>';
}

function funebreCardOverlay(product) {
    if (!product.funebrePromo || product.semana) return '';
    var badge = '';
    if (product.originalPrice && product.originalPrice > product.price) {
        var off = Math.round((1 - product.price / product.originalPrice) * 100);
        badge = '<div class="funebre-savings">-' + off + '%<small>DCTO</small></div>';
    }
    return '<div class="funebre-ribbon"><span>❀</span> PROMO FÚNEBRE <span>❀</span></div>' + badge;
}

function showFunebreFlyer() {
    var list = products.filter(function (p) { return p.funebrePromo; }).sort(function (a, b) { return a.price - b.price; });
    if (!list.length || document.getElementById('ff-overlay')) return;
    var items = list.map(function (p) {
        var off = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
        return '<button type="button" class="ff-item" data-code="' + p.code + '">' +
                 (off ? '<span class="ff-off">-' + off + '%</span>' : '') +
                 '<img src="' + p.image + '" alt="' + p.name + '">' +
                 '<div class="ff-info">' +
                   '<p class="ff-name">' + p.name + '</p>' +
                   (p.originalPrice ? '<span class="ff-old">Antes ' + formatCLP(p.originalPrice) + '</span>' : '') +
                   '<span class="ff-new">' + formatCLP(p.price) + '</span>' +
                 '</div>' +
               '</button>';
    }).join('');

    var overlay = document.createElement('div');
    overlay.className = 'ff-overlay';
    overlay.id = 'ff-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Promoción de arreglos fúnebres');
    overlay.innerHTML =
        '<div class="ff-card">' +
          '<button class="ff-close" type="button" aria-label="Cerrar">&times;</button>' +
          '<div class="ff-head">' +
            '<span class="ff-kicker">Promoción especial</span>' +
            '<h3>Arreglos Fúnebres</h3>' +
            '<p>Haz llegar tu cariño y respeto en los momentos de despedida</p>' +
          '</div>' +
          '<div class="ff-progress"><span></span></div>' +
          '<div class="ff-items">' + items + '</div>' +
          '<div class="ff-foot"><button class="ff-cta" type="button">Ver promoción</button></div>' +
        '</div>';
    document.body.appendChild(overlay);

    var timer = null;
    function close() {
        if (!overlay.parentNode) return;
        clearTimeout(timer);
        overlay.classList.remove('ff-show');
        document.removeEventListener('keydown', onKey);
        setTimeout(function () { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 380);
    }
    function onKey(e) { if (e.key === 'Escape') close(); }

    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    overlay.querySelector('.ff-close').addEventListener('click', close);
    overlay.querySelectorAll('.ff-item').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var p = list.find(function (x) { return x.code === btn.getAttribute('data-code'); });
            close();
            if (p) orderWA(p.name, p.price, p.code);
        });
    });
    overlay.querySelector('.ff-cta').addEventListener('click', function () {
        close();
        var target = document.getElementById('promo-funebre');
        if (!target) {
            currentSearchQuery = '';
            var si = document.getElementById('search-input'); if (si) si.value = '';
            filterProducts('todos');
            target = document.getElementById('promo-funebre');
        }
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    document.addEventListener('keydown', onKey);

    requestAnimationFrame(function () {
        requestAnimationFrame(function () { overlay.classList.add('ff-show', 'ff-run'); });
    });
    timer = setTimeout(close, 5000); // se cierra solo a los 5 segundos
}

// Flyer flotante al cargar la landing
window.addEventListener('load', function () { setTimeout(showFunebreFlyer, 700); });

// --- ORDENAR PRODUCTOS: primero los de la categoría de la landing ---
function getSortedProducts(priorityTag) {
    const priority = [];
    const rest = [];
    products.forEach(p => {
        if (p.categories && p.categories.includes(priorityTag)) {
            priority.push(p);
        } else {
            rest.push(p);
        }
    });
    priority.sort((a, b) => a.price - b.price);
    rest.sort((a, b) => a.price - b.price);
    return [...priority, ...rest];
}

// --- ACTUALIZAR CONTADOR DE RESULTADOS ---
function updateResultsCount(count) {
    const counter = document.getElementById('results-count');
    if (counter) counter.textContent = count;
    const emptyState = document.getElementById('empty-state');
    if (emptyState) emptyState.style.display = count === 0 ? 'block' : 'none';
}

// --- FUNCIÓN PARA RENDERIZAR PRODUCTOS ---
function renderProducts(filters = [], limit = null) {
    const container = document.querySelector('.products-container');
    if (!container) return;

    let productsToDisplay = products;

    if (LANDING_PRIORITY_TAG) {
        productsToDisplay = getSortedProducts(LANDING_PRIORITY_TAG);
    }

    // Filtrar por categoría
    if (filters.length > 0 && filters[0] !== 'todos') {
        productsToDisplay = productsToDisplay.filter(p =>
            filters.some(f => p.categories && p.categories.includes(f))
        );
    }

    // Filtrar por búsqueda (sin tildes) - incluye código
    if (currentSearchQuery) {
        const query = removeAccents(currentSearchQuery);
        productsToDisplay = productsToDisplay.filter(p => {
            const name = removeAccents(p.name);
            const desc = removeAccents(p.description);
            const code = (p.code || '').toLowerCase();
            const cats = p.categories ? p.categories.map(c => removeAccents(c)).join(' ') : '';
            return name.includes(query) || desc.includes(query) || cats.includes(query) || code.includes(query);
        });
    }

    const semanaProducts = productsToDisplay.filter(p => p.semana);
    const funebrePromo = productsToDisplay.filter(p => p.funebrePromo);
    productsToDisplay = orderProductsByPriceRows(productsToDisplay);

    if (limit) {
        productsToDisplay = productsToDisplay.slice(0, limit);
    }

    updateResultsCount(productsToDisplay.length);

    const htmlParts = [];
    if (semanaProducts.length) htmlParts.push(semanaBannerHTML(semanaProducts.length));
    let funebreBannerDone = false;
    productsToDisplay.forEach(product => {
        if (!funebreBannerDone && product.funebrePromo && !product.semana && !product.peluche) {
            htmlParts.push(funebreBannerHTML(funebrePromo));
            funebreBannerDone = true;
        }
        const escapedName = product.name.replace(/'/g, "\\'");
        const hasVariations = Array.isArray(product.variations) && product.variations.length > 1;
        const imageHTML = hasVariations
            ? `<div class="product-image has-carousel" data-code="${product.code}">
                  ${product.variations.map((src, i) => `<img src="${src}" alt="${product.name} variante ${i+1}" class="carousel-img${i===0?' active':''}" data-index="${i}" loading="lazy">`).join('')}
                  <div class="carousel-dots">
                      ${product.variations.map((_, i) => `<span class="carousel-dot${i===0?' active':''}" data-index="${i}"></span>`).join('')}
                  </div>
                  <span class="carousel-counter"><span class="carousel-current">1</span>/${product.variations.length}</span>
              </div>`
            : `<div class="product-image">
                  <img src="${product.image}" alt="${product.name} - Flores a domicilio Santiago" loading="lazy">
              </div>`;
        const promoOverlay = product.semana ? semanaCardOverlay(product) : product.funebrePromo ? funebreCardOverlay(product) : (product.promo ? `
            <div class="promo-ribbon"><span class="promo-spark">✦</span> OFERTA <span class="promo-spark">✦</span></div>
            <div class="promo-savings">-${Math.round((1 - product.price/product.originalPrice)*100)}%</div>
        ` : '');
        const peluchePriceHTML = `<div class="price-block">
                   <span class="peluche-note">Precio a consultar</span>
                   <span class="peluche-quote">Cotizar peluche</span>
               </div>`;
        const priceHTML = product.peluche ? peluchePriceHTML : product.originalPrice
            ? `<div class="price-block">
                   <span class="old-price">${formatCLP(product.originalPrice)}</span>
                   <span class="price promo-price">${formatCLP(product.price)}</span>
               </div>`
            : `<span class="price">${formatCLP(product.price)}</span>`;
        const productHTML = `
            <div class="product-item ${product.semana ? 'semana-card' : (product.peluche ? 'peluche-card' : (product.funebrePromo ? 'funebre-promo-card' : (product.promo ? 'promo-card' : '')))}" data-code="${product.code}">
                ${promoOverlay}
                ${product.peluche ? `<div class="peluche-ribbon">🧸 PELUCHE</div>` : ''}
                ${imageHTML}
                <div class="product-info">
                    <span class="product-code">Cód. ${product.code}</span>
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-footer">
                        ${priceHTML}
                        <button class="btn-order" onclick="orderWA('${escapedName}', '${product.price}', '${product.code}')">
                            ${product.peluche ? 'Cotizar peluche' : 'Pedir por WhatsApp'}
                        </button>
                    </div>
                </div>
            </div>
        `;
        htmlParts.push(productHTML);
    });
    container.innerHTML = htmlParts.join('');

    if (semanaProducts.length) startSemanaCountdown();
    initLandingCarousels();
}

// --- CAROUSEL para variaciones de producto ---
let landingCarouselTimers = [];
function initLandingCarousels() {
    landingCarouselTimers.forEach(t => clearInterval(t));
    landingCarouselTimers = [];
    document.querySelectorAll('.product-image.has-carousel').forEach(carousel => {
        const imgs = carousel.querySelectorAll('.carousel-img');
        const dots = carousel.querySelectorAll('.carousel-dot');
        const counter = carousel.querySelector('.carousel-current');
        if (imgs.length <= 1) return;
        let current = 0;
        const setActive = (idx) => {
            imgs[current].classList.remove('active');
            if (dots[current]) dots[current].classList.remove('active');
            current = (idx + imgs.length) % imgs.length;
            imgs[current].classList.add('active');
            if (dots[current]) dots[current].classList.add('active');
            if (counter) counter.textContent = current + 1;
        };
        const timer = setInterval(() => setActive(current + 1), 3000);
        landingCarouselTimers.push(timer);
        dots.forEach((dot, i) => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                setActive(i);
            });
        });
    });
}

// --- FUNCIONES DE WHATSAPP CON GOOGLE ADS CONVERSION ---
function contactWA() {
    const url = 'https://wa.me/56949170969?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20flores.%20%C2%BFPodr%C3%ADan%20ayudarme%3F';
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-18163228199/iTZDCLCAzsocEKe889RD',
            'value': 1.0,
            'currency': 'CLP',
            'event_callback': function () {
                window.open(url, '_blank');
            }
        });
    } catch (e) {
        window.open(url, '_blank');
    }
}

function orderWA(productName, price, code) {
    const prefix = code ? `Cód. ${code} - ` : '';
    const value = parseFloat(price);
    const message = (!value || value === 0)
        ? `Hola, quiero cotizar el peluche ${prefix}${productName}. ¿Me das precio y disponibilidad?`
        : `Hola, me interesa ${prefix}${productName} (${formatCLP(value)}). ¿Podrías darme más información?`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/56949170969?text=${encodedMessage}`;
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-18163228199/iTZDCLCAzsocEKe889RD',
            'value': 1.0,
            'currency': 'CLP',
            'event_callback': function () {
                window.open(url, '_blank');
            }
        });
    } catch (e) {
        window.open(url, '_blank');
    }
}

// --- FILTRADO DE PRODUCTOS ---
function filterProducts(tag) {
    currentLandingFilter = tag;
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-filter') === tag) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (tag === 'todos') {
        renderProducts();
    } else {
        renderProducts([tag]);
    }
}

// --- INICIALIZAR CATÁLOGO COMPLETO ---
function injectSemanaFilterChip() {
    const bar = document.querySelector('.filters-container');
    if (!bar || bar.querySelector('[data-filter="semana"]')) return;
    if (!products.some(p => p.semana)) return;
    const chip = document.createElement('button');
    chip.className = 'filter-btn semana-filter';
    chip.setAttribute('data-filter', 'semana');
    chip.textContent = '✦ Promo de la Semana';
    const todos = bar.querySelector('[data-filter="todos"]');
    if (todos && todos.nextSibling) bar.insertBefore(chip, todos.nextSibling);
    else bar.appendChild(chip);
}


function initCatalog() {
    window._catalogInitialized = true;
    injectSemanaFilterChip();
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filterProducts(this.getAttribute('data-filter'));
        });
    });

    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearchQuery = this.value.trim();
            if (searchClear) searchClear.style.display = currentSearchQuery ? 'block' : 'none';
            if (currentLandingFilter === 'todos') {
                renderProducts();
            } else {
                renderProducts([currentLandingFilter]);
            }
        });
    }
    if (searchClear) {
        searchClear.addEventListener('click', function() {
            searchInput.value = '';
            currentSearchQuery = '';
            this.style.display = 'none';
            if (currentLandingFilter === 'todos') {
                renderProducts();
            } else {
                renderProducts([currentLandingFilter]);
            }
        });
    }

    renderProducts();
}

// Inicializar automáticamente
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        if (!window._catalogInitialized) {
            initCatalog();
        }
    }, 50);
});
