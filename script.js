
//membuat data array berisi 3 lagu favorit (judul, penyanyi, jumlah_likes, jumlah_play)

var lagu = [
    ['Tarot', '.Feast', 4000, 8000, 'feast.jpg'],
    ['Dua Sedjoli', 'Dewa 19', 1500, 2300, 'dewa.jpg'],
    ['Evakuasi', 'Hindia', 2440, 5400, 'hindia.jpg'],
    ['Anugerah Terindah Yang Pernah Kumiliki', 'Sheila On 7', 12000, 25000, 'so7.jpg'],
    ['Sorai', 'Nadin Amizah', 9200, 19500, 'sorai.jpg'],
    ['La La Lost You', 'Niki', 9500, 20000, 'niki.jpg'],
     ['To The Bone', 'Pamungkas', 9500, 20000, 'pamungkas.jpg'],
    ['Perfect', 'One Direction', 9500, 20000, 'perfect.jpg'],
    
];

var element = "";

lagu.forEach(function (musik) {
    element += `
 <div class="lagu">
            <h2>${musik[0]}</h2>
            <small>
                <i>Oleh ${musik[1]}</i>
            </small>
            <img src="img/${musik[4]}" alt="${musik[0]}">
            <div class="bawah">
                <div class="kanan">${musik[2]}</div>
                <div class="kiri">${musik[3]}</div>
            </div>
        </div>
    `;
});

        var konten = document.getElementById("container");
        konten.innerHTML = element;

        