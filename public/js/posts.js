const activeBorder = "border-solid border-2 border-pink-600";

let Editor, imgLink;

function customEditorAddImage() {
  $("#" + modalImgId).modal({
    escapeClose: false,
    clickClose: false,
    showClose: false,
  });
}

$(document).on("click", ".galleries-image", function () {
  const $target = $(this);
  $(".galleries-image").removeClass(activeBorder);
  $target.addClass(activeBorder);
  imgLink = `${GITHUB_IMAGE_PATH}${$target.attr("title")}`;
});

$(document).on("click", `#${okImgBtnId}`, function () {
  console.log($.modal);
  Editor.codemirror.replaceSelection(
    "\n" + `![image](${imgLink} "a title")` + "\n"
  );
  $.modal.close();
});

$(function () {
  // import /js/editor.js to use
  startEditor("editor", [
    {
      name: "add-image",
      action: function customFunction(editor) {
        const pos = editor.codemirror.getCursor();
        editor.codemirror.setSelection(pos, pos);
        Editor = editor;
        customEditorAddImage();
      },
      className: "fa fa-image",
      title: "Add Image",
    },
  ]);
});
