//Hello
// This file will hold our actual extension script
const allImgs = document.querySelectorAll('img');
const testImg = document.createElement('img');
testImg.src = 'https://assets.website-files.com/5ee147cc310949c7d83f7f9d/5f30a34fa1634899b41fda8e_codesmith-course-page.png'
console.log(allImgs)
allImgs.forEach(node => node.src = testImg.src);
