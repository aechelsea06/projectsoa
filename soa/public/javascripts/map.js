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
    /*'<% mapData.forEach(function(data){ %>'
             var circle = [
                 ["<b style='font-size:15pt;'> <%=data.country%> </b> <br><b style='font-size:10pt;'> Province : <%=data.province%><b><br><b style='font-size:8pt;'> Confirmed : <%=data.confirm%><b> <br><b style='font-size:8pt;'> Death : <%=data.dead%><b> <br><b style='font-size:8pt;'> Recovered : <%=data.recover%><b>", ('<%=data.lat%>'), ('<%=data.long%>')],
             ];
            for (var i = 0; i < circle.length; i++) {
                 circle = L.circle([circle[i][1], circle[i][2]], {
                     
                         icon: Icon
                     })
                     .bindPopup(circle[i][0])
                     .openPopup()
                     .addTo(map);
             }
             '<% }); %>'
             */
}