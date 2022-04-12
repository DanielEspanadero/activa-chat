var socket = io.connect("http://localhost:5000", { forceNew: true });

socket.on("messages", function (data) {
    console.log(data);
    render(data);
});

function render(data) {
    var html = data
        .map(function (elem, index) {
            return `<div>
              <em>${elem.text}</em>
            </div>`;
        })
        .join(" ");

    document.getElementById("messages").innerHTML = html;
}

function addMessage(e) {
    var message = {
        text: document.getElementById("texto").value,
    };
    socket.emit("new-message", message);
    return false;
};