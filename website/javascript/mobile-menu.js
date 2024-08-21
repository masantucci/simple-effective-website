document.addEventListener('DOMContentLoaded', function () {
    var item = document.getElementById('item-menu');
    var btnmenu = document.getElementById('btn-menu');

    btnmenu.addEventListener('click', function () {
        if (item.style.display == "block") {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    });

    document.addEventListener('click', function (event) {
        var item = document.getElementById('item-menu');
        if (!item.contains(event.target) && event.target !== btnmenu) {
            item.style.display = "none";
        }
    });
});