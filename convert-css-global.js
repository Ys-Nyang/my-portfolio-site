// 📁 convert-css-global.js

const fs   = require("fs");
const path = require("path");

/**
 * src 폴더 아래의 모든 .css 파일 경로를 재귀 탐색하여 반환합니다.
 * @param {string} dir 탐색할 디렉터리 경로
 * @param {string[]} out 파일 경로를 담을 배열
 * @returns {string[]} .css 파일 경로 리스트
 */
function findCssFiles(dir, out = []) {
  fs.readdirSync(dir).forEach(name => {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      findCssFiles(full, out);
    } else if (name.endsWith(".css")) {
      out.push(full);
    }
  });
  return out;
}

// 1) src 폴더 전체에서 CSS 파일 검색
const cssFiles = findCssFiles("src");

// 2) 각 CSS 파일을 읽어서 절대 위치를 margin 방식으로 변환
cssFiles.forEach(filePath => {
  console.log(`▶ 처리 중: ${filePath}`);
  let css = fs.readFileSync(filePath, "utf8");

  // position:absolute; top:XXXpx; left:YYYpx; → position:relative; margin:XXXpx 0 0 YYYpx;
  css = css.replace(
    /position:\s*absolute;[\s\S]*?top:\s*(\d+)px;[\s\S]*?left:\s*(\d+)px;/g,
    (_, top, left) => `position: relative; margin: ${top}px 0 0 ${left}px;`
  );

  fs.writeFileSync(filePath, css, "utf8");
  console.log(`✔ 완료: ${filePath}`);
});

console.log("모든 CSS 파일 변환이 완료되었습니다!");