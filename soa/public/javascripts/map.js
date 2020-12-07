const getMap = (data) => {

    const parseData = JSON.parse(data)
    
    var map = L.map('map').setView([0, 0], 1);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png ', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
    }).addTo(map);
    var marker = L.marker([51.5, -0.09]).addTo(map);
    
    
    var circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 5000
    }).addTo(map);
}