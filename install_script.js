// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: brown; icon-glyph: download;

 const scripts = [
  {
    moduleName: "MyTest",
    url:
      "https://raw.githubusercontent.com/ancelee/Scriptable/main/demo/mytest.js",
  },
];
// Install Scripts.js
const $ = importModule("Env");
function update() {
  log("🔔更新脚本开始!");
  scripts.forEach((script) => {
    $.getFile(script);
  });
  log("🔔更新脚本结束!");
}
update();