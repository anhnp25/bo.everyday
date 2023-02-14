function startEditor(editor_id, customFn = []) {
  const element = document.getElementById(editor_id);
  if (element.nodeName !== "TEXTAREA") {
    return console.log(`Element with Id: "${editor_id}" must be a textarea`);
  }
  new SimpleMDE({
    element: document.getElementById(editor_id),
    autofocus: true,
    spellChecker: false,
    autoDownloadFontAwesome: true,
    // autosave: {
    //   enabled: true,
    //   uniqueId: "editor-autosave",
    //   delay: 1000,
    // },
    insertText: ["![](http://", ")"],
    toolbar: [
      "bold",
      "italic",
      "strikethrough",
      "heading-smaller",
      "heading-bigger",
      "code",
      "quote",
      "unordered-list",
      "ordered-list",
      "link",
      "table",
      "horizontal-rule",
      "preview",
      "side-by-side",
      "fullscreen",
      ...customFn,
    ],
  });
}
