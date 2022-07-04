let str = `
010-1322-4234.
thesining94@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`;

// const regexp = new RegExp('the', 'gi');//g 배열로 만들겠다 i 대소문자 구분X
// const regexp = /the/gi
// // console.log(str.match(regexp));
// console.log(regexp.test(str));
// console.log(str.replace(regexp, 'monkey'));

const regexp = /the/gi
// console.log(str.match(/\.$/gim));
// console.log(str.match(/d$/gm));
// console.log(str.match(/^t/gim));
// console.log(str.match(/h..p/gim));
// console.log(str.match(/fox|dog/g));
// console.log(str.match(/https?/g));

// console.log(str.match(/d{2}/g));
// console.log(str.match(/d{2, }/g));
// console.log(str.match(/\b\w{2,4}\b/g));

// console.log(str.match(/[0-9]{2,}/g));
// console.log(str.match(/[가-힣]{1,}/g));

// console.log(str.match(/\w/g));
// console.log(str.match(/\bf\w{1,}\b/g));
// console.log(str.match(/\d{1,}/g));

// const lee = `   the hello world !

// ` 
// console.log(lee.replace(/\s/g, ''));

console.log(str.match(/(?<=@).{1,}/g));