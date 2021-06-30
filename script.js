window.addEventListener("load", () => {
    document.title = "A website about me and my work. ";
    const textArray = [" A", " w", "e", "b", "s", "i", "t", "e", " a", "b", "o", "u", "t", " m", "e", " a", "n", "d", " m", "y", " w", "o", "r", "k", "."];
    let index = 24;
    setInterval(() => {
        index++;
        if (index === 25) index = 0;
        document.title = document.title.slice(1) + textArray[index];
    }, 500)
});
