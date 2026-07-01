let suggestion = "";

document.addEventListener("input", (e) => {

    const target = e.target;

    if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement))
        return;

    const text = target.value;

    if (text.endsWith("Hello")) {

        suggestion = " world!";

        console.log("Suggestion:", suggestion);

    } else {

        suggestion = "";

    }

});


document.addEventListener("keydown", (e) => {

    if (e.key !== "Tab") return;

    const target = document.activeElement;

    if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement))
        return;

    if (suggestion !== "") {

        e.preventDefault();

        target.value += suggestion;

        suggestion = "";

    }

});