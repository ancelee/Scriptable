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
// const $ = importModule("Env");
function update() {
  log("🔔更新脚本开始!");
  scripts.forEach((script) => {
    getFile(script);
  });
  log("🔔更新脚本结束!");
}
/**
 * @description 下载文件
 * @param {*} param0 
 */
 const getFile = async ({moduleName, url}) => {
  log(`开始下载文件: 🌝 ${moduleName}`)
  const header = `// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: file-code;\n`;
  const content = await getStr({url})
  const fileHeader = content.includes('icon-color') ? `` : header
  write(`${moduleName}`, `${fileHeader}${content}`)
  log(`文件下载完成: 🌚 ${moduleName}`)
}

 /**
  * @description GET，返回String数据
  * @param {*} param0 request信息
  * @param {*} callback 回调返回response和String对象
  */
  const getStr = async ({ url, headers = {} }, callback = () => {} ) => {
    request.url = url
    request.method = 'GET'
    request.headers = {
      ...headers,
      ...defaultHeaders
    }
    const data = await request.loadString()
    callback(request.response, data)
    return data
  }

update();