/**
 * Blasphemizer Chrome Extension Version 1.0
 */

words = {"privilege": "sinfulness",
         "white male": "sodomite",
         "diverse": "blessed",
         "diversity": "Christ",
         "whiteness": "sin",
         "heteronormativity": "sin",
         "patriarchy": "Satan",
         "feminism": "The Church",
         "capitalism": "debauchery"}


flags = "gi"

function blasphemize(text) {
    var replacedText = String(text)
    for (var word in words) {
        replacedText = replacedText.replace(RegExp(word, flags), words[word])
    }

    return replacedText
}

var elements = document.getElementsByTagName('*');
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === Node.TEXT_NODE) {
            var text = node.nodeValue;
            var replacedText = blasphemize(text)

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText),
                                     node);
            }
        }
    }
}

