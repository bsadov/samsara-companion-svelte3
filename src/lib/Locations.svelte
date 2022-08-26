<style>

ul{
    text-align: left;
    list-style: none;
}
/*
ul li::marker {
    font-size: 0.80em;
} */
</style>

<script>
const locations = 
    [{
        name: 'Balinese Tari Legong dancers, Indonesia',
        start: '00:00:20',
        end: '00:00:28',
        short:'Indonesia'
    },
    {
        name: 'Kilauea Volcano, Hawaii',
        start: '00:01:50',
        end: '00:01:58',
        short:'Hawaii'
    },
    {
        name: 'The Museum of Egyptian Antiquities',
        start: '00:04:30',
        end: '00:04:38',
        short:'Egypt'
    },
    {
        name: 'Popa Taungkalat Monastery, Bagan Myanmar',
        start: '00:05:35',
        end: '00:05:43',
        short:'Myanmar'
    },
    {
        name: 'Bagan, Myanmar',
        start: '00:05:51',
        end: '00:05:59',
        short:'Myanmar 2'
    }]
</script>


<ul>
    {#each locations as location}
        <li>{location.start} - {location.name}</li>
    {/each}
</ul>

<!-- <ul class="timeline">
    <li>[00:00:20] - [00:00:28] Balinese Tari Legong dancers, Indonesia</li>
    <li>[00:01:50] - [00:01:58] Kilauea Volcano, Hawaii</li>
    <li>[00:04:30] - [00:04:38] The Museum of Egyptian Antiquities</li>
    <li>[00:05:35] - [00:05:43] Popa Taungkalat Monastery, Bagan Myanmar</li>
    <li>[00:05:51] - [00:05:59] Bagan, Myanmar</li>
    <li>[00:08:22] - [00:08:30] Thiksey Monastery, Leh Ladakh India</li>
    <li>[00:13:07] - [00:13:15] Mt. Nemrut National Park, Adiyaman, Turkey</li>
    <li>[00:14:24] - [00:14:32] Petra,Jordan</li>
    <li>[00:15:10] - [00:15:18] Cappadocia,Turkey</li>
    <li>[00:15:33] - [00:15:41] Dogon Village, Bandiagara Escarpment Cliff dwellings near terelli, Mali</li>
    <li>[00:16:07] - [00:16:15] Kolmanskop Namibia</li>
    <li>[00:17:30] - [00:17:38] Katrina House, Ninth Ward, New Orleans</li>
    <li>[00:18:19] - [00:18:27] Ninth Ward, New Orleans</li>
    <li>[00:19:32] - [00:19:40] Chateau de Versailles, France
    <li>[00:20:50] - [00:20:58] Divino, Salvador Church, Sao Paulo Brazil</li>
    <li>[00:21:43] - [00:21:51] Cathedral de Notre Dame de Reims</li>
    <li>[00:22:17] - [00:22:25] Cathedral Notre Dame de Paris</li>
    <li>[00:23:03] - [00:23:11] Convento dei Cappuccini, Palermo</li>
    <li>[00:23:30] - [00:23:38] La Sainte Chapelle</li>
    <li>[00:23:50] - [00:23:58] Mont Saint Michel</li>
    <li>[00:24:29] - [00:24:37] Naukluft National Park, Sossusvlei, Namibia</li>
    <li>[00:26:55] - [00:27:03] Ron Mt. Blanc, France</li>
    <li>[00:28:13] - [00:28:21] Arches National Park, Utah USA</li>
    <li>[00:28:39] - [00:28:47] Monument Valley, Arizona USA</li>
    <li>[00:28:50] - [00:28:58] Antelope Canyon</li>
    <li>[00:29:43] - [00:29:51] Epupa Falls, Angola</li>
    <li>[00:30:30] - [00:30:38] Omo, Mursi Mursi tribes, Omo Valley, Ethiopia</li>
    <li>[00:31:49] - [00:31:57] Himba village, Kunene Namibia</li>
    <li>[00:34:09] - [00:34:17] Marcos Luna tattoo daddy, America</li>
    <li>[00:36:18] - [00:36:26] Hiroshi Ishiguro Professor and Robot Clone, Japan</li>
    <li>[00:37:24] - [00:37:32] Oloiver de Sagazan, Paris</li>
    <li>[00:40:03] - [00:40:09] Toshimaen/Hydropolis,tokyo</li>
    <li>[00:40:10] - [00:40:18] Lotte Kasai Golf, Chiba</li>
    <li>[00:40:34] - [00:40:42] Ski Dubai</li>
    <li>[00:41:29] - [00:41:37] Burj Khalifa Tower</li>
    <li>[00:42:53] - [00:43:01] Burj Al Arab Hotel</li>
    <li>[00:44:37] - [00:44:44] Galleria Vittorio Emanuele Milan, Italy</li>
    <li>[00:44:46] - [00:44:54] Teatro alla Scala, Italy</li>
    <li>[00:49:00] - [00:49:08] Aadlen bros. Auto wrecking, Sun valley</li>
    <li>[00:49:15] - [00:49:23] Electronic Recyclers International, Fresno</li>
    <li>[00:55:29] - [00:55:37] Costco, Van Nuys</li>
    <li>[00:57:24] - [00:57:32] Tsuchiya Shokai Doll Factory, Japan</li>
    <li>[00:58:38] - [00:58:46] Ladyboy, Cascade go-go bar, Nana Plaza, Bangkok</li>
    <li>[01:00:04] - [01:00:12] Fushimi Inari Shrine, Kyoto</li>
    <li>[01:01:02] - [01:01:10] Kikumaru Geisha, Japan</li>
    <li>[01:03:50] - [01:03:58] Cebu Province Detention and Rehabilitation Center, Cebu City, Philippines</li>
    <li>[01:07:20] - [01:07:28] Payatas Trash Dump, Quezon city</li>
    <li>[01:08:33] - [01:08:41] Kawah Ijen Sulfur Mine, Java, Indonesia</li>
    <li>[01:12:02] - [01:12:10] Kane Kwei Coffin Shop, Accra, Ghana</li>
    <li>[01:13:43] - [01:13:51] Arms corporation of the Philippines</li>
    <li>[01:14:40] - [01:14:48] Omo Mursi Mursi tribes, Omo Valley, Ethiopia</li>
    <li>[01:16:40] - [01:16:48] Staff sergeant Robert Henline US Army veteran, Los Angeles National Cemetery</li>
    <li>[01:18:17] - [01:18:25] Tagou Wushu Academy, Zhengzhou, China</li>
    <li>[01:19:02] - [01:19:10] Demilitarized zone, Panmunjom</li>
    <li>[01:22:02] - [01:22:10] Wailing wall, Jerusalem</li>
    <li>[01:22:56] - [01:23:04] Great Mosque of Djenne, Mali</li>
    <li>[01:24:07] - [01:24:15] Great Pyramids of Giza, Egypt</li>
    <li>[01:24:49] - [01:24:57] Mosque of Sultanahmet, Istanbul Turkey</li>
    <li>[01:25:29] - [01:25:37] al-Masjid Al-Haram, Mecca Saudi Arabia</li>
    <li>[01:30:20] - [01:30:28] Thiksey Monastery, Leh, Ladakh, India</li>
    <li>[01:32:36] - [01:32:44] Beijing</li>
</ul> -->