// 웹 스토리지 쓰기

// 1. 로컬 스토리지 쓰기
localStorage.setItem("key",value);
localStorage.key = value;

// 2. 세션 스토리지 쓰기
sessionStorage.setItem("key",value);
sessionStorage.key = value;

//웹 스토리지 접근

// 1. 로컬 스토리지 접근
localStorage.getItem('key');
localStorage.key;

// 2. 세션 스토리지 접근
sessionStorage.getItem('key');
sessionStorage.key;

//웹 스토리지 삭제

// 1. 로컬 스토리지 삭제
localStorage.removeItem('key');
localStorage.clear();

// 2. 세션 스토리지 삭제
sessionStorage.removeItem('key');
sessionStorage.clear();