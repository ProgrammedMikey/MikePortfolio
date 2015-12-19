var requestParms = {
    clientId: "CEULWYZVZK0WG0VXDIFVOAG3Q1KM0POW3DQLKVF1ORFM22SZ",
    clientSecret: "UW4UBLY0I22QSF5AL14EK4PM13SSMLFS4CUVYQX3TKDZTAGW",
    version: "20131230"
}

app.factory('placesExplorerService', function ($resource) {

    var requestUri = 'https://api.foursquare.com/v2/venues/:action';

    return $resource(requestUri,
    {
        action: 'explore',
        client_id: requestParms.clientId,
        client_secret: requestParms.clientSecret,
        v: requestParms.version,
        venuePhotos: '1',
        callback: 'JSON_CALLBACK'
    },
    {
        get: { method: 'JSONP' }
    });

});