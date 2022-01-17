    function getlol()
    {

        fetch('champs.json')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            
            document.getElementById("data").innerHTML = ""; // clear body after search
            document.getElementById("example").innerHTML = ""; // clear body after search

            let  champList = document.getElementById("data");

            let ulCss = "list-group";
            let list = "<ul class=" + ulCss + ">";
            
            for(var i = 0; i < data.length; i++){
                
                
                // var ChampLength = 7;
                var ChampLength = document.getElementById("champ").value;
                var countchar = data[i].name.length;

                if(ChampLength == 0)
                {
                    console.log("SHOW ALL CHAMPIONS");
                }
                else if(countchar < ChampLength || countchar > ChampLength)
                continue;

                let liCss = 'class="list-group-item d-flex justify-content-between align-items-center"';
                let spanCss = 'class="badge badge-primary badge-pill"';
                let btnCss = 'type="button" class="offset-md-8 btn btn-success btn-sm""';
                list += "<li " + liCss +">";
                list += "<img src=" + data[i].icon;
                list += " width=" + 55 + ">";
                list += "</img>";
                list += data[i].name;
                list += "<button " + btnCss + ">" +  "Copy";
                list += "</button>";
                list += "<span " + spanCss +">" + data[i].name.length;
                list += "</span>";
                list += "</li>";
                list += "</ul>";

                champList.innerHTML = list;
                document.getElementById("example").innerHTML = i + " Results"; // clear body after search
                
            }

        })
        .catch(function(err){
            console.log(err);
        });
    }

    function copyclip()
    {

    }