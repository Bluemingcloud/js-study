
/*
Module 은 ES6에서 미리 작성한 클래스 파일
변수, 함수, 클래스 등이 포함되어 있다.

Module 을 외부로 내보낼때는 
named export 방식 - 여러값을 내보낼 때 사용
default export 방식 - 하나씩 내보낼 때 사용
*/

// const name = "홍길동";
// const age = 20;

// let info = () => {
//     console.log(name, age); // export 없이 그냥 사용시 값을 내보낼 수 없음!(외부에서 사용 불가)
// }


// named export 방식
export const name = "홍길동";
export const age = 20;

export let info = () => {
    console.log(`이름: ${name}, 나이: ${age}`); // 사용할 외부 파일에서 사용 가능
}