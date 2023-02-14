console.log(listImg);

const activeBorder = "border-solid border-2 border-pink-600";

const modalGalleriesBtnId = "#galleries";
let Editor, imgLink;

function customEditorAddImage() {
  $(modalGalleriesBtnId).modal();
}

$(document).on("click", ".galleries-image", function () {
  const $target = $(this);

  $(".galleries-image").removeClass(activeBorder);
  $target.addClass(activeBorder);

  imgLink = `/images${$target.attr("title")}`;

  Editor.codemirror.replaceSelection(
    "\n" + `![image](/images${$target.attr("title")} "a title")` + "\n"
  );
});

$(function () {
  // import /js/editor.js to use
  startEditor("editor", [
    {
      name: "add-image",
      action: function customFunction(editor) {
        const pos = editor.codemirror.getCursor();
        editor.codemirror.setSelection(pos, pos);
        customEditorAddImage();
        Editor = editor;
      },
      className: "fa fa-image",
      title: "Add Image",
    },
  ]);
});
