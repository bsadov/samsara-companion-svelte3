import { writable } from 'svelte/store'

const scenes = 
    [{
        name: 'Movie Start',
        key: 0,
        start: 0,
        end: 19,
        location:'None',
        search: 'None',
        coordinates: 'None',
        info: '<strong>From Wikipedia</strong>: Samsara is a 2011 American non-narrative documentary film of international imagery directed by Ron Fricke and produced by Mark Magidson, who also collaborated on Baraka (1992), a film of a similar vein, and Chronos (1985).',
    },
    {
        name: 'Balinese Tari Legong Dancers',
        key: 1,
        start: 20,
        end: 109,
        location: 'Bali, Indonesia',
        search: 'Tri+Pusaka+Sakti+Arts+Foundation',
        coordinates: '-8.584905,115.276968&zoom=4',
        info: '<a href="https://pusakasaktiarts.com/" target="_blank">Tri Pusaka Sakti Art Foundation</a><br><a href="https://en.wikipedia.org/wiki/Legong" target="_blank">From Wikipedia: </a>Lelong is a form of Balinese dance. It is a refined dance form characterized by intricate finger movements, complicated footwork, and expressive gestures and facial expressions.',
    },
    {
        name: 'Kilauea Volcano',
        key: 2,
        start: 110,
        end: 213,
        location:'Hawai\'i, Hawaii',
        search: 'Kīlauea+Volcano',
        coordinates: '19.406280,-155.283678&zoom=6',
        info: 'None',
    },
    {
        name: 'Unnamed Preserved Fetus',
        key: 3,
        start: 214,
        end: 245,
        location:'None',
        search: 'None',
        coordinates: 'None',
        info: 'None',
    },
    {
        name: 'Tollund Man',
        key: 4,
        start: 246,
        end: 261,
        location:'Silkeborg, Denmark',
        search: 'Silkeborg+Museum+Hovedgården',
        coordinates: '56.169070,9.552999&zoom=5',
        info: 'Silkeborg Museum, Hovedgården',
    },
    {
        name: 'Mask of Tutankhamun',
        key: 5,
        start: 262,
        end: 290,
        location:'Cairo, Egypt',
        search: 'Museum+of+Egyptian+Antiquities&zoom=5',
        coordinates: '30.048297,31.233638',
        info: 'The Museum of Egyptian Antiquities',
    },
    {
        name: 'Title Drop',
        key: 6,
        start: 291,
        end: 314,
        location:'None',
        search: 'None',
        coordinates: 'None',
        info: 'None',
    },
    {
        name: 'Taung Kalat Monastery',
        key: 7,
        start: 315,
        end: 350,
        location:'Mount Popa, Myanmar',
        search: 'Taung+Kalat+Monastery',
        coordinates: '20.912974,95.208672&zoom=6',
        info: 'None',
    },
    {
        name: 'Bagan Archaeological Zone',
        key: 8,
        start: 351,
        end: 476,
        location:'Old Bagan, Mandalay Region, Myanmar',
        search: 'Bagan+Archaeological+Zone',
        coordinates: '21.168226,94.856173&zoom=6',
        info: 'None',
    },
    {
        name: 'Statue of Maitreya Buddha',
        key: 9,
        start: 477,
        end: 498,
        location:'Thiksey, Ladakh Territory, India',
        search: 'Thiksey+Monastery',
        coordinates: '34.056964,77.666946&zoom=5',
        info: 'Thiksey Monastery',
    },
    {
        name: 'Thiksey Monastery',
        key: 10,
        start: 499,
        end: 555,
        location:'Thiksey, Ladakh Territory, India',
        search: 'Thiksey+Monastery',
        coordinates: '34.056964,77.666946&zoom=6',
        info: 'None',
    },
    {
        name: 'Je Tsongkhapa - Prayer Wheel',
        key: 11,
        start: 556,
        end: 585,
        location:'Thiksey, Ladakh Territory, India',
        search: 'Thiksey+Monastery',
        coordinates: '34.056964,77.666946&zoom=7',
        info: 'Thiksey Monastery',
    },
    {
        name: 'Sand mandala',
        key: 12,
        start: 586,
        end: 730,
        location:'Thiksey, Ladakh Territory, India',
        search: 'Thiksey+Monastery',
        coordinates: '34.056964,77.666946&zoom=8',
        info: 'Thiksey Monastery',
    }]

export let seconds = writable(0)
export let storedcurrent = writable(scenes[0])
export let storedscenes = writable(scenes)

export function formatTime(n){
    const h = Math.floor(n / 3600).toString().padStart(2,'0'),
    m = Math.floor(n % 3600 / 60).toString().padStart(2,'0'),
    s = Math.floor(n % 60).toString().padStart(2,'0')

    return h + ':' + m + ':' + s
}



