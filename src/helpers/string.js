export function stringFormat() {
    let actual_string = arguments[0];
    let replacement_str = '';
    for (let i = 0; i < arguments.length - 1; i++) {
        const reg = new RegExp("\\{" + i + "\\}", "gm");
        replacement_str = arguments[i + 1];
        if (replacement_str){
            actual_string = actual_string.replace(reg, replacement_str);
        } else {
            actual_string = actual_string.replace(reg, '')
        }
        replacement_str = ''
    }
    return actual_string;
}


export function sanitizeString(string) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match)=>(map[match]));
}
