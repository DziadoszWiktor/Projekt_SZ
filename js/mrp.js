var bought_materace = [];
var bought_ramy = [];
var bought_deski = [];
var bought_nogi = [];
var bought_stelaze = [];

function MRP_Ramy_Materace() {

    var table=document.getElementById("mattres_table");
    var arrLength = 10;
    for (var i = 0; i < arrLength; i++){
        if(production_val[i] != ''){
            var value = parseInt(production_val[i]);
            var cellIndex = ((parseInt(i)+1)-parseInt(document.getElementById("lead_time").value));
            var rowIndex = 1;
            document.getElementById('mattres_table').rows[rowIndex].cells[cellIndex].innerHTML = value;
        }
    }
    var neded = [];
    var row = table.rows[1];
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        neded.push(cell.innerHTML);
    }
    var row = table.rows[2];
    var counter = 0;
    bought_materace = [];
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        counter++
        bought_materace.push(document.getElementById('pp'+counter).value);
    }

    var row = table.rows[3];
    var in_stock = parseInt(document.getElementById("in_stock_matt").value);
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        if(neded[c-1] != ''){
            in_stock = in_stock - parseInt(neded[c-1]);
            if(in_stock >= 0){
                    cell.innerHTML = in_stock;
            }
            else{
                if(in_stock + parseInt(document.getElementById("lot_size_matt").value) >= 0){
                    in_stock = in_stock + (parseInt(document.getElementById("lot_size_matt").value));

                    cell.innerHTML = in_stock;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 4;
                    document.getElementById('mattres_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_matt").value));

                    var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_matt").value));
                    var rowIndex = 5;
                    document.getElementById('mattres_table').rows[rowIndex].cells[cellIndex].innerHTML = (parseInt(document.getElementById("lot_size_matt").value));

                    var cellIndex = (parseInt(c));
                    var rowIndex = 6;
                    document.getElementById('mattres_table').rows[rowIndex].cells[cellIndex].innerHTML = (parseInt(document.getElementById("lot_size_matt").value));
                }
                else{
                    var lot_count = Math.ceil(Math.abs(in_stock)/parseInt(document.getElementById("lot_size_matt").value));
                    in_stock = in_stock + (parseInt(document.getElementById("lot_size_matt").value)*lot_count);
                    cell.innerHTML = in_stock;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 4;
                    document.getElementById('mattres_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_matt").value)*lot_count);

                    var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_matt").value));
                    var rowIndex = 5;
                    document.getElementById('mattres_table').rows[rowIndex].cells[cellIndex].innerHTML = (parseInt(document.getElementById("lot_size_matt").value)*lot_count);

                    var cellIndex = (parseInt(c));
                    var rowIndex = 6;
                    document.getElementById('mattres_table').rows[rowIndex].cells[cellIndex].innerHTML = (parseInt(document.getElementById("lot_size_matt").value)*lot_count);
                }
            }
        }
        else{
            cell.innerHTML = in_stock;
        }
        add_available(mattres_table)
    }


    var table=document.getElementById("frame_table");
    var arrLength = 10;
    for (var i = 0; i < arrLength; i++){
        if(production_val[i] != ''){
            var value = parseInt(production_val[i]);
            var cellIndex = ((parseInt(i)+1)-parseInt(document.getElementById("lead_time").value));
            var rowIndex = 1;
            document.getElementById('frame_table').rows[rowIndex].cells[cellIndex].innerHTML = value;
        }
    }
    var neded = [];
    var row = table.rows[1];
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        neded.push(cell.innerHTML);
    }
    var row = table.rows[2];
    var counter = -1;
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        counter++
        bought_ramy.push(document.getElementById('pp1'+counter).value);
    }
    var row = table.rows[3];
    var in_stock = parseInt(document.getElementById("in_stock_frame").value);
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        if(neded[c-1] != ''){
            in_stock = in_stock - parseInt(neded[c-1]);
            cell.innerHTML = in_stock;
            if(in_stock >= 0){
                cell.innerHTML = in_stock;
            }
            else{
                if(in_stock + parseInt(document.getElementById("lot_size_frame").value) >= 0){
                    in_stock = in_stock + parseInt(parseInt(document.getElementById("lot_size_frame").value));
                    cell.innerHTML = in_stock;
                    
                    var cellIndex = (parseInt(c));
                    var rowIndex = 4;
                    document.getElementById('frame_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_frame").value));

                    var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_frame").value));
                    var rowIndex = 5;
                    document.getElementById('frame_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_frame").value);
                    
                    var cellIndex = (parseInt(c));
                    var rowIndex = 6;
                    document.getElementById('frame_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_frame").value);
                }
                else {
                    var lot_count = Math.ceil(Math.abs(in_stock)/parseInt(document.getElementById("lot_size_frame").value));
                    in_stock = in_stock + parseInt(parseInt(document.getElementById("lot_size_frame").value)*lot_count);
                    cell.innerHTML = in_stock;
                    
                    var cellIndex = (parseInt(c));
                    var rowIndex = 4;
                    document.getElementById('frame_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_frame").value)*lot_count);

                    var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_frame").value));
                    var rowIndex = 5;
                    document.getElementById('frame_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_frame").value)*lot_count;
                    
                    var cellIndex = (parseInt(c));
                    var rowIndex = 6;
                    document.getElementById('frame_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_frame").value)*lot_count;
                }
            }
        }
        else{
            cell.innerHTML = in_stock;
        }
    }
    var row = table.rows[5];
    var order = [];
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        order.push(cell.innerHTML);
    }


    var table=document.getElementById("planks_table");
    var arrLength = 10;
    for (var i = 0; i < arrLength; i++){
        if(order[i] != ''){
            var value = parseInt(order[i])*4;
            var cellIndex = ((parseInt(i)+1));
            var rowIndex = 1;
            document.getElementById('planks_table').rows[rowIndex].cells[cellIndex].innerHTML = value;
        }
    }
    var neded = [];
    var row = table.rows[1];
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        neded.push(cell.innerHTML);
    }
    var row = table.rows[2];
    var counter = -1;
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        counter++
        bought_deski.push(document.getElementById('pp2'+counter).value);
    }
    
    var row = table.rows[3];
    var in_stock = parseInt(document.getElementById("in_stock_boards").value);
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        if(neded[c-1] != ''){
            in_stock = in_stock - parseInt(neded[c-1]);
            cell.innerHTML = in_stock;
            if(in_stock >= 0){
                cell.innerHTML = in_stock;
            }
            else{
                if(in_stock + parseInt(document.getElementById("lot_size_boards").value) >= 0){
                    in_stock = in_stock + (parseInt(document.getElementById("lot_size_boards").value));
                    cell.innerHTML = in_stock;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 4;
                    document.getElementById('planks_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_boards").value));

                    var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_boards").value));
                    var rowIndex = 5;
                    document.getElementById('planks_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_boards").value);

                    var cellIndex = (parseInt(c));
                    var rowIndex = 6;
                    document.getElementById('planks_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_boards").value);
                }
                else{
                    var lot_count = Math.ceil(Math.abs(in_stock)/parseInt(document.getElementById("lot_size_boards").value));
                    in_stock = in_stock + (parseInt(document.getElementById("lot_size_boards").value)*lot_count);
                    cell.innerHTML = in_stock;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 4;
                    document.getElementById('planks_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_boards").value)*lot_count);

                    var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_boards").value));
                    var rowIndex = 5;
                    document.getElementById('planks_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_boards").value)*lot_count;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 6;
                    document.getElementById('planks_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_boards").value)*lot_count;
                }
            }
        }

        else{
            cell.innerHTML = in_stock;
        }
    }

    var table=document.getElementById("legs_table");
    var arrLength = 10;
    for (var i = 0; i < arrLength; i++){
        if(order[i] != ''){
            var value = parseInt(order[i])*4;
            var cellIndex = ((parseInt(i)+1));
            var rowIndex = 1;
            document.getElementById('legs_table').rows[rowIndex].cells[cellIndex].innerHTML = value;
        }
    }

    var neded = [];
    var row = table.rows[1];
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        neded.push(cell.innerHTML);
    }
    var row = table.rows[2];
    var counter = -1;
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        counter++
        bought_nogi.push(document.getElementById('pp3'+counter).value);
    }
    
    var row = table.rows[3];
    var in_stock = parseInt(document.getElementById("in_stock_legs").value);
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        if(neded[c-1] != ''){
            in_stock = in_stock - parseInt(neded[c-1]);
            cell.innerHTML = in_stock;
            if(in_stock >= 0){
                cell.innerHTML = in_stock;
            }
            else{
                if(in_stock + parseInt(document.getElementById("lot_size_legs").value) >= 0){
                    in_stock = in_stock + (parseInt(document.getElementById("lot_size_legs").value));
                    cell.innerHTML = in_stock;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 4;
                    document.getElementById('legs_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_legs").value));

                    var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_legs").value));
                    var rowIndex = 5;
                    document.getElementById('legs_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_legs").value);

                    var cellIndex = (parseInt(c));
                    var rowIndex = 6;
                    document.getElementById('legs_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_legs").value);
                }
                else{
                    var lot_count = Math.ceil(Math.abs(in_stock)/parseInt(document.getElementById("lot_size_legs").value));
                    in_stock = in_stock + (parseInt(document.getElementById("lot_size_legs").value)*lot_count);
                    cell.innerHTML = in_stock;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 4;
                    document.getElementById('legs_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_legs").value)*lot_count);

                    var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_legs").value));
                    var rowIndex = 5;
                    document.getElementById('legs_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_legs").value)*lot_count;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 6;
                    document.getElementById('legs_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_legs").value)*lot_count;
                }
            }
        }
        else{
            cell.innerHTML = in_stock;
        }
    }

    var table=document.getElementById("stelaz_table");
    var arrLength = 10;
    for (var i = 0; i < arrLength; i++){
        if(order[i] != ''){
            var value = parseInt(order[i]);
            var cellIndex = (   (parseInt(i)+1));
            var rowIndex = 1;
            document.getElementById('stelaz_table').rows[rowIndex].cells[cellIndex].innerHTML = value;
        }
    }
    var neded = [];
    var row = table.rows[1];
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        neded.push(cell.innerHTML);
    }
    var bought = [];
    var row = table.rows[2];
    var counter = -1;
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        counter++
        bought_stelaze.push(document.getElementById('pp4'+counter).value);
    }
    
    var row = table.rows[3];
    var in_stock = parseInt(document.getElementById("in_stock_racks").value);
    for (var c = 1, cell; cell = row.cells[c]; c++) {
        if(neded[c-1] != ''){
            in_stock = in_stock - parseInt(neded[c-1]);
            cell.innerHTML = in_stock;
            if(in_stock >= 0){
                cell.innerHTML = in_stock;
            }
            else{
                if(in_stock + parseInt(document.getElementById("lot_size_racks").value) >= 0){
                    in_stock = in_stock + (parseInt(document.getElementById("lot_size_racks").value));
                    cell.innerHTML = in_stock;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 4;
                    document.getElementById('stelaz_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_racks").value));

                    var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_racks").value));
                    var rowIndex = 5;
                    document.getElementById('stelaz_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_racks").value);

                    var cellIndex = (parseInt(c));
                    var rowIndex = 6;
                    document.getElementById('stelaz_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_racks").value);
                }
                else{
                    var lot_count = Math.ceil(Math.abs(in_stock)/parseInt(document.getElementById("lot_size_racks").value));
                    in_stock = in_stock + (parseInt(document.getElementById("lot_size_racks").value)*lot_count);
                    cell.innerHTML = in_stock;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 4;
                    document.getElementById('stelaz_table').rows[rowIndex].cells[cellIndex].innerHTML = Math.abs(in_stock - parseInt(document.getElementById("lot_size_racks").value)*lot_count);

                    var cellIndex = ((parseInt(c))-parseInt(document.getElementById("lead_time_racks").value));
                    var rowIndex = 5;
                    document.getElementById('stelaz_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_racks").value)*lot_count;

                    var cellIndex = (parseInt(c));
                    var rowIndex = 6;
                    document.getElementById('stelaz_table').rows[rowIndex].cells[cellIndex].innerHTML = parseInt(document.getElementById("lot_size_racks").value)*lot_count;
                }
            }
        }
        else{
            cell.innerHTML = in_stock;
        }
    }      
    
}

function check_values_mrp(){
    var tables = ["mattres_table", "frame_table", "planks_table", "legs_table", "stelaz_table"]
    var mattres_table_lead = document.getElementById("lead_time_matt").value;
    var frame_table_lead = document.getElementById("lead_time_frame").value;
    var planks_table_lead = document.getElementById("lead_time_boards").value;
    var legs_table_lead = document.getElementById("lead_time_legs").value;
    var stelaz_table_lead = document.getElementById("lead_time_racks").value;
    var arrayLength = tables.length;
    var results = [];
    for (var i = 0; i < arrayLength; i++) {
        var table=document.getElementById(tables[i]);
        
        for (var r = 1, row; row = table.rows[r]; r++) {
            if(r<2){
                var cell = row.cells[0];
                results.push(isNaN(cell.innerHTML));
                cell.innerHTML = 'Przewidywane zapotrzebowanie'
            }
        }
    }
    if(results.includes(false)){
        alert("Nie jesteśmy w stanie wyprodukować łóżek tak szybko!");
    }
    else{
        show();
    }
    var results2 = [];
    for (var i = 0; i < arrayLength; i++) {
        var table=document.getElementById(tables[i]);
        var buy = [];
        for (var r = 5, row; row = table.rows[r]; r++) {
            if(r<6){
                var cell = row.cells[0];
                results2.push(isNaN(cell.innerHTML));
                if(isNaN(cell.innerHTML)==false){
                    buy.push(cell.innerHTML)
                    if(tables[i]== 'mattres_table'){
                        document.getElementById("pp"+(0+parseInt(MRP_Materace_Map().get("czas_realizacji")))).value = cell.innerHTML;
                        table.rows[3].cells[0+parseInt(MRP_Materace_Map().get("czas_realizacji"))].innerHTML = parseInt(table.rows[3].cells[0+parseInt(MRP_Materace_Map().get("czas_realizacji"))].innerHTML) - parseInt(cell.innerHTML);
                        table.rows[6].cells[0+parseInt(MRP_Materace_Map().get("czas_realizacji"))].innerHTML = '';
                    }
                    else if(tables[i]== 'frame_table'){
                        document.getElementById("pp1"+(0+parseInt(MRP_Rama_Map().get("czas_realizacji")))).value = cell.innerHTML;
                        table.rows[3].cells[0+parseInt(MRP_Rama_Map().get("czas_realizacji"))].innerHTML = parseInt(table.rows[3].cells[0+parseInt(MRP_Rama_Map().get("czas_realizacji"))].innerHTML) - parseInt(cell.innerHTML);
                        table.rows[6].cells[0+parseInt(MRP_Rama_Map().get("czas_realizacji"))].innerHTML = '';
                    }
                    else if(tables[i]== 'planks_table'){
                        document.getElementById("pp2"+(0+parseInt(MRP_Deski_Map().get("czas_realizacji")))).value = cell.innerHTML;
                        table.rows[3].cells[0+parseInt(MRP_Deski_Map().get("czas_realizacji"))].innerHTML = parseInt(table.rows[3].cells[0+parseInt(MRP_Deski_Map().get("czas_realizacji"))].innerHTML) - parseInt(cell.innerHTML);
                        table.rows[6].cells[0+parseInt(MRP_Deski_Map().get("czas_realizacji"))].innerHTML = '';
                    }
                    else if(tables[i]== 'legs_table'){
                        document.getElementById("pp3"+(0+parseInt(MRP_Nogi_Map().get("czas_realizacji")))).value = cell.innerHTML;
                        table.rows[3].cells[0+parseInt(MRP_Nogi_Map().get("czas_realizacji"))].innerHTML = parseInt(table.rows[3].cells[0+parseInt(MRP_Nogi_Map().get("czas_realizacji"))].innerHTML) - parseInt(cell.innerHTML);
                        table.rows[6].cells[0+parseInt(MRP_Nogi_Map().get("czas_realizacji"))].innerHTML = '';
                    }
                    else{
                        document.getElementById("pp4"+(0+parseInt(MRP_Stelaze_Map().get("czas_realizacji")))).value = cell.innerHTML;
                        table.rows[3].cells[0+parseInt(MRP_Stelaze_Map().get("czas_realizacji"))].innerHTML = parseInt(table.rows[3].cells[0+parseInt(MRP_Stelaze_Map().get("czas_realizacji"))].innerHTML) - parseInt(cell.innerHTML);
                        table.rows[6].cells[0+parseInt(MRP_Stelaze_Map().get("czas_realizacji"))].innerHTML = '';
                    }
                    cell.innerHTML = 'Planowane zamówiena'
                }
            }
        }
    }
}

function MRP_Materace_Map() {
    const mrp_Materace = new Map ([
        ["czas_realizacji", document.getElementById("lead_time_matt").value],
        ["wielkosc_partii", document.getElementById("lot_size_matt").value],
        ["na_stanie", document.getElementById("in_stock_matt").value]
    ])
    document.getElementById("matt_bio").innerHTML = "Czas realizacji = " + parseInt(mrp_Materace.get("czas_realizacji")) + "<br>" + "Wielkość partii = " + parseInt(mrp_Materace.get("wielkosc_partii")) + "<br>" + "Poziom BOM = 1" + "<br>" + "Na stanie = " + parseInt(mrp_Materace.get("na_stanie"));
    return mrp_Materace;
}

function MRP_Rama_Map() {
    const mrp_Rama = new Map ([
        ["czas_realizacji", document.getElementById("lead_time_frame").value],
        ["wielkosc_partii", document.getElementById("lot_size_frame").value],
        ["na_stanie", document.getElementById("in_stock_frame").value]
    ])
    document.getElementById("frame_bio").innerHTML = "Czas realizacji = " + parseInt(mrp_Rama.get("czas_realizacji")) + "<br>" + "Wielkość partii = " + parseInt(mrp_Rama.get("wielkosc_partii")) + "<br>" + "Poziom BOM = 1" + "<br>" + "Na stanie = " + parseInt(mrp_Rama.get("na_stanie"));
    return mrp_Rama;
}

function MRP_Deski_Map() {
    const mrp_Deski = new Map ([
        ["czas_realizacji", document.getElementById("lead_time_boards").value],
        ["wielkosc_partii", document.getElementById("lot_size_boards").value],
        ["na_stanie", document.getElementById("in_stock_boards").value]
    ])
    document.getElementById("boards_bio").innerHTML = "Czas realizacji = " + parseInt(mrp_Deski.get("czas_realizacji")) + "<br>" + "Wielkość partii = " + parseInt(mrp_Deski.get("wielkosc_partii")) + "<br>" + "Poziom BOM = 2" + "<br>" + "Na stanie = " + parseInt(mrp_Deski.get("na_stanie"));
    return mrp_Deski;
}

function MRP_Nogi_Map() {
    const mrp_Nogi = new Map ([
        ["czas_realizacji", document.getElementById("lead_time_legs").value],
        ["wielkosc_partii", document.getElementById("lot_size_legs").value],
        ["na_stanie", document.getElementById("in_stock_legs").value]
    ])
    document.getElementById("legs_bio").innerHTML = "Czas realizacji = " + parseInt(mrp_Nogi.get("czas_realizacji")) + "<br>" + "Wielkość partii = " + parseInt(mrp_Nogi.get("wielkosc_partii")) + "<br>" + "Poziom BOM = 2" + "<br>" + "Na stanie = " + parseInt(mrp_Nogi.get("na_stanie"));
    return mrp_Nogi;
}

function MRP_Stelaze_Map() {
    const mrp_Stelaze = new Map ([
        ["czas_realizacji", document.getElementById("lead_time_racks").value],
        ["wielkosc_partii", document.getElementById("lot_size_racks").value],
        ["na_stanie", document.getElementById("in_stock_racks").value]
    ])
    document.getElementById("racks_bio").innerHTML = "Czas realizacji = " + parseInt(mrp_Stelaze.get("czas_realizacji")) + "<br>" + "Wielkość partii = " + parseInt(mrp_Stelaze.get("wielkosc_partii")) + "<br>" + "Poziom BOM = 2" + "<br>" + "Na stanie = " + parseInt(mrp_Stelaze.get("na_stanie"));
    return mrp_Stelaze;
}

function add_available(table_name){
    var table=table_name;
    if(table == mattres_table){            
        var arrLength = bought_materace.length;
        for (var i = 0; i < arrLength; i++){
            if(bought_materace[i] != ''){
                var value = bought_materace[i];
                var row = table.rows[3];
                for (var c = i+1, cell; cell = row.cells[c]; c++){
                    cell.innerHTML = parseInt(cell.innerHTML) + (parseInt(value));
                }
                break;
            }    
        }
    }
    check_values_mrp();
}

