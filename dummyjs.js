var ele = new DOMParser().parseFromString(htmlString, 'text/html'); 
if (ele.find('h1').length !== 0) { 
    if (ele.text().trim().replaceAll('\n', '').replaceAll('\t', '').includes('Hello World')) 
    return true; 
} else return false;