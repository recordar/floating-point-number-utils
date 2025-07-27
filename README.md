# floating-point-number-utils

간단한 부동소수점 연산 유틸리티 패키지

## 소개

`floating-point-number-utils`는 자바스크립트/타입스크립트 환경에서 부동소수점 숫자의 기본 연산(곱셈, 나눗셈, 덧셈)을 간편하게 사용할 수 있도록 도와주는 경량 유틸리티 라이브러리입니다.

## 주요 기능
- multiply(a, b): 곱셈
- divide(a, b): 나눗셈
- add(a, b): 덧셈

## 설치

pnpm 사용 시:
```sh
pnpm add floating-point-number-utils-2
```

npm 사용 시:
```sh
npm install floating-point-number-utils-2
```

## 사용법

### TypeScript/ESM
```ts
import { multiply, divide, add } from 'floating-point-number-utils-2';

console.log(multiply(2.5, 4)); // 10
console.log(divide(10, 2));    // 5
console.log(add(1.1, 2.2));    // 3.3
```

### CommonJS
```js
const { multiply, divide, add } = require('floating-point-number-utils-2');

console.log(multiply(2.5, 4)); // 10
console.log(divide(10, 2));    // 5
console.log(add(1.1, 2.2));    // 3.3
```

## 빌드
```sh
pnpm run build
```

## 릴리즈 및 배포
```sh
pnpm run publish
```

## 라이선스

MIT
