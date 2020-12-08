const getMap = (data) => {

    const parseData = JSON.parse(data)

    var map = L.map('map').setView([0, 0], 1);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png ', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors',
        zoom: 1.5
    }).addTo(map);

    for (const key in parseData) {
        L.circle([parseData[key].lat, parseData[key].long], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 100000
        }).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();

    }
}