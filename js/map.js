var map;
AmCharts.ready( function() {
    map = new AmCharts.AmMap();
    map.panEventsEnabled = true;
    map.backgroundColor = "#87CEEB";
    map.backgroundAlpha = 1;
    map.width = 1200;
    map.height = 2900;

    map.zoomControl.panControlEnabled = true;
    map.zoomControl.zoomControlEnabled = true;

    var dataProvider = {
        map: "indiaLow",
        getAreasFromMap: true
    };

    map.dataProvider = dataProvider;

    map.areasSettings = {
        autoZoom: false,
        color: "#CDCDCD",
        colorSolid: "#5EB7DE",
        selectedColor: "#5EB7DE",
        outlineColor: "#666666",
        rollOverColor: "#88CAE7",
        rollOverOutlineColor: "#FFFFFF",
        selectable: true
    };

    map.addListener( 'clickMapObject', function( event ) {
        // deselect the area by assigning all of the dataProvider as selected object
        map.selectedObject = map.dataProvider;

        // toggle showAsSelected
        event.mapObject.showAsSelected = !event.mapObject.showAsSelected;

        // bring it to an appropriate color
        map.returnInitialColor( event.mapObject );

        // let's build a list of currently selected states
        var states = [];
        for ( var i in map.dataProvider.areas ) {
            var area = map.dataProvider.areas[ i ];
            if ( area.showAsSelected ) {
                states.push( area.title );
            }
        }
    } );
    map.export = {
        enabled: true
    }
    
    map.write( "chartdiv2" );
} );
