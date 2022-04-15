export function removeElementById(id: string) {
    const el = document.getElementById(id);
    if (el) {
        el.remove();
    }
}
