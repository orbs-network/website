export const cutText = (text, wordToCut) => {
  var string_copy = (" " + text).slice(1);
  const extraIndex = text.indexOf(wordToCut);
  if (extraIndex < 0) {
    return null;
  }
  return string_copy.substr(0, extraIndex);
};
