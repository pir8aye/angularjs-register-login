function Environment() {
    const arr = window.location.href.split('/');
    const host = arr[2];
    switch (host) {
        case '':
            return '';
    }
    return arr[0] + '//' + host + '/';
}

export default Environment;