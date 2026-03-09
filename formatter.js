function formatText(text) {
    return text.trim().replace(/\s+/g, ' ');
}

console.log(formatText('   This  is  a   test   '));