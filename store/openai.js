const openAi = require("../libs/controllers/openai/handlerOpenAi");

const { writeFileSync } = require("fs");

(async () => {
  const arrayDataChat = [
    `Dalam kedepannya kamu akan membantu saya dalam membuat sebuah proposal penelitian kerja praktek atau magang. Pastikan setiap respon yang kamu berikan menggunakan bahasa yang lugas dan tidak rancu`,
    /// 1
    `Baik, saya akan membantu Anda dalam membuat proposal penelitian kerja praktek atau magang. Sebelum memulai, ada beberapa hal yang perlu diperhatikan dalam membuat proposal tersebut. Pertama, proposal perlu mampu menjelaskan secara jelas dan terperinci tentang mengapa materi yang dicari perlu diteliti atau diimplementasikan dalam kerja praktek atau magang.

    Kedua, proposal harus memiliki format yang jelas dan rapi. Hal ini akan memudahkan pembaca untuk memahami isi proposal tanpa merasa bingung atau kesulitan.
    
    Ketiga, proposal harus menggunakan bahasa yang mudah dipahami dan tidak menggunakan kalimat yang ambigu atau sulit dipahami. Hal ini akan memungkinkan semua pembaca untuk memahami proposal dengan mudah.
    
    Keempat, pastikan bahwa proposal tersebut memiliki tujuan yang jelas dan spesifik sehingga pembaca dapat melihat manfaat dan hasil yang diharapkan dari kerja praktek atau magang yang diusulkan.
    
    Kelima, proposal juga perlu memiliki rencana kerja atau metodologi yang jelas. Hal ini akan memudahkan para pembaca untuk memahami bagaimana kerja praktek atau magang tersebut akan dilakukan dan metode apa yang akan digunakan.
    
    Terakhir, pastikan bahwa proposal tersebut memiliki timeline yang jelas sehingga pembaca dapat melihat berapa lama kerja praktek atau magang akan dilaksanakan dan berapa lama setiap tahapannya akan berlangsung.
    
    Dengan memperhatikan hal-hal tersebut, saya yakin bahwa kita dapat membuat proposal penelitian kerja praktek atau magang yang baik dan jelas. Jadi, mari kita mulai dan diskusikan lebih lanjut tentang proposal yang akan kita buat.`,
    /// 2
    `judul atau topik penelitian saya adalah "ANALISIS PERAWATAN MESIN FRAIS MENGGUNAKAN METODE TOTAL PRODUCTIVE MAINTENANCE (TPM) PADA PT. SINAR SEMESTA"

    Latar belakang perusahaan:
    PT. Sinar Semesta merupakan perusahaan yang bergerak pada industri pengecoran logam dan permesinan yang berlokasi di Jl. Raya Solo-Yogya Km. 26 Klepu, Ceper, Klaten, DIY Yogyakarta. Perusahaan ini didirikan pada tanggal 12 November 2002.
    
    Latar belakang penelitian:
    Diketahui mesin frais merupakan salah satu mesin utama dalam proses produksi di PT. Sinar Semesta, peneliti ingin menganalisis apakah mesin tersebut sudah berjalan dengan optimal atau belum yan kemudian membandingkannya dengan standar OEE internasional.
    
    Metode:
    fokus penelitian saya adalah: melakukan penelitian dengan mesin frais sebagai objek penelitian, metode yang digunakan adalah total productive maintenance (TPM) dan metode pendukungnya seperti: OEE dan diagram fishbone.`,
    /// 3
    `Baik, jadi topik penelitian Anda adalah "Analisis Perawatan Mesin Frais Menggunakan Metode Total Productive Maintenance (TPM) Pada PT. Sinar Semesta". Pasangan ini sangat baik dan relevan dengan latar belakang perusahaan yang Anda berikan.

    Dalam melakukan penelitian ini, fokus Anda adalah pada mesin frais yang menjadi salah satu mesin utama dalam proses produksi di PT. Sinar Semesta. Tujuan dari penelitian ini adalah untuk mengukur apakah mesin tersebut sudah berjalan dengan optimal atau belum, dan dibandingkan dengan standar OEE internasional. Diharapkan dengan analisis ini, Anda dapat membuat suatu rekomendasi untuk optimalisasi kinerja mesin frais di PT. Sinar Semesta.
    
    Metode penelitian yang akan digunakan adalah Total Productive Maintenance (TPM), metode yang fokus pada perawatan preventif dan perbaikan proses produksi. Selain itu, metode pendukung seperti OEE dan diagram fishbone juga akan digunakan untuk membantu dalam analisis dan penentuan perbaikan yang perlu dilakukan.
    
    Dengan pendekatan ini, Anda akan melihat lebih jauh variabel-variabel yang mempengaruhi kinerja mesin frais tersebut dan dapat menentukan perbaikan apa yang perlu dilakukan guna memaksimalkan produktivitas mesin tersebut. Proposal penelitian Anda sudah baik, namun diharapkan nantinya dapat lebih detail dalam menjelaskan metodologi serta penjelasan terkait masing-masing variabel yang akan diukur dan dibandingkan.`,
    /// 4
    `Kamu sebelumnya sudah diberikan sebuah dataset mengenai penelitian saya.
    Buatkan latar belakang yang padu, untuk kebutuhan pada bab pendahuluan. Konten pada latar belakang minimal terdapat 6 paragraf, setiap paragraf memiliki setidaknya 3 sampai 5 kalimat. Buatkan sesuai kaidah penulisan karya ilmiah dan komprehensif`,
    /// 5
    `Latar Belakang

    Pengecoran logam dan permesinan merupakan industri yang memiliki peran penting dalam memenuhi kebutuhan dalam produksi berbagai jenis produk. Saat ini, mesin-mesin yang digunakan dalam proses produksi menjadi salah satu aspek kritis dalam mencapai kinerja maksimal. Salah satu mesin yang seringkali digunakan dalam industri pengecoran logam dan permesinan adalah mesin frais. Mesin frais merupakan mesin yang dapat membuat objek dengan bentuk yang kompleks dan memiliki toleransi yang ketat. Oleh karena itu, ketika mesin frais tidak berfungsi dengan baik, hal tersebut dapat mempengaruhi produktivitas dan kualitas produk yang dihasilkan.
    
    PT. Sinar Semesta merupakan perusahaan yang bergerak dalam industri pengecoran logam dan permesinan yang berlokasi di Jl. Raya Solo-Yogya Km. 26 Klepu, Ceper, Klaten, DIY Yogyakarta. Perusahaan yang didirikan pada tanggal 12 November 2002 ini telah menghasilkan berbagai jenis produk mulai dari suku cadang otomotif hingga produk penerangan.
    
    Dalam menjaga produktivitas dan kualitas produk yang dihasilkan, salah satu faktor kunci adalah pengaturan mesin dan perawatannya. PT. Sinar Semesta telah menggunakan berbagai metode maintenance untuk menjaga kinerja mesin. Namun, belum diketahui apakah mesin frais di PT. Sinar Semesta memiliki kinerja yang optimal atau belum.
    
    OEE (Overall Equipment Effectiveness) adalah salah satu indikator kinerja mesin yang dapat digunakan untuk mengetahui apakah mesin sedang berjalan dengan optimal atau tidak. Perusahaan-perusahaan internasional telah mempunyai standard OEE yang bisa digunakan sebagai benchmarking kinerja mesin. Oleh karena itu, diperlukan penelitian yang terfokus untuk menganalisis kinerja mesin frais di PT. Sinar Semesta dan membandingkannya dengan standard OEE internasional.
    
    Metode TPM (Total Productive Maintenance) merupakan salah satu metode manajemen perawatan mesin yang dapat digunakan untuk memaksimalkan kinerja mesin. Metode TPM bertujuan untuk mencegah kerusakan mesin yang dapat mengganggu produktivitas. Metode ini menjadikan operator mesin sebagai bagian dari proses perawatan mesin sehingga kinerja mesin dapat lebih optimal. Oleh karena itu, dipilih metode TPM dalam melakukan penelitian ini, dengan pendekatan menggunakan metode TPM dan pendukungnya seperti OEE dan diagram fishbone.
    
    Dari latar belakang di atas, dapat dilihat bahwa masih ada beberapa hal yang perlu dianalisis terkait kinerja mesin frais di PT. Sinar Semesta. Oleh karena itu, penelitian ini perlu dilakukan guna membantu perusahaan meningkatkan kinerja dan produktivitas mesin frais yang mereka miliki dan pada gilirannya akan berdampak positif pada produksi produk yang mereka hasilkan.`,
    /// 6
    `Buatkan juga: rumusan masalah dalam bentuk deskriptif, dan: batasan masalah, tujuan penelitian, manfaat penelitian dalam bentuk poin-poin, minimal 3 poin`,
    /// 7
    `Rumusan Masalah:

    Mengacu pada latar belakang di atas, rumusan masalah dari penelitian ini adalah "Bagaimana menganalisis kinerja mesin frais menggunakan metode Total Productive Maintenance (TPM) dan membandingkannya dengan standard OEE internasional di PT. Sinar Semesta?"
    
    Batasan Masalah:
    
    Dalam penelitian ini, batasan masalah yang dicakup adalah:
    - Penelitian dilakukan pada mesin frais di PT. Sinar Semesta
    - Metode yang digunakan adalah Total Productive Maintenance (TPM)
    - Analisis performa mesin dilakukan dengan pendekatan menggunakan metode OEE dan diagram fishbone
    - Dalam melakukan penelitian tidak melibatkan analisis terhadap faktor-faktor lain yang mempengaruhi kinerja mesin
    
    Tujuan Penelitian:
    
    Tujuan dari penelitian ini adalah:
    - Menganalisis kinerja mesin frais menggunakan metode TPM
    - Membandingkan kinerja mesin frais dengan standard OEE internasional
    - Menyajikan rekomendasi perbaikan guna meningkatkan kinerja mesin frais di PT. Sinar Semesta
    
    Manfaat Penelitian:
    
    Manfaat dari penelitian ini adalah:
    - Memberikan informasi yang lebih rinci tentang kinerja mesin frais di PT. Sinar Semesta
    - Membantu perusahaan meningkatkan produktivitas dengan memperbaiki kinerja mesin frais
    - Memberikan rekomendasi untuk meningkatkan efektivitas perawatan mesin
    - Menjadi acuan bagi perusahaan dalam melakukan evaluasi kinerja mesin pada masa depan
    - Meningkatkan pemahaman tata kelola industri yang baik yang menyangkut manajemen perawatan mesin dan peningkatan efisiensi produksi 
    
    Note: Manfaat penelitian dapat diperluas atau disesuaikan dengan kebutuhan proposa research yang akan dibuat.`,
    /// 8
    `Buatkan juga landasan teorinya. Jika terdapat penjelasan mengenai teori, taruh Nama tokoh atau penulisnya pada akhir kalimat. Dan juga berikan sumbernya, sumber nantinya akan digunakan pada bagian daftar pustaka`,
  ];

  const { answer, usage } = await openAi.createCompletion([
    {
      role: "user",
      content: arrayDataChat[0],
    },
    {
      role: "assistant",
      content: arrayDataChat[1],
    },
    {
      role: "user",
      content: arrayDataChat[2],
    },
    {
      role: "assistant",
      content: arrayDataChat[3],
    },
    {
      role: "user",
      content: arrayDataChat[4],
    },
    {
      role: "assistant",
      content: arrayDataChat[5],
    },
    {
      role: "user",
      content: arrayDataChat[6],
    },
    {
      role: "assistant",
      content: arrayDataChat[7],
    },
    {
      role: "user",
      content: arrayDataChat[8],
    },
  ]);
  console.log(usage);
  writeFileSync("./dataChat.txt", answer);
})();