/* [00:00:20] - [00:00:28]** Balinese Tari Legong dancers, Indonesia
[00:01:50] - [00:01:58]** Kilauea Volcano, Hawaii
[00:04:30] - [00:04:38]** The Museum of Egyptian Antiquities
[00:05:35] - [00:05:43]** Popa Taungkalat Monastery, Bagan Myanmar
[00:05:51] - [00:05:59]** Bagan, Myanmar
[00:08:22] - [00:08:30]** Thiksey Monastery, Leh Ladakh India
[00:13:07] - [00:13:15] Mt. Nemrut National Park, Adiyaman, Turkey
[00:14:24] - [00:14:32] Petra,Jordan
[00:15:10] - [00:15:18] Cappadocia,Turkey
[00:15:33] - [00:15:41] Dogon Village, Bandiagara Escarpment Cliff dwellings near terelli, Mali
[00:16:07] - [00:16:15] Kolmanskop Namibia
[00:17:30] - [00:17:38] Katrina House, Ninth Ward, New Orleans
[00:18:19] - [00:18:27] Ninth Ward, New Orleans
[00:19:32] - [00:19:40] Chateau de Versailles, France
[00:20:50] - [00:20:58] Divino, Salvador Church, Sao Paulo Brazil
[00:21:43] - [00:21:51] Cathedral de Notre Dame de Reims
[00:22:17] - [00:22:25] Cathedral Notre Dame de Paris
[00:23:03] - [00:23:11] Convento dei Cappuccini, Palermo
[00:23:30] - [00:23:38] La Sainte Chapelle
[00:23:50] - [00:23:58] Mont Saint Michel
[00:24:29] - [00:24:37] Naukluft National Park, Sossusvlei, Namibia
[00:26:55] - [00:27:03] Ron Mt. Blanc, France
[00:28:13] - [00:28:21] Arches National Park, Utah USA
[00:28:39] - [00:28:47] Monument Valley, Arizona USA
[00:28:50] - [00:28:58] Antelope Canyon
[00:29:43] - [00:29:51] Epupa Falls, Angola
[00:30:30] - [00:30:38] Omo, Mursi Mursi tribes, Omo Valley, Ethiopia
[00:31:49] - [00:31:57] Himba village, Kunene Namibia
[00:34:09] - [00:34:17] Marcos Luna tattoo daddy, America
[00:36:18] - [00:36:26] Hiroshi Ishiguro Professor and Robot Clone, Japan
[00:37:24] - [00:37:32] Oloiver de Sagazan, Paris
[00:40:03] - [00:40:09] Toshimaen/Hydropolis,tokyo
[00:40:10] - [00:40:18] Lotte Kasai Golf, Chiba
[00:40:34] - [00:40:42] Ski Dubai
[00:41:29] - [00:41:37] Burj Khalifa Tower
[00:42:53] - [00:43:01] Burj Al Arab Hotel
[00:44:37] - [00:44:44] Galleria Vittorio Emanuele Milan, Italy
[00:44:46] - [00:44:54] Teatro alla Scala, Italy
[00:49:00] - [00:49:08] Aadlen bros. Auto wrecking, Sun valley
[00:49:15] - [00:49:23] Electronic Recyclers International, Fresno
[00:55:29] - [00:55:37] Costco, Van Nuys
[00:57:24] - [00:57:32] Tsuchiya Shokai Doll Factory, Japan
[00:58:38] - [00:58:46] Ladyboy, Cascade go-go bar, Nana Plaza, Bangkok
[01:00:04] - [01:00:12] Fushimi Inari Shrine, Kyoto
[01:01:02] - [01:01:10] Kikumaru Geisha, Japan
[01:03:50] - [01:03:58] Cebu Province Detention and Rehabilitation Center, Cebu City, Philippines
[01:07:20] - [01:07:28] Payatas Trash Dump, Quezon city
[01:08:33] - [01:08:41] Kawah Ijen Sulfur Mine, Java, Indonesia
[01:12:02] - [01:12:10] Kane Kwei Coffin Shop, Accra, Ghana
[01:13:43] - [01:13:51] Arms corporation of the Philippines
[01:14:40] - [01:14:48] Omo Mursi Mursi tribes, Omo Valley, Ethiopia
[01:16:40] - [01:16:48] Staff sergeant Robert Henline US Army veteran, Los Angeles National Cemetery
[01:18:17] - [01:18:25] Tagou Wushu Academy, Zhengzhou, China
[01:19:02] - [01:19:10] Demilitarized zone, Panmunjom
[01:22:02] - [01:22:10] Wailing wall, Jerusalem
[01:22:56] - [01:23:04] Great Mosque of Djenne, Mali
[01:24:07] - [01:24:15] Great Pyramids of Giza, Egypt
[01:24:49] - [01:24:57] Mosque of Sultanahmet, Istanbul Turkey
[01:25:29] - [01:25:37] al-Masjid Al-Haram, Mecca Saudi Arabia
[01:30:20] - [01:30:28] Thiksey Monastery, Leh, Ladakh, India
[01:32:36] - [01:32:44] Beijing */