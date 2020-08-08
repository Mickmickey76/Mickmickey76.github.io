/*

<tr class="table-success">
                            <td>1</td>
                            <td>Kiss</td>
                            <td>János</td>
                            <td>55</td>
                            <td>
                                <div class="btn-group">
                                    <button class="btn-info btn"><i class="fas fa-sync-alt"></i></button>
                                    <button class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                                </div>
                            </td>
                        </tr>
*/


let users = [
    { surename: "Berger", firstname: "Whitney", age: 22 },
    { surename: "Nagy", firstname: "Árpád", age: 33 },
    { surename: "Kiss", firstname: "Bence", age: 44 },
    { surename: "John", firstname: "Doe", age: 55 },
    { surename: "Jack", firstname: "Vadölő", age: 32 },
    { surename: "Rostás", firstname: "Márió", age: 45 },
    { surename: "Fehér", firstname: "Péter", age: 54 },
    { surename: "Piros", firstname: "Gizella", age: 12 }
];
let tableBody = document.querySelector("#userTable tbody");
let CreateTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

let createButtonGroup = parent => {
    /*
     <div class="btn-group">
            <button class="btn-info btn">
            <i class="fas fa-sync-alt"></i>
            </button>
            <button class="btn btn-danger">
            <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    */

let group=document.createElement("div");
group.Classnahme="btn-group";

let btnInfo=document.createElement("button");
btnInfo.className="btn-info btn";
btnInfo.innerHtml='<i class="fas fa-sync-alt"></i>';

let btnDanger=document.createElement("button");
btnInfo.className="btn btn-danger";
btnInfo.innerHtml='<i class="fas fa-sync-alt"></i>';

group.appendChild(btnInfo);
group.appendChild(btnDanger);

let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}

for (let k in users) {
    let tr = document.createElement("tr");
    CreateTD(parseInt(k) + 1, tr);
    for (let value of Object.values(users[k])) {
        CreateTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}


